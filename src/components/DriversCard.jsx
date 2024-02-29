import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaStarHalfStroke } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { StarsIcon } from "lucide-react";
import { FaGrinStars, FaStar, FaStarHalf } from "react-icons/fa";
const DriversCard = ({ img, name, price, reviews, className = "" }) => {
  return (
    <div
      className={`flex flex-row gap-4 justify-between items-center bg-zinc-50 w-[80%] mx-auto px-6 py-8 rounded-md shadow-md ${className}`}
    >
      <div className="flex items-center gap-2">
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
        <span>{name}</span>
        <span className="flex items-center">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfStroke />
          (1.3k)
        </span>
      </div>
      <div className="flex flex-row gap-4 items-center">
        <span className="font-bold text-2xl">{price} MAD.</span>
        <Button variant="" className="px-8">
          Accept
        </Button>
      </div>
    </div>
  );
};

export default DriversCard;
