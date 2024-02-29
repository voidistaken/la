import { cn } from "@/lib/utils";
import { LiaCarSideSolid } from "react-icons/lia";
import { Button } from "@/components/ui/button";
import { TbHistory, TbStars, TbTruckDelivery } from "react-icons/tb";

function RiderSideBar({ className }) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Smiya dial had section
          </h2>
          <div className="space-y-1">
            <Button
              variant="secondary"
              className="w-full justify-start inline-flex gap-1"
            >
              <LiaCarSideSolid size={20} />
              Order Now
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <rect width="7" height="7" x="3" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="3" rx="1" />
                <rect width="7" height="7" x="14" y="14" rx="1" />
                <rect width="7" height="7" x="3" y="14" rx="1" />
              </svg>
              Browse
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9" />
                <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5" />
                <circle cx="12" cy="12" r="2" />
                <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5" />
                <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19" />
              </svg>
              Map
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Smiya dial had section tahia
          </h2>
          <div className="space-y-1">
            <Button
              variant="ghost"
              className="w-full justify-start inline-flex gap-1"
            >
              <TbHistory size={20} />
              Previous orders
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start inline-flex gap-1"
            >
              <TbTruckDelivery size={20} />
              Delivery
            </Button>
            <Button variant="ghost" className="w-full justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mr-2 h-4 w-4"
              >
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              Profile
            </Button>
            <Button
              variant="ghost"
              className="w-full justify-start inline-flex gap-1"
            >
              <TbStars size={20} />
              Reviews
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RiderSideBar;
