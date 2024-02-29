import React from "react";
import NavbarItems from "./NavigationMenu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, NavbarContent, NavbarItem} from "@nextui-org/navbar";
import { FaCarAlt,FaUser  } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import { IoMdPeople } from "react-icons/io";
import { IoLogIn } from "react-icons/io5";
import { HiPencilSquare } from "react-icons/hi2";
import { ImBubbles2 } from "react-icons/im";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };
  const nav = useNavigate();

  return (
    <Navbar className="  md:overflow-visible overflow-hidden"
    isMenuOpen={isMenuOpen}
    onMenuOpenChange={setIsMenuOpen}
  >
    <NavbarContent  className='sm:hidden pr-3  ' justify="start">
      <NavbarMenuToggle  />
    </NavbarContent>


    <NavbarItems className="right-8 relative" />


    <NavbarContent className="sm:hidden pr-3" justify="center">
      <NavbarBrand>
      <Link to="/" onClick={handleMenuItemClick} className="md:text-2xl  text-xl font-bold text-black md:mt-0 mt-2 relative md:right-0 md:left-0 left-18  md:bottom-0 bottom-1 "><span className="font-extrabold r text-rose-400">S</span>heDrive
      </Link>
      </NavbarBrand>
    </NavbarContent>
    <NavbarContent className="hidden  sm:flex gap-4" justify="center">
      <NavbarBrand className="relative left-[270px]" >
      <Link to="/" className="relative t md:text-2xl font-bold text-black md:mt-0 mt-2  md:right-0 md:left-0 left-12  md:bottom-0 bottom-1 "><span className="   font-extrabold r text-rose-400">S</span>heDrive
      </Link>
      </NavbarBrand>
      <NavbarItem>
        <button isDisabled  color="foreground" className=" relative right-[500px]"  to="/driver">
          Driver
        </button>
      </NavbarItem>

      <NavbarItem>
        <button color="foreground" className="relative right-[490px]" to="/riderr">
          Rider
        </button>
      </NavbarItem>
    </NavbarContent>

    <NavbarContent justify="end" className="relative left-[400px]">
      <NavbarItem className=" hidden lg:flex ">
      <Button
          className="bg-rose-400 font-bold"
          onClick={() => nav("/login")}
          size="sm"
        >
          Login
        </Button>
      </NavbarItem>
      <NavbarItem className="hidden lg:flex">
      <Button
          className=" bg-black font-bold"
          onClick={() => nav("/rider/register")}
          size="sm"
        >
          Register
        </Button>
      </NavbarItem>
    </NavbarContent>

    <NavbarMenu >
          <NavbarMenuItem className="" >
            <div className="flex flex-col gap-5">
            <div><FaCarAlt className="relative flex top-[39px] text-gray-500 text-2xl" />
            <Link   className="relative  top-[10px] bottom-[20px] left-[30px] font-semibold  text-gray-500 text-2xl"  >- Rider</Link><br /></div>
            <div><FaUser className="relative flex top-[45px] text-2xl text-gray-500" />
            <Link  className="relative top-[20px] bottom-[30px] left-[30px]  font-semibold text-gray-500  text-2xl"  >- Driver</Link><br /></div>
            <div><IoMdPeople className="relative flex top-[60px] text-3xl " />
            
            <Link onClick={handleMenuItemClick} className="relative top-[30px]  bottom-[40px] left-[30px] font-semibold  text-2xl" to="/terms" >- About us</Link><br /></div>
            <div><FaPenToSquare className="relative flex top-[69px] text-2xl" />

            <Link onClick={handleMenuItemClick} className="relative top-[40px] bottom-[30px] left-[30px] font-semibold  text-2xl" to="/help" >-  Terms of services</Link><br /></div>
            <div><ImBubbles2  className="relative flex top-[79px] text-2xl" />

            <Link onClick={handleMenuItemClick} className="relative top-[50px] bottom-[30px] left-[30px] font-semibold  text-2xl " to="/contact" >- Contact</Link><br /></div>
            <div><IoLogIn  className="relative flex top-[75px]  text-3xl " />

            <Link onClick={handleMenuItemClick} className="relative top-[43px] bottom-[30px] left-[30px] text-2xl font-bold " to="/login" >- Login</Link><br /></div>
            <div><HiPencilSquare  className="relative flex top-[77px] text-3xl" />

            <Link onClick={handleMenuItemClick} className="relative top-[46px]  bottom-[30px] left-[30px] font-bold  text-2xl" to="/rider/register" >- Register</Link><br /></div>
            </div>

          </NavbarMenuItem>
      </NavbarMenu>
  </Navbar>
  );
};

export default App;
