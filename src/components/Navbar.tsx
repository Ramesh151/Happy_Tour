'use client';
import Image from 'next/image';
import { Navbar } from 'flowbite-react';
import DropUi from './DropUi';

function NavbarC() {
  return (
    <Navbar fluid rounded className=' mb-4 mt-2'>
      <Navbar.Brand href="@">
        <img src="https://bcaclasses.online/images/profile-1.jpeg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Happy Tour</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <div className=' hidden md:block'>
        <DropUi/>
        </div>
       
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">My Product</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
        <div className=' block md:hidden'><DropUi/></div>
         
      </Navbar.Collapse>
    </Navbar>
  );
}
export default NavbarC