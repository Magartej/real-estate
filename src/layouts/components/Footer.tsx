// components/Footer.tsx
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container flex flex-col gap-6">
        <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 md:gap-16">
          <div className=" col-span-12 sm:col-span-4 xl:col-span-3 flex flex-col gap-9 items-center sm:items-start">
            <h2 className="font-bold text-xl">WESTON</h2>
            <p className="text-center sm:text-start">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            </p>
          </div>

          <div className="col-span-7 xl:col-span-5 flex flex-col gap-9">
            <p>
              For exclusive news and market updates sign up for our newsletter.
            </p>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Enter Your Email Address"
                className="p-2 w-full text-black"
              />
              <Button
                className="bg-black border rounded-none border-white"
                size="default"
              >
                SUBMIT
              </Button>
            </div>
          </div>

          <div className="col-span-8 lg:col-span-7 xl:col-span-4 flex justify-between">
            <div className="flex flex-col gap-9">
              <h2 className="font-bold text-xl">Contact Us</h2>
              <div className="flex flex-col gap-2.5">
                <p>(+75) 81 2345 1234</p>
                <p>Contact@domain.com</p>
                <p>
                  Ubud No.88, New York <br />
                  USA, Renon, New York
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-9">
              <h2 className="font-bold text-xl">Follow Us</h2>
              <div className="flex gap-5">
                <FaFacebook width={24} height={24} />
                <FaInstagram width={24} height={24} />
                <FaLinkedin width={24} height={24} />
                <FaXTwitter width={24} height={24} />
              </div>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-white pt-6">
          <p>&copy; {new Date().getFullYear()} WESTON all Right Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
