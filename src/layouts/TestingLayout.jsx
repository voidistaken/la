import React from "react";
import RidersCard from "../components/RidersCard";
import RidersCarousel from "../components/RidersCarousel";

const TestingLayout = () => {
  return (
    <div className="h-screen grid place-content-center">
      <RidersCarousel>
        <RidersCard />
        <RidersCard />
        <RidersCard />
        <RidersCard />
        <RidersCard />
      </RidersCarousel>
    </div>
  );
};

export default TestingLayout;
