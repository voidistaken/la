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
      <AccordionItem key="1" aria-label="Accordion 1" title="Suivi en Temps Réel " indicator={({ isOpen }) => (isOpen ? <BiChevronLeft  /> : <BiChevronRight />)} className="text-black-400 font-bold  items-center">
      <p className="text-black-600 font-normal ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

      </AccordionItem>
      <AccordionItem key="2" aria-label="Accordion 2" title="Détails du Conducteur " indicator={({ isOpen }) => (isOpen ? <BiChevronLeft  /> : <BiChevronRight />)}  className="text-black-400 font-bold  items-center">
      <p className="text-black-600 font-normal ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

      </AccordionItem>
      <AccordionItem key="3" aria-label="Accordion 3" title="Sélection de Destination " indicator={({ isOpen }) => (isOpen ? <BiChevronLeft  /> : <BiChevronRight />)}  className="text-black-400 font-bold  items-center">
      <p className="text-black-600 font-normal ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

      </AccordionItem>
      <AccordionItem key="4" aria-label="Accordion 4" title="Itinéraire Optimal" indicator={({ isOpen }) => (isOpen ? <BiChevronLeft  /> : <BiChevronRight />)}  className="text-black-400 font-bold  items-center">
      <p className="text-black-600 font-normal ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

      </AccordionItem>
      <AccordionItem key="5" aria-label="Accordion 5" title="Notifications Personnalisées" indicator={({ isOpen }) => (isOpen ? <BiChevronLeft  /> : <BiChevronRight />)}  className="text-black-400 font-bold  items-center">
      <p className="text-black-600 font-normal ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

      </AccordionItem>
      <AccordionItem key="6" aria-label="Accordion 6" title="Historique des Trajets" indicator={({ isOpen }) => (isOpen ? <BiChevronLeft  /> : <BiChevronRight />)}  className="text-black-400 font-bold  items-center">
      <p className="text-black-600 font-normal ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>

      </AccordionItem>
      <AccordionItem key="7" aria-label="Accordion 7" title="Options de Paiement" indicator={({ isOpen }) => (isOpen ? <BiChevronLeft  /> : <BiChevronRight />)}  className="text-black-400 font-bold  items-center">
      <p className="text-black-600 font-normal ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      </AccordionItem>
      <AccordionItem key="8" aria-label="Accordion 8" title="Réactions et Évaluations" indicator={({ isOpen }) => (isOpen ? <BiChevronLeft  /> : <BiChevronRight />)}  className="text-black-400 font-bold ">
        <p className="text-black-600 font-normal ">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
      </AccordionItem>
    </Accordion>
          <div className="para">
            
            
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
