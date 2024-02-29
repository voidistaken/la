import React from "react";
import NavbarItems from "./NavigationMenu";
import { Link, useNavigate } from "react-router-dom";
import ProfileDropDown from "./ProfileDropDown";
import AuthApi from "../services/api/AuthApi";
import { logout } from "../redux/slices/authSlice";
import { useDispatch } from "react-redux";

const AdminNavbar = ({ name }) => {
  const dispatch = useDispatch();
  async function userLogout() {
    await AuthApi.logout()
      .then(() => {
        dispatch(logout());
        nav("/login");
      })
      .catch((err) => console.error(err));
  }
  const nav = useNavigate();
  return (
    <header className="bg-white z-50 sticky top-0 left-0 w-full  flex flex-row justify-between px-8 py-2 shadow-md items-center">
      <div className="w-fit flex flex-row gap-4   items-center">
        <Link to="/" className="text-2xl text-black font-bold">
          <span className="text-pink-600 font-extrabold">S</span>heDrive
        </Link>
        <NavbarItems />
        <nav className="flex flex-row items-center gap-16">
          <a className="text-sm font-medium" href="#">
            Help
          </a>
        </nav>
      </div>
      <div className="flex flex-row gap-4">
        <ProfileDropDown logout={userLogout} name={name} />
      </div>
    </header>
  );
};

export default AdminNavbar;
