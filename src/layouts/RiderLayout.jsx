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
import { Car, CarIcon, DollarSign, Eye, SearchIcon, Star } from "lucide-react";
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

const RiderLayout = () => {
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);
  const [show, setShow] = useState(false);
  const [showDest, setShowDest] = useState(false);
  const [addres, setAddress] = useState(null);
  const [destinationSearch, setDestinationSearch] = useState();
  const [destination, setDestination] = useState(null);
  const [price, setPrice] = useState(false);
  const nav = useNavigate();

  const NOMINATIM_BASE_URL = "https://nominatim.openstreetmap.org/search?";

  const [searchText, setSearchText] = useState();
  const [locations, setLocations] = useState(null);
  const [destinationLocations, setDestinationLocations] = useState(null);

  function handleSearch() {
    setShow(true);
    setShowDest(false);
    setDestinationLocations(null);
    const params = {
      q: searchText,
      format: "json",
      addressdetails: 1,
      polygon_geojson: 0,
      countrycodes: "MA",
    };
    const queryString = new URLSearchParams(params).toString();
    axios
      .get(`${NOMINATIM_BASE_URL}${queryString}`)
      .then(({ data }) => {
        setLocations(data);
        console.log(data);
      })
      .catch((err) => console.log("err: ", err));
  }

  function handleSearchDestination() {
    setShow(false);

    setShowDest(true);
    setLocations(null);
    const params = {
      q: destinationSearch,
      format: "json",
      addressdetails: 1,
      polygon_geojson: 0,
      countrycodes: "MA",
    };
    const queryString = new URLSearchParams(params).toString();
    axios
      .get(`${NOMINATIM_BASE_URL}${queryString}`)
      .then(({ data }) => {
        setDestinationLocations(data);
        console.log(data);
      })
      .catch((err) => console.log("err: ", err));
  }

  return (
    <div>
      <AdminNavbar name={user?.first_name} />
      <div className="flex flex-col">
        <div className=" flex flex-col md:grid md:grid-cols-4 container">
          <div className=" col-span-2 my-20 z-[11] w-fit">
            <div className="flex flex-col gap-10 items-start w-fit md:bg-gray-50 p-6 rounded-lg ">
              <div className="grid w-56 max-w-sm items-center gap-1.5">
                <Label htmlFor="from_location">Location</Label>
                <InputAutoComplete
                  show={show}
                  setShow={setShow}
                  data={locations}
                  setSearchText={setSearchText}
                  setSomething={setAddress}
                />
                <Button onClick={handleSearch} className="">
                  <FaSearchLocation size={20} color="" />
                </Button>
              </div>
              <div className="grid w-56  max-w-sm items-center gap-1.5">
                <Label htmlFor="destination">Destination</Label>
                <InputAutoComplete
                  show={showDest}
                  setShow={setShowDest}
                  data={destinationLocations}
                  setSearchText={setDestinationSearch}
                  setSomething={setDestination}
                />
                <Button onClick={handleSearchDestination} className="">
                  <FaSearchLocation size={20} />
                </Button>
              </div>
              <DrawerDemo buttonStyle={"px-8 bg-black text-white"} />
            </div>
          </div>
        </div>
        <div className="w-full mx-auto bg-gray-50 rounded-t-[4rem] h-96 z-[14] p-4">
          <div className="p-4">
            <h3 className="text-center text-gray-800 font-semibold text-3xl">
              Rides Informations :
            </h3>
          </div>
          <div className="flex flex-row gap-4 mt-6">
            <div className=" flex items-center space-x-4  rounded-md border p-4">
              <CarIcon />
              <div className="flex-1 space-y-1">
                <p>Ride</p>
                <p className="text-sm font-medium leading-none">
                  Casa port {">"} Sidi Maarouf
                </p>
              </div>
              <div>
                <p className="font-bold">Distance : 2.4 km</p>
                <p className="font-bold">Total Price : 46 MAD</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute top-14 left-0 w-full h-full md:h-screen z-[1]">
        <Map selectPosition={addres} destination={destination} />
      </div>

      {/* <CardsCarousel className={"z-[10]"}>
        <DriversCard className="z-[5]" name={"Chi smia"} price={48} />
        <DriversCard
          className="z-[5]"
          name={"Bellie eilish"}
          img={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH3BQP5IiLv_l3Wj9PPhY807Iqnd1uOVZWIw&usqp=CAU"
          }
          price={49}
        />
        <DriversCard className="z-[5]" name={"Your mom"} price={51} />
      </CardsCarousel> */}
    </div>
  );
};

export default RiderLayout;
