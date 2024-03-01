import { useNavigate } from "react-router-dom";
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";

const MainSection = () => {
  const nav = useNavigate();

  return (
    <main className="my-[70px] w-[90%] mx-auto  flex flex-col md:flex md:flex-col justify-center gap-12 md:overflow-hidden  ">
    <Card className="py-4 md:hidden  bg-gray-100 rounded-xl ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start  ">
        <p className=" uppercase font-bold text-center relative left-[80px] ">We’re different</p>
        <p className="py-2  relative text-center left-[7px] ">At SheDrive, our mission is to revolutionize the way women commute by
          providing a safe.</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2 ">
        <Image
          alt="Card background"
          className="object-cover rounded-xl left-[20px] "
          src="https://plus.unsplash.com/premium_photo-1675019261168-b59f7f743192?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={270}
        />
      </CardBody>
    </Card>
    <div className="bg-gray-900 mb-14 w-[200px] -mt-5 h-1 md:mb-0 sm:hidden block  relative -bottom-[50px] left-[60px]"></div>
    <div className="p-8 w-[650px]  flex-col gap-2 top-[20px] ">
        <div className="bg-gray-900  mb-12 w-[200px] top-[10px] h-1 md:mb-0 relative bottom-11 left-[400px]"></div>
        <h1 className="text-5xl text-rose-400 hidden md:block md:relative  md:bottom-5 left-[400px] top-[20px]">We’re different</h1>
        <p style={{ fontSize: "18px" }} className="text-gray-800 hidden md:block left-[400px] top-[40px]  relative">
          At SheDrive, our mission is to revolutionize the way women commute by
          providing a safe, reliable, and empowering ride-sharing experience. We
          are committed to fostering a community where women feel secure,
          supported, and in control of their journeys.
        </p>{" "}
        <button
          onClick={() => nav("/help")}
          className=" hidden md:block px-4 py-3 top-[50px] mt-3 font-bold left-[400px] relative text-white transition duration-300 ease-in-out bg-black rounded-full shadow-lg hover:bg-rose-400 hover:text-black"
        >
          Learn More
        </button>
        <br />
        <img 
          
          src="https://plus.unsplash.com/premium_photo-1675019261168-b59f7f743192?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={550}
          height={500}
          className="rounded-lg relative  bottom-[290px] left-[1100px] "
        />
      </div>

      <Card className="py-4 md:hidden   bg-orange-100 rounded-xl relative bottom-[510px] ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start  ">
        <p className="uppercase font-bold text-center relative left-[50px] ">Supportive Community</p>
        <p className="py-2 relative text-center left-[5px] ">Your safety is our priority. Our team of dedicated female drivers undergoes rigorous screening to ensure a trustworthy and comfortable ride for every passenger.</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2 ">
        <Image
          alt="Card background"
          className="object-cover rounded-xl left-[20px] "
          src="https://images.unsplash.com/photo-1555817129-2fa6b81bd8e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={270}
        />
      </CardBody>
    </Card>

    <div className="bg-gray-900 sm:hidden block mb-12 w-[200px] h-1 md:mb-0  relative bottom-[500px] left-[60px]"></div>

      <div className=" flex-col items-center w-full gap-8 mb:block md:flex md:flex-col    ">
        <div className="flex flex-row gap-4 ">
          <img
            style={{ position: "relative", bottom: "200px", left: "43px" }}
            width={550}
            height={500}
            className="rounded-lg hidden md:block"
            src="https://images.unsplash.com/photo-1680516125126-e92100cdcbba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          
          <div
            className="bg-gray-900  w-[200px] h-1  md:block hidden"
            style={{ position: "relative", bottom: "180px", left: "248px" }}
          ></div>
          <div
            className="p-8 w-[650px] flex flex-col gap-2"
            style={{ position: "relative", bottom: "155px" }}
          >
            <h1 className="text-5xl text-rose-400 md:block hidden md:relative md:bottom-4">Female Drivers</h1>
            <p className="text-gray-900 md:block hidden" style={{ fontSize: "18px" }}>
              Your safety is our priority. Our team of dedicated female drivers
              undergoes rigorous screening to ensure a trustworthy and
              comfortable ride for every passenger.
            </p>
          </div>
        </div>
        <div
          className="flex flex-row-reverse gap-4  md:flex md:flex-row-reverse md:gap-[300px] "
         
        >
          <img width={550} className="md:block hidden rounded-lg" src="https://images.unsplash.com/photo-1518803331006-b3d0aca60d2b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={500} />
          <div className="p-8 w-[650px]  flex-col gap-2 md:block hidden">
            <div className="bg-gray-900 mb-12 w-[200px] h-1 md:block hidden"></div>
            <h1 className="text-5xl text-rose-400 md:block hidden md:relative md:bottom-4 ">Secure Rides</h1>
            <p className="text-gray-900 md:block hidden" style={{ fontSize: "18px" }}>
              We employ state-of-the-art safety measures, including real-time
              tracking, emergency response features, and thorough background
              checks, to guarantee your peace of mind throughout every trip.
            </p>
          </div>
        </div>

      <Card className="py-4 md:hidden  bg-red-100 rounded-xl relative bottom-[590px] ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start   ">
        <p className="uppercase font-bold text-center relative left-[80px] ">Female Drivers</p>
        <p className="py-2 relative text-center left-[5px] ">Join a network of like-minded women who value safety and empowerment. Our platform goes beyond transportation.</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2 ">
        <Image
          alt="Card background"
          className="object-cover rounded-xl left-[20px] "
          src="https://images.unsplash.com/photo-1680516125126-e92100cdcbba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={270}
        />
      </CardBody>
    </Card>
    <div className="bg-gray-900 mb-14 w-[200px] -mt-5 h-1 md:mb-0 sm:hidden block  relative bottom-[500px] left-[60px]"></div>
    <Card className="py-4 md:hidden  bg-blue-100 rounded-xl relative bottom-[510px] ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start  ">
        <p className="uppercase font-bold text-center relative left-[80px] ">Ask Questions</p>
        <p className="py-2 relative text-center left-[5px] ">Anticipate common questions users may have about your service and provide clear answers to address any concerns.</p>
      </CardHeader>
      <CardBody className="overflow-visible py-2 ">
        <Image
          alt="Card background"
          className="object-cover text-center rounded-xl left-[20px] "
          src="https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          width={270}
        />
      </CardBody>
    </Card>

    
        <div className=" gap-4 mb:block hidden md:flex md:flex-row md:gap-[300px] ">
          <img
            width={550}
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1555817129-2fa6b81bd8e5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ position: "relative", left: "25px" }}
          />
          <div className=" ">
          <div
            className="bg-gray-900 relative  bottom-[20px] left-9   w-[200px] h-1"
          ></div>
          <div
            className="p-8 w-[650px] flex flex-col gap-2 "
           
          >
            <h1 className="text-5xl text-rose-400 md:relative md:bottom-5  ">Supportive Community</h1>
            <p className="text-gray-900" style={{ fontSize: "18px" }}>
              Join a network of like-minded women who value safety and
              empowerment. Our platform goes beyond transportation – it's a
              community that supports and uplifts each other.
            </p>
          </div>
        </div>
        </div>
        <div className="hidden md:block">
        <div
          className="md:flex md:flex-row-reverse  md:gap-[300px] hidden mb:block   "
          style={{ position: "relative", bottom: "29px" }}>
          <img width={550} className="rounded-lg " src="https://images.unsplash.com/photo-1578041262130-633307b3bfd6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height={500} />
          <div className="p-8 w-[650px]  flex-col gap-2 ">
            <div className="bg-gray-900 mb-12 w-[200px] h-1"></div>
            <h1 className="text-5xl text-rose-400 md:relative md:bottom-5">Empowerment Initiatives</h1>
            <p className="text-gray-900" style={{ fontSize: "18px" }}>
              If applicable, discuss any initiatives or programs aimed at
              empowering women within your service, such as driver training and
              support programs.
            </p>
          </div>
          </div>
        </div>
        <div className=" flex-row gap-4 mb:block hidden md:flex md:flex-row md:gap-[300px] ">
          <img
            width={550}
            className="rounded-lg"
            src="https://images.unsplash.com/photo-1633613286848-e6f43bbafb8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            style={{ position: "relative", left: "25px" }}
          />
          <div className="relative md:relative md:left-0 md:bottom-0 left-[900px] bottom-[350px]">
          <div
            className="bg-gray-900  top-11  w-[200px] h-1 relative left-[40px] "
          ></div>
          <div
            className="p-8 w-[650px] flex flex-col gap-2"
            style={{ position: "relative", top: "65px" }}
          >
            <h1 className="text-5xl text-rose-400 md:relative md:bottom-4">
              Frequently Asked Questions
            </h1>
            <p className="text-gray-900" style={{ fontSize: "18px" }}>
              Anticipate common questions users may have about your service and
              provide clear answers to address any concerns.
            </p>
            <button
              onClick={() => nav("/contact")}
              className="px-4 py-3 mt-3 font-bold text-white transition duration-300 ease-in-out bg-black rounded-full shadow-lg hover:bg-rose-400 hover:text-black"
            >
              Contact Us
            </button>
            </div>
          </div>
          
        </div>
        <div className=" flex-col items-center justify-between w-full p-8 overflow-hidden md:h-[200px] bg-black rounded-lg lg:flex-row lg:p-9 bg-gradient-to-r">
          <div className="w-full lg:w-[50%] text-center lg:text-left lg:mr-8">
            <h3 className="mb-4 text-2xl font-bold text-rose-400 lg:text-3xl lg:mb-6">
              Find out more about how we work
            </h3>
            <p className="text-base text-white lg:text-lg">
              Encourage visitors to take action by providing a prominent
              call-to-action button to sign up, register, or learn more about
              using your service.
            </p>
          </div>

          <div className="mt-6 lg:mt-0">
            <button
              onClick={() => nav("/login")}
              className=" relative left-[59px] md:left-[1400px] md:bottom-[80px] px-6 py-3 font-bold text-white transition duration-300 ease-in-out bg-transparent border border-white rounded-lg lg:px-8 lg:py-4 hover:bg-rose-400 hover:text-white"
            >
              GET STARTED
            </button>
          </div>
        </div>
      </div>

    </main>
    
  );
};

export default MainSection;
