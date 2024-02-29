import React, { useEffect, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaDotCircle, FaSearchLocation } from "react-icons/fa";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import AdminNavbar from "../components/AdminNavbar";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { axiosClient } from "../api/axios";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import "leaflet/dist/leaflet.css";
import axios from "axios";
import Map from "../components/Map";
import { Car, DollarSign, Eye, SearchIcon, Star } from "lucide-react";
import DriversCard from "../components/DriversCard";
import { DrawerDemo } from "../components/PriceDrawer";
import { AcceptAlert } from "../components/AcceptAlert";
import { Toaster } from "sonner";
import CardsCarousel from "../components/CardsCarousel";
import InputAutoComplete from "../components/InputAutoComplete";
import RidersCarousel from "../components/RidersCarousel";
import RidersCard from "../components/RidersCard";
import { SlSpeedometer } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "../redux/slices/authSlice";

const DriverLayout = () => {
  const [logged, setLogged] = useState(false);

  const nav = useNavigate();
  const user = useSelector(getUser);

  const isAuthenticated = useSelector((state) => state.auth).isAuthenticated;
  useEffect(() => {
    if (isAuthenticated) {
      console.log(isAuthenticated);
      setLogged(true);
    } else {
      nav("/login");
    }
  }, []);

  if (!logged) return <></>; 

  console.log(user);

  return (
    <div className="h-full overflow-hidden">
      <AdminNavbar name={user?.first_name} />

      <div className="absolute  left-0 w-full h-screen md:h-full z-[1]">
        <Map />
      </div>
      <div className="flex flex-col py-14 gap-8">
        <div className="bg-white w-[80%] mx-auto  rounded-md px-5 py-8 z-[5] relative flex flex-row justify-between">
          <div className="flex flex-row gap-3 items-start">
            <Avatar>
              <AvatarImage
                src={
                  "https://pics.craiyon.com/2023-06-08/0825485f4b0d44f6bcb3d11b8254b87d.webp"
                }
                alt="@shadcn"
              />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1">
              <span className="text-black font-bold text-xl">
                {user?.first_name} {user?.last_name}
              </span>
              <p className="text-sm text-gray-700 italic">
                "I'm not waiting for a happy ending anymore, i'm just waiting
                for an end"
              </p>
              <span>Age : {user?.age}</span>
              <span>Phone Number : {user?.phone}</span>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------------- */}
          <div className="pr-11">
            <div className="flex flex-row-reverse gap-10">
              <div className="flex flex-col gap-4 font-bold text-xl">
                <div className="">
                  <h2>
                    Tripes : <span>29</span>
                  </h2>
                </div>
                <div>
                  <h2>Reviews :</h2>
                  <span className="inline-flex gap-1 items-center">
                    <Star className="text-yellow-400" />
                    4.6 / 5
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 font-bold text-xl">
                <div className="">
                  <h2 className="inline-flex items-center gap-1">
                    <Car /> : <span className="text-md">BMW</span>
                  </h2>
                </div>
                <div>
                  <h2>Wallet :</h2>
                  <span className="inline-flex gap-1 items-center text-lg">
                    $ 246.77
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-4 font-bold text-xl">
                <div className="">
                  <h2 className="inline-flex items-center gap-1">
                    <Eye /> : <span className="text-md">87</span>
                  </h2>
                </div>
                <div>
                  <h2>Driven :</h2>
                  <span className="inline-flex gap-1 items-center text-base">
                    <SlSpeedometer /> 24.77 Km.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="z-[11] relative mx-auto w-fit  flex flex-col gap-6">
          <div className="px-11 py-6  w-[90%] mx-auto bg-[rgba(0,0,0,0.4)] rounded-md text-center text-2xl text-white font-extrabold">
            There are 9 Requests near you.
          </div>
          <RidersCarousel>
            <RidersCard
              name={"bellie eilish"}
              distance={"2.4 km"}
              price={"44 MAD."}
              btw={"i have a dog with me"}
            />
            <RidersCard
              name={"Lana del rey"}
              distance={"3.9 km"}
              price={"69 MAD."}
              btw={"i might smoke a cigarette"}
            />
            <RidersCard
              name={"Ice spice"}
              distance={"6.7 km"}
              price={"123 MAD."}
              btw={"You thought i was feeling you ?"}
            />
            <RidersCard
              name={"Adele"}
              distance={"1.3 km"}
              price={"27 MAD."}
              btw={"you need to wait a little"}
            />
            <RidersCard
              name={"bellie eilish"}
              distance={"2.4 km"}
              price={"44 MAD."}
              btw={"i have a dog with me"}
            />
            <RidersCard
              name={"bellie eilish"}
              distance={"2.4 km"}
              price={"44 MAD."}
              btw={"i have a dog with me"}
            />
          </RidersCarousel>
        </div>
      </div>
    </div>
  );
};

export default DriverLayout;
