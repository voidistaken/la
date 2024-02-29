import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function RidersCarousel({ children, className }) {
  return (
    <Carousel className="w-[1140px]">
      <CarouselContent className="w-96">
        {children.map((child, index) => (
          <CarouselItem
            key={index}
            className="flex aspect-square items-center justify-center p-6"
          >
            {child}
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}

export default RidersCarousel;
