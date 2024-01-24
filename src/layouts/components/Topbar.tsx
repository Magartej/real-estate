import React, { useState, useEffect, FC } from "react";
import Link from "next/link";
import { IoPersonCircle, IoMenu } from "react-icons/io5";

const TopBar: FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-30 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-6" : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <Link href="/">WESTON</Link>
        </h1>
        <button className="flex gap-1 border rounded-3xl px-1.5 py-1 ">
          <IoMenu className="h-8 w-6" />
          <IoPersonCircle className="h-8 w-8" />
        </button>
      </div>
    </header>
  );
};

export default TopBar;
