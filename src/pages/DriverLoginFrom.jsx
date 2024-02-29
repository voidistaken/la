import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const DriverLoginFrom = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const img_link =
    "https://ui.shadcn.com/_next/image?url=%2Fexamples%2Fauthentication-dark.png&w=1920&q=75";

  return (
    <div className="grid grid-cols-4 h-full">
      <div className="relative col-span-2 hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r ">
        <div className="absolute inset-0 bg-zinc-900 w-full " />
        <div className="relative z-20 flex items-center text-lg font-medium">
          <span className="text-3xl text-pink-500">S</span>he Drive
        </div>
        <div className="relative z-20 mt-auto">
          <blockquote className="space-y-2">
            <p className="text-lg">
              &ldquo;As a woman, using this app brings a sense of security to my
              travels. It's more than just a ride-sharing service; it's a
              community that prioritizes safety and empowerment. I can
              confidently say it has transformed my travel experience for the
              better.&rdquo;
            </p>
            <footer className="text-sm italic">- Lana del rey</footer>
          </blockquote>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className=" col-span-2 flex flex-col justify-start gap-4 order-2 h-full pt-2"
      >
        <div className="flex flex-wrap gap-y-4 gap-x-8 sm:w-96 md:ml-20 ">
          <h1 className="text-2xl font-semibold tracking-tight">
            Create an account
          </h1>
          <div className="grid w-44  max-w-sm items-center gap-1.5">
            <Label htmlFor="firstName">First name</Label>
            <Input id="firstName" type="text" placeholder="First name..." />
          </div>
          <div className="grid w-44  max-w-sm items-center gap-1.5">
            <Label htmlFor="lastName">Last name</Label>
            <Input id="lastName" type="text" placeholder="Last name..." />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="Email address..." />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="birthday">Date of birth</Label>
            <Input id="birthday" type="date" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="cin">Carte national</Label>
            <Input id="cin" type="file" />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="driver_license_number">
              Driver's License Number
            </Label>
            <Input
              id="driver_license_number"
              type="driver_license_number"
              placeholder="Driver's License Number..."
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="expiration_date">Expiration Date</Label>
            <Input
              id="expiration_date"
              type="expiration_date"
              placeholder="Expiration Date..."
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="driver_license">
              Image of the Driver's License
            </Label>
            <Input id="driver_license" type="file" />
          </div>
          <div className="grid w-44  max-w-sm items-center gap-1.5">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" placeholder="Password..." />
          </div>
          <div className="grid w-44  max-w-sm items-center gap-1.5">
            <Label htmlFor="confirm">Confirm password</Label>
            <Input
              placeholder="Confirm password..."
              id="confirm"
              type="password"
            />
          </div>
          <div className="grid w-full  max-w-sm items-center gap-1.5">
            <Label htmlFor="phone">Phone number</Label>
            <Input placeholder="phone number..." id="phone" type="text" />
          </div>
            <Button className="w-full" type="submit" variant="" size="lg">
              Sign Up
            </Button>
          
        </div>
        <div className=" flex justify-center items-center pr-20 ">
          <p className="text-sm text-muted-foreground">
            By clicking Sign up, you agree to our{" "}
            <a
              href="/terms"
              className="underline underline-offset-4 hover:text-primary"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="/privacy"
              className="underline underline-offset-4 hover:text-primary"
            >
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </form>
    </div>
  );
};

export default DriverLoginFrom;
