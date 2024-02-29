import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AiFillHome } from "react-icons/ai";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";


export default function Terms() {
  return (
<div className=" bg-rose-100 md:bg-white border   shadow-lg p-10 h-[900px]  md:h-screen grid place-content-center ">
      <div className="md:w-[1000px] md:h-fit bg-white flex flex-col shadow-md border h-[600px] sm:grid sm:grid-cols-2  rounded-3xl gap-14 sm:gap-24 overflow-hidden ">
            <div className="flex flex-col justify-center items-center gap-6">
              <div className="text-center ml-8 gap-5 flex flex-col ">
                <h1 className="font-semibold text-4xl justify-center items-center relative md:relative top-[50px] md:top-0 -left-[15px] -md:left-0 ">About us</h1>
                <p className="font-semibold text-xl relative md:relative top-[80px] md:top-0  -left-[15px] -md:left-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
              </div>

            </div>
        <div className="py-4 bg-rose-400 h-fit  sm:h-full rounded-tl-full rounded-bl-full hidden md:block ">
          <div className="flex flex-col h-full gap-10 justify-center items-center  ">
            <h1 className="text-white text-5xl text-center font-bold m-auto mt-40  relative top-[90px]">
              Hello, We are SheDrive
            </h1>
            <p className="text-white flex m-auto mb-40 text-xl relative top-[70px]">Learn more about our project Here!</p>
            <div className=" flex gap-2 m-auto mt-20 relative bottom-[160px]">
            <FaFacebookSquare className="  text-4xl  cursor-pointer hover:text-black text-white"/>
            <PiInstagramLogoFill className="text-4xl  cursor-pointer hover:text-black text-white"/>
            <FaTwitter className="text-4xl  cursor-pointer hover:text-black text-white"/>
            </div>
            <div className="w-fit px-4  mx-auto">
              <p className="w-fit sm:w-72 text-white text-sm font-bold">
              </p>
            </div>
            
          </div>
        </div>
      </div>
      <div className=" flex gap-2 m-auto mt-20 relative bottom-[160px]  md:hidden">
      <FaFacebookSquare className="  text-4xl  cursor-pointer hover:text-black text-rose-400"/>
      <PiInstagramLogoFill className="text-4xl  cursor-pointer hover:text-black text-rose-400"/>
      <FaTwitter className="text-4xl  cursor-pointer hover:text-black text-rose-400"/>
      </div>

    </div>
  );
}
