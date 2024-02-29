import { Label } from "@/components/ui/label";
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

const RiderRegistrationForm = () => {
  const navigate = useNavigate();
  const formSchema = z.object({
    email: z.string().email().min(2).max(50),
    password: z.string().min(8).max(30),
    first_name: z.string().min(3).max(40),
    last_name: z.string().min(3).max(40),
    phone: z.string().min(10).max(10),
    age: z.string(),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });
  const dispatch = useDispatch();
  async function onSubmit(values) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    values.age = 18;

    try {
      const result = await AuthApi.registerRider(values);

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
    <div className=" bg-gray-100 p-10 h-screen grid place-content-center">
      <div className="h-[720px] w-[330px] bg-white flex flex-col  sm:grid sm:grid-cols-2 rounded-3xl gap-8 sm:gap-8 overflow-hidden md:w-[870px] md:h-[520px]">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className=" col-span-1 flex flex-col items-start justify-center gap-4 order-2"
          >
            <h1 className="text-2xl md:left-[99px] left-[79px] md:relative relative md:top-0 top-2 font-semibold tracking-tight">
              Create an account
            </h1>
            <div className="flex flex-wrap gap-y-4 gap-x-8 sm:w-96 mx-auto ">
              <div className="grid w-44 max-w-sm items-center gap-1.5">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="relative md:relative md:left-0 left-[23px] ">
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="First Name..." {...field} />
                      </FormControl>
                      
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid w-44 max-w-sm items-center gap-1.5">
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="relative md:relative md:left-0 left-[23px] ">
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Last Name..." {...field} />
                      </FormControl>
                      
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid md:w-full w-[250px] max-w-sm items-center gap-1.5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="relative md:relative md:left-0 left-[23px] ">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="Email..." {...field} />
                      </FormControl>
                      
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid md:w-full w-[250px] max-w-sm items-center gap-1.5">
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className=" relative md:relative md:left-0 left-[23px]">
                      <FormLabel>Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="Phone..." {...field} />
                      </FormControl>
                      
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid w-44 max-w-sm items-center gap-1.5">
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className=" relative md:relative md:left-0 left-[23px]">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input placeholder="Password..." {...field} />
                      </FormControl>
                      
                    </FormItem>
                  )}
                />
              </div>
              <div className="grid w-44 max-w-sm items-center gap-1.5">
                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem className=" relative md:relative md:left-0 left-[23px]">
                      <FormLabel>Date of birth</FormLabel>
                      <FormControl>
                        <Input type="date" {...field} />
                      </FormControl>
                      
                    </FormItem>
                  )}
                />
              </div>

              <Button className="md:w-full w-[250px] relative md:relative  md:left-0 left-[40px]" type="submit" variant="" size="lg">
                Sign Up
              </Button>
            </div>
            <p className="px-8 text-center text-sm text-muted-foreground">
              By clicking continue, you agree to our{" "}
              <a
                href="/help"
                className="underline underline-offset-4 hover:text-primary"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/help"
                className="underline underline-offset-4 hover:text-primary"
              >
                Privacy Policy
              </a>
              .
            </p>
          </form>
        </Form>

        <div className="py-4 bg-black hidden md:block  sm:h-full rounded-lg">
          <div className="flex flex-col h-full gap-10 justify-center items-center ">
            <h1 className="text-white text-3xl font-bold">
              Already have an account ?
            </h1>
          <Link to={"/login"}>
                    
            <Button type="button" variant="secondary" size="lg">
              Sign In
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RiderRegistrationForm;
