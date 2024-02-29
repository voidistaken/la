import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link, useNavigate } from "react-router-dom";
import IconBox from "../components/IconBox";
import { Input } from "@/components/ui/input";

import AuthApi from "../services/api/AuthApi";
import { useDispatch } from "react-redux";
import { setAuthenticated, setUser } from "../redux/slices/authSlice";

const LoginForm = ({ click }) => {
  const navigate = useNavigate();
  const formSchema = z.object({
    email: z.string().email().min(2).max(50),
    password: z.string().min(8).max(30),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "test@example.com",
      password: "pass123456",
    },
  });
  const dispatch = useDispatch();
  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const { email, password } = values;
    try {
      const result = await AuthApi.login(email, password);

      const { data, status } = result;

      if (status === 200) {
        const role = data.user.role;
        dispatch(setUser(data.user));
        dispatch(setAuthenticated(true));

        switch (role) {
          case "driver":
            navigate("/driver/dashboard");
            break;
          case "rider":
            navigate("/rider/dashboard");
            break;
          case "admin":
            navigate("/dashboard");
            break;
        }
      }
    } catch (error) {
      // Handle login error
      console.error("Login failed:", error.message);
    }

    console.log(values);
  }
  return (
    <div className=" bg-rose-100 p-10 h-screen w-screen grid place-content-center">
      <div className="   bg-white flex flex-col  sm:grid sm:grid-cols-2 rounded-3xl gap-14 sm:gap-24 overflow-hidden w-[340px] h-[570px] md:w-[870px] md:h-[520px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" col-span-1 flex flex-col items-center justify-center gap-8 py-10"
          >
            <div className="flex flex-col justify-center items-center gap-6">
              <div>
                <h1 className="font-semibold text-4xl">Sign In</h1>
              </div>
              {/* <div className="flex flex-row gap-2 items-center">
                <IconBox icon={<TbMail size={24} />} />
                <IconBox icon={<TbBrandGithub size={24} />} />
                <IconBox icon={<TbBrandGoogle size={24} />} />
                <IconBox icon={<TbBrandFacebook size={24} />} />
              </div> */}
              <div>
                <p className="text-sm font-bold text-gray-600">
                  or use email and password
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="sm:w-72 mx-auto ">
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Email..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem className="sm:w-72 mx-auto ">
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input placeholder="Password..." {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="flex flex-col justify-center items-center gap-4">
              <a href="#" className="text-sm text-gray-600 font-semibold">
                Forgot your password ?
              </a>
              <Button
                disabled={form.formState.isSubmitting}
                type="submit"
                className="w-full bg-rose-400 font-bold text-xl"
              >
                {form.formState.isSubmitting && (
                  <Loader2 className="animate-spin mr-2" />
                )}
                Login
              </Button>
            </div>
          </form>
        </Form>

        <div className=" hidden md:block py-4 bg-rose-400 h-fit rounded-lg sm:h-full">
          <div className="flex flex-col h-full gap-10 justify-center items-center ">
            <h1 className="text-white text-3xl font-bold">
              Don't have an account ?
            </h1>
            <div className="w-fit px-4  mx-auto">
              <p className="w-fit sm:w-72 text-white text-sm font-bold">
                Register with your personal details to use all of site features
              </p>
            </div>
            <Link to={"/rider/register"}>
              <button
                onClick={click}
                className="px-8 py-2 bg-white text-black font-bold cursor-pointer rounded-md"
              >
                Sign up
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
