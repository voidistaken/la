import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookSquare, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { PiInstagramLogoFill } from "react-icons/pi";

const Footer = () => {
  return (
    <footer className="py-8 text-white bg-black ">
      <div className="container px-6 m-8 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="footer-section">
        <hr className="my-8 border-t border-rose-400 md:hidden block" />

            <h4 className="mb-4  font-bold text-rose-400 md:text-xl ">
              OUR COMPANY
            </h4>
            <ul className="footer-links ">
              <li>
                <Link to="/login" className="text-gray-300 hover:underline  ">
                  HOW WE WORK
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:underline  ">
                  WHY US ?
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:underline md:block hidden ">
                  VIEW PLANS
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:underline md:block hidden ">
                  REVIEWS
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="mb-4  md:text-xl font-bold text-rose-400 ">HELP ME</h4>
            <ul className="footer-links">
              <li>
                <Link to="#" className="text-gray-300 hover:underline md:block hidden ">
                  Faq
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:underline  ">
                  TERMS OF USE
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:underline  ">
                  PRIVACY POLICY
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:underline md:block hidden ">
                  COOKIES
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="mb-4  md:text-xl font-bold text-rose-400">CONTACT</h4>
            <ul className="footer-links">
              <li>
                <Link to="#" className="text-gray-300 hover:underline md:block hidden ">
                  SALES
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:underline ">
                  SUPPORT
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:underline md:block hidden ">
                  LIVE CHAT
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:underline  ">
                  CONTACT US
                </Link>
              </li>
            </ul>
          </div>
          <div className="footer-section">
            <h4 className="mb-4  md:text-xl font-bold text-rose-400">OTHERS</h4>
            <ul className="footer-links">
              <li>
                <Link to="#" className="text-gray-300 hover:underline  ">
                  APPLY TO DRIVE
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:underline md:block hidden ">
                  PEERS
                </Link>
              </li>
              <li>
                <Link to="#" className="text-gray-300 hover:underline ">
                  LICENSES
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <br /> <br />
        <hr className="my-8 border-t border-rose-400 md:relative relative  md:bottom-0 bottom-14 md:left-0 " />
        <div className="flex items-center justify-between    ">
          <div className="md:text-sm  text-xs w-[400px] ">
            <p className="">&copy; 2024 She Drive Tous droits réservés.</p>
            <p className="">Sidi Maarouf, Casa, Maroc</p>
            </div>
          <div className="flex space-x-6">
            <Link to="#" className="hover:underline md:block hidden">
              Mentions légales
            </Link>
            <Link to="#" className="hover:underline md:block hidden">
              Politique de confidentialité
            </Link>
            <Link to="#" className="hover:underline md:block hidden">
              Conditions d'utilisation
            </Link>
          </div>
          <div className="flex items-center justify-end mb-8 text-red-400 relative md:bottom-0  bottom-[70px] md:right-0 right-[60px] md:left-0 -left-[70px]">
            <div className="mr-4">
              <Link to={"/"}>
                <FaFacebookSquare
                  className="text-4xl  cursor-pointer hover:text-white  "
                  title="Facebook"
                />
              </Link>
            </div>
            <div className="mr-4">
              <Link to={"/"}>
                <PiInstagramLogoFill
                  className="text-4xl  cursor-pointer hover:text-white text-rose-400"
                  title="Instagram"
                />
              </Link>
            </div>
            <div className="mr-4">
              <Link to={"/"}>
                <FaTwitter
                  className="text-4xl cursor-pointer hover:text-white text-rose-400"
                  title="X"
                />
              </Link>
            </div>
            <div>
              <Link to={"/"}>
                <IoMdMail
                  className="text-4xl  cursor-pointer hover:text-white text-rose-400"
                  title="Email"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
