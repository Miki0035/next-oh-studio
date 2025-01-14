"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();


  return (
    <header className="w-full fixed top-0 left-0  py-5 z-30 flex justify-center items-center">
      <nav className="w-64 md:w-72 md:py-2 md:px-2 py-1 px-1 bg-lightGrey rounded-full">
        <ul className="flex justify-between items-center text-sm lg:text-md">
          <li
            className={`   transition-all hover:cursor-pointer  ${
              pathname === "/" ? "shadow-sm bg-white" : "bg-lightGrey"
            } font-medium  rounded-full py-2 px-4`}
          >
            <Link href={"/"}>Home</Link>
          </li>
          <li
            className={`   transition-all hover:cursor-pointer  ${
              pathname === "/profile" ? "shadow-sm bg-white" : "bg-lightGrey"
            } font-medium  rounded-full py-2 px-4`}
          >
            <Link href={"/profile"}>Profile</Link>
          </li>
          <li
            className={`   transition-all hover:cursor-pointer  ${
              pathname === "/contact" ? "shadow-sm bg-white" : "bg-lightGrey"
            } font-medium  rounded-full py-2 px-4`}
          >
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
