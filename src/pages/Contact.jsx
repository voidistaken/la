import React from 'react'
import { Link } from 'react-router-dom'
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure} from "@nextui-org/react";

export default function Contact() {
  const {isOpen, onOpen, onOpenChange} = useDisclosure();
  return (
    <div className='container pt-10 flex flex-col gap-6'>
       <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="firstName" className="text-2xl">Nom Complet </Label>
              <Input className
              ="px-4 py-6" id="firstName" type="text" placeholder="Name Complet..." />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="firstName" className="text-2xl">Email</Label>
              <Input className
              ="px-4 py-6" id="firstName" type="text" placeholder="Your Email..." />
            </div>
            <div className="grid w-full  items-center gap-1.5">
              <Label htmlFor="firstName" className="text-2xl">Votre Rapport</Label>
              <textarea className
              ="px-4 py-6 border border-gray-200 rounded-md" id="firstName" type="text" placeholder="Your Rapport..." />
            </div>
<div className="text-center" >
<Button onPress={onOpen} className='text-white  font-bold bg-black '>Send Message</Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1 text-green-600">Message send Avec Succès</ModalHeader>
              <ModalBody>
                <p>                
Votre message a été envoyé avec succès. Notre équipe d'assistance, disponible 24h/7, prendra contact avec vous dès qu'elle prendra connaissance de votre message.
                </p>         
              </ModalBody>
              <ModalFooter>

                <Button  className='bg-red-300 font-semibold' onPress={onClose}>
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
</div>

    </div>
  )
}
