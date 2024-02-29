import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Outlet } from "react-router-dom";
import RidersCarousel from "../components/RidersCarousel";
import DriversCard from "../components/DriversCard";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { BellIcon, CarIcon, CheckIcon, XIcon } from "lucide-react";

const RidersCard = ({ price, name, distance, btw, date, img }) => {
  return (
    <Card className={cn("w-[380px]")}>
      <CardHeader>
        <CardTitle className="text-gray-800">
          {price ? price : "58 MAD."}
        </CardTitle>
        <CardDescription>{Date()}.</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className=" flex items-center space-x-4  rounded-md border p-4">
          <CarIcon />
          <div className="flex-1 space-y-1">
            <p className="text-sm font-medium leading-none">
              Casa port {">"} Sidi Maarouf
            </p>
            <p className="text-sm text-muted-foreground">
              {distance ? distance : "8.3 km."}
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-3">
          <Avatar>
            <AvatarImage
              src={
                img
                  ? img
                  : "https://pics.craiyon.com/2023-06-08/0825485f4b0d44f6bcb3d11b8254b87d.webp"
              }
              alt="@shadcn"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div>
            <span className="font-bold">{name ? name : "Sara Maria"}</span>
            <p className="text-sm text-gray-700">
              {btw
                ? btw
                : "Voiture pour 4 personne stp. j'ai aussi des valises avec mois"}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-col gap-4">
        <Button className="w-full bg-green-800">
          <CheckIcon className="mr-2 h-4 w-4" /> Accept
        </Button>
        <Button className="w-full" variant="destructive">
          <XIcon className="mr-2 h-4 w-4" /> Decline
        </Button>
      </CardFooter>
    </Card>
  );
};

export default RidersCard;
