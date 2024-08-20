/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <nav className="relative bottom-0 text-main-white flex h-[300px] w-full flex-col items-center justify-center bg-footer-blue">
      <div className="font-raleway absolute top-6 flex flex-col items-center justify-center gap-y-6 w-[24rem] text-center">
        <h1 className="text-3xl font-medium mb-2 mt-4">Crafty</h1>
        <div className="flex flex-row justify-center items-center gap-x-8">
          <a href="/">Home</a>
          <a href="/pricing">Pricing</a>
          <a href="/documentation">Documentation</a>
          <a href="/contact">Contact</a>
          <a href="/about">About</a>
        </div>
        <p className="text-base font-normal">
          Experience the future of education through Crafty. Stay up to date
          with our social media community!
        </p>
      </div>
      <div className="absolute bottom-4 flex flex-row items-center justify-center gap-x-8">
        <a href="/">
          <img src="assets/logos/GitHub.svg" alt="GitHub Logo" />
        </a>

        <a href="/">
          <img src="assets/logos/Twitter.svg" alt="Twitter Logo" />
        </a>

        <a href="/">
          <img src="assets/logos/LinkedIn.svg" alt="LinkedIn Logo" />
        </a>

        <a href="/">
          <img src="assets/logos/Reddit.svg" alt="Reddit Logo" />
        </a>
      </div>

      <img
        src="assets/footer-rect-left.svg"
        alt="GitHub Logo"
        className="absolute bottom-0 left-0 max-w-[40%]"
      />
      <img
        src="assets/footer-rect-right.svg"
        alt="GitHub Logo"
        className="absolute bottom-0 right-0 max-w-[40%]"
      />
    </nav>
  );
};

export default Footer;
