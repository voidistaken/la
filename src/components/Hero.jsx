import { useNavigate } from "react-router-dom";
import womenImage from "./ui/images/women.jpeg"; // Importez l'image depuis le dossier images

const Hero = () => {
  const nav = useNavigate();

  return (
    <div className="">
      <div className="h-[643px] w-[2050px]  bg-black relative flex items-center px-80">
      <div className="relative overflow-hidden hidden sm:flex sm:items-center sm:px-34 sm:w-[1600px] sm:h-[643px] sm:mr-[40px] sm:ml-[-340px]">
    <img src="https://images.unsplash.com/photo-1619722087489-f0b1a6fdbc6d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Women" className="w-full h-[100%]" />
    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-black opacity-100"></div>
    </div>

      <div className="sm:flex sm:relative sm:flex-col  flex relative flex-col right-[300px]   sm:right-0">
        <div className="  p-12 sm:w-[670px] w-[370px] flex flex-col gap-4 text-white ">
          <h1 className=" font-bold sm:text-6xl bg-gradient-to-r from-fuchsia-400 to-rose-400 bg-clip-text text-transparent sm:right-0  text-4xl  sm:font-bold sm:relative sm:flex sm:leading-[70px]  ">
            Ride with
            <br />
            Confidence
          </h1>
          <p className="  sm:text-lg">
            Empowering Women, One Ride at a Time – Join our community of female
            drivers and passengers, where safety and support ride shotgun on
            every journey.
          </p>
          </div>
          <button
            onClick={() => nav("/rider/register")}
            className=" sm:w-[700px] relative left-6 w-[300px] sm:left-5 sm:relative px-8 py-3 mt-6 font-bold text-black transition duration-300 ease-in-out bg-white rounded-full shadow-lg hover:bg-rose-400 hover:text-white"
          >
            Get Started
          </button>
        </div>
        <div
          className="relative right-0 transform translate-x-1/2 translate-y-1/2 bottom-20"
          style={{ position: "relative" }}
        >

        </div>
      </div>
    </div>
  );
};

export default Hero;
