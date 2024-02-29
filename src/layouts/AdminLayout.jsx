import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { axiosClient } from "../api/axios";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import Navbar from "../components/Navbar";
import AdminNavbar from "../components/AdminNavbar";

const AdminLayout = () => {
  const [user, setUser] = useState(null);
  const [logged, setLogged] = useState(false);
  const nav = useNavigate();

  useEffect(() => {
    axiosClient
      .get("/user")
      .then((res) => {
        setUser(res.data);
        setLogged(true);
      })
      .then(() => console.log(user))
      .catch((err) => {
        nav("/login");
      });
  }, []);

  async function logout() {
    await axiosClient
      .post("/logout")
      .then(() => nav("/login"))
      .catch((err) => console.error(err));
  }

  if (!logged) return <></>;

  return (
    <>
      <AdminNavbar />
      <main className="container grid grid-cols-4">
        <Outlet />
        <div className="relative overflow-x-auto col-span-3 mt-10 ">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  name
                </th>
                <th scope="col" className="px-6 py-3">
                  email
                </th>
                <th scope="col" className="px-6 py-3">
                  role
                </th>
                <th scope="col" className="px-6 py-3">
                  created_at
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                >
                  {user?.name}
                </th>
                <td className="px-6 py-4">{user?.email}</td>
                <td className="px-6 py-4">{user?.role}</td>
                <td className="px-6 py-4">{user?.created_at}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
};

export default AdminLayout;
