/* eslint-disable @next/next/no-img-element */
import React from "react";

const Footer = () => {
  return (
    <nav className="fixed bottom-0 flex h-20 w-full flex-row items-center justify-evenly bg-main-white pl-20 pr-16 text-main-black font-raleway border-solid border-t-[1px] border-black">
      <a href="https://github.com" target="_blank">
        <img src="assets/logos/GitHub.svg" alt="GitHub Logo" />
      </a>

      <a href="https://twitter.com" target="_blank">
        <img src="assets/logos/Twitter.svg" alt="Twitter Logo" />
      </a>

      <a href="https://www.linkedin.com/company/knowhiz/" target="_blank">
        <img src="assets/logos/LinkedIn.svg" alt="LinkedIn Logo" />
      </a>

      <a href="https://reddit.com" target="_blank">
        <img src="assets/logos/Reddit.svg" alt="Reddit Logo" />
      </a>
    </nav>
  );
};

export default Footer;
