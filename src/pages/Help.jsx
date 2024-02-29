import React from "react";
import { Link } from "react-router-dom";
import "../pages/Help.css";
import { Button } from "@/components/ui/button";
import { AiFillHome } from "react-icons/ai";
import {Accordion, AccordionItem} from "@nextui-org/react";
import { BiChevronDown } from "react-icons/bi";
import { BiChevronRight } from "react-icons/bi";
import { BiChevronUp } from "react-icons/bi";
import { BiChevronLeft } from "react-icons/bi";
export default function Help() {
  return (
    <div>
      <div className="help">
        <div className="info">

          <h3 className="text-center text-rose-400 text-bold text-2xl font-black ">
            {" "}
            <i className="bi bi-clipboard-fill"></i> Terms And Services
          </h3>
          <Accordion>
      <AccordionItem key="1" aria-label="Accordion 1" title="Safety Measures " indicator={({ isOpen }) => (isOpen ? <BiChevronLeft  /> : <BiChevronRight />)} className="text-black-400 font-bold  items-center">
      <p className="text-black-600 font-normal ">Your safety is our priority. SheDrive implements safety features and conducts background checks on all drivers, Report any safety concerns or incidents promptly through the app.</p>

      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title=" Code of Conduct " indicator={({ isOpen }) => (isOpen ? <BiChevronLeft  /> : <BiChevronRight />)}  className="text-black-400 font-bold  items-center">
      <p className="text-black-600 font-normal ">Users and drivers are expected to treat each other with respect and courtesy , Any form of harassment, discrimination, or inappropriate behavior is strictly prohibited.</p>

      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title=" Privacy " indicator={({ isOpen }) => (isOpen ? <BiChevronLeft  /> : <BiChevronRight />)}  className="text-black-400 font-bold  items-center">
      <p className="text-black-600 font-normal ">Your privacy is important. Refer to our Privacy Policy for details on how we collect, use, and disclose your information.</p>

      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="Account Registration" indicator={({ isOpen }) => (isOpen ? <BiChevronLeft  /> : <BiChevronRight />)}  className="text-black-400 font-bold  items-center">
      <p className="text-black-600 font-normal ">You agree to provide accurate and complete information during the registration process , You are responsible for maintaining the confidentiality of your account credentials.</p>

      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" title="Service Usage" indicator={({ isOpen }) => (isOpen ? <BiChevronLeft  /> : <BiChevronRight />)}  className="text-black-400 font-bold  items-center">
      <p className="text-black-600 font-normal ">SheDrive provides a platform for women to connect with female drivers for transportation services, Any use of the Service for illegal or unauthorized purposes is strictly prohibited.</p>

      </AccordionItem>
      <AccordionItem key="7" aria-label="Accordion 7" title="Eligibility" indicator={({ isOpen }) => (isOpen ? <BiChevronLeft  /> : <BiChevronRight />)}  className="text-black-400 font-bold  items-center">
      <p className="text-black-600 font-normal ">SheDrive is exclusively designed for women. To use our service, you must identify as a woman , Drivers must also identify as women and undergo a thorough screening process.</p>
      </AccordionItem>

      <AccordionItem key="6" aria-label="Accordion 6" title="Modifications" indicator={({ isOpen }) => (isOpen ? <BiChevronLeft  /> : <BiChevronRight />)}  className="text-black-400 font-bold  items-center">
      <p className="text-black-600 font-normal ">SheDrive may update or modify these Terms at any time. Continued use of the Service constitutes acceptance of the revised Terms.</p>

      </AccordionItem>

    </Accordion>
          <div className="para">
            <p className="font-bold text-center  text-black relative top-3">Thank you for choosing SheDrive!</p>
            
            <h5 className="text-gray-600 font-bold inline-flex gap-2 items-center text-xl">              
            </h5>{" "}
            <br />
            <div className="flex flex-row-reverse items-end justify-between">
              <h3>
                <Link
                  to="/Contact"
                  className="inline-block px-4 py-2 mt-4  text-white font-semibold bg-rose-400 rounded-md transition duration-300 hover:bg-gray-800 hover:text-white"
                >
                  Have a Question?{" "}
                </Link>
              </h3>
              <Link to="/">
                <Button className="inline-flex gap-2 font-bold items-center">
                  <AiFillHome size={20} /> Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
