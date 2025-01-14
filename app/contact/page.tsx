import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <>
      <main className="w-full h-full mt-24">
        <div className="w-full h-full flex flex-col gap-24">
          <div className="w-full flex flex-col py-32 items-center md:gap-2">
            <p className="font-semibold text-3xl  text-animation text-center md:text-5xl lg:text-7xl">
              Let&apos;s work Together
            </p>
            <Link
              href={""}
              className="text-darkGrey font-bold hover:text-lightGrey text-3xl text-animation text-center md:text-4xl lg:text-6xl"
            >
              Get in touch
            </Link>
          </div>
          <div className="w-full flex flex-col items-center md:flex-row md:justify-between md:px-12 md:py-8 md:items-center">
            <p className="font-normal text-md py-2 text-center">
              © Mikiyas Kebede 2025
            </p>
            <div className="w-1/2 font-semibold text-sm flex items-center justify-evenly md:w-80">
              <Link href={""} className="hover:text-darkGrey">
                Twitter
              </Link>
              <Link href={""} className="hover:text-darkGrey">
                LinkedIn
              </Link>
              <Link href={""} className="hover:text-darkGrey">
                Mail
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
