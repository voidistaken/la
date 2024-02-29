import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const GuestLayout = () => {
  return (
    <>
      <Navbar />
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default GuestLayout;
