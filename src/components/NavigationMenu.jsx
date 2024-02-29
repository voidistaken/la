import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { NavigationMenuViewport } from "./ui/navigation-menu";


function NavbarItems() {
  return (
    <NavigationMenu className="hidden md:block relative right-[400px] ">
      <NavigationMenuList className="">
        <NavigationMenuItem className="">
          <NavigationMenuTrigger className="">Help center</NavigationMenuTrigger>
          <NavigationMenuContent className="">
            <ul className="grid gap-3 p-4  md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
              <ListItem href="/help" title="Terms of service">
              By using our website , You agree to be bound by these Terms of Service and acknowledge that You are representing Your
              </ListItem>
              <ListItem href="/terms" title="About us">
              Shedrive is a website that help you get you're rides with freedom

              </ListItem>
              <ListItem href="/contact" title="Contact">
                If you Have any problems or questions using our website
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = ({ className, title, children, ...props }) => {
  return (
    <li>
      <NavigationMenuLink>
        <a
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

export default NavbarItems;
