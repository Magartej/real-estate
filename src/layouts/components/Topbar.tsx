import React, { useState, useEffect, FC } from "react";
import Link from "next/link";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

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
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <Link href="/">
                <p className="hover:text-gray-600">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="hover:text-gray-600">About</p>
              </Link>
            </li>
            <li>
              <Link href="/properties">
                <p className="hover:text-gray-600">Properties</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="hover:text-gray-600">Contact</p>
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden rounded p-2 focus:outline-none focus:ring"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <IoCloseOutline className="h-6 w-6" aria-hidden="true" />
          ) : (
            <BiMenuAltLeft className="h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute w-full top-full left-0 bg-white">
          <ul className="flex flex-col items-center space-y-6 py-6">
            <li>
              <Link href="/">
                <p className="hover:text-gray-600">Home</p>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <p className="hover:text-gray-600">About</p>
              </Link>
            </li>
            <li>
              <Link href="/properties">
                <p className="hover:text-gray-600">Properties</p>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <p className="hover:text-gray-600">Contact</p>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default TopBar;
