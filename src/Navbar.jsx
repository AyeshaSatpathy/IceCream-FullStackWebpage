import React from 'react';
import { IoMdMenu } from "react-icons/io";
import { MdMenu } from "react-icons/md"; // Import MdMenu
import { NavbarData } from './data/MockData';
import kedslogowhite from './assets/kedslogowhite.png'; // Ensure the path to your logo is correct

const Navbar = () => {
  return (
    <nav className="text-white font-semibold drop-shadow-lg">
      <div className="container flex justify-self-start py-11 ">
        {/* Logo section */}
        <div className="absolute items-center -mx-40 -my-20 xz-50">
          <img
            src={kedslogowhite} // Use the imported logo
            alt="Keds Logo"
            className="w-[150px] md:w-[200px] xl:w-[350px] z-9" // Adjusted xl width to 450px
          />
        </div>

        {/* Menu section */}
<div className="hidden md:block w-full">
  <ul className="flex justify-center items-center gap-4">
    {NavbarData.map((item) => (
      <li key={item.id}>
        <a
          href={item.link}
          className="inline-block text-base px-3 uppercase">
          {item.title}
        </a>
      </li>
    ))}
  </ul>

  {/* Add a button next to the menu items */}
  <div className="flex justify-end items-start">
    <button className="bg-transparent border-2 border-solid border-neutral-50 text-white px-3 py-2  mt-[-32px] rounded-full">
      ORDER NOW
    </button>
  </div>
</div>
        {/* Hamburger section */}
        <div className="md:hidden">
          <MdMenu className="text-4xl" />
        </div>
      </div>
    </nav>


  );

  
};

export default Navbar;
