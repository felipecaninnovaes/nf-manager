"use client"
import React from "react";
import { HiMenu } from "react-icons/hi";
import { cn } from "@/libs/utils";
type Props = {
  /**
   * Allows the parent component to modify the state when the
   * menu button is clicked.
   */
  onMenuButtonClick(): void;
};
const Navbar = (props: Props) => {
  return (
    <nav
      className={cn({
        "bg-white text-zinc-500": true, // colors
        "flex items-center": true, // layout
        "w-screen md:w-full sticky z-10 px-4 shadow-sm h-[73px] top-0 ": true, //positioning & styling
      })}
    >
      <div className="flex-grow">

      </div>
      <button type="button" className="md:hidden" onClick={props.onMenuButtonClick}>
        <HiMenu className="h-6 w-6" />
      </button>
    </nav>
  );
};

export default Navbar;