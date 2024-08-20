"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

interface NavBarItemProps {
  name: string;
  handle: () => void;
  targetPage: string;
  currentPage: string;
}

const NavBarItem: React.FC<NavBarItemProps> = ({
  name,
  handle,
  targetPage,
  currentPage,
}) => {
  return (
    <h1
      style={{ cursor: "pointer" }}
      onClick={handle}
      className={targetPage === currentPage ? `font-semibold` : `font-normal`}
    >
      {name}
    </h1>
  );
};

const NavBar = () => {
  const [page, setPage] = useState<string>("home");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("/crafty")) {
      setPage("crafty");
    } else if (pathname.includes("/about")) {
      setPage("about");
    } else if (pathname.includes("/documentation")) {
      setPage("documentation");
    } else if (pathname.includes("/pricing")) {
      setPage("pricing");
    } else if (pathname.includes("/contact")) {
      setPage("contact");
    } else {
      setPage("home");
    }
  }, [pathname]);

  const handleHome = () => {
    router.push("/");
    setPage("home");
  };

  const handleCrafty = () => {
    // handle crafty
  };

  const handleAbout = () => {
    router.push("/about");
    setPage("about");
  };

  const handleDocumentation = () => {
    router.push("/documentation");
    setPage("documentation");
  };

  const handlePricing = () => {
    router.push("/pricing");
    setPage("pricing");
  };

  const handleContact = () => {
    router.push("/contact");
    setPage("contact");
  };

  useEffect;

  return (
    <nav
      className="font-raleway text-xl fixed top-0 flex flex-row h-24 w-full items-center justify-between bg-main-white text-main-black pl-20 pr-16"
      style={{ borderBottom: "1px solid black" }}
    >
      <div className="flex gap-x-10">
        <NavBarItem
          name="Home"
          handle={handleHome}
          targetPage="home"
          currentPage={page}
        />
        <NavBarItem
          name="Crafty"
          handle={handleCrafty}
          targetPage="crafty"
          currentPage={page}
        />
        <NavBarItem
          name="About Us"
          handle={handleAbout}
          targetPage="about"
          currentPage={page}
        />
        <NavBarItem
          name="Documentation"
          handle={handleDocumentation}
          targetPage="documentation"
          currentPage={page}
        />
        <NavBarItem
          name="Pricing"
          handle={handlePricing}
          targetPage="pricing"
          currentPage={page}
        />
        <NavBarItem
          name="Contact"
          handle={handleContact}
          targetPage="contact"
          currentPage={page}
        />
      </div>
      <svg
        width="32"
        height="32"
        viewBox="0 0 42 42"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.18783 31.625C9.95866 30.2709 11.9378 29.2031 14.1253 28.4219C16.3128 27.6406 18.6045 27.25 21.0003 27.25C23.3962 27.25 25.6878 27.6406 27.8753 28.4219C30.0628 29.2031 32.042 30.2709 33.8128 31.625C35.0281 30.2014 35.9743 28.5868 36.6514 26.7813C37.3284 24.9757 37.667 23.0486 37.667 21C37.667 16.382 36.0437 12.4497 32.7972 9.20314C29.5507 5.95662 25.6184 4.33335 21.0003 4.33335C16.3823 4.33335 12.45 5.95662 9.20345 9.20314C5.95692 12.4497 4.33366 16.382 4.33366 21C4.33366 23.0486 4.6722 24.9757 5.34928 26.7813C6.02637 28.5868 6.97255 30.2014 8.18783 31.625ZM21.0003 23.0834C18.9517 23.0834 17.2243 22.3802 15.818 20.974C14.4118 19.5677 13.7087 17.8403 13.7087 15.7917C13.7087 13.7431 14.4118 12.0156 15.818 10.6094C17.2243 9.20314 18.9517 8.50002 21.0003 8.50002C23.0489 8.50002 24.7764 9.20314 26.1826 10.6094C27.5889 12.0156 28.292 13.7431 28.292 15.7917C28.292 17.8403 27.5889 19.5677 26.1826 20.974C24.7764 22.3802 23.0489 23.0834 21.0003 23.0834ZM21.0003 41.8334C18.1184 41.8334 15.41 41.2865 12.8753 40.1927C10.3406 39.099 8.13574 37.6146 6.26074 35.7396C4.38574 33.8646 2.90137 31.6597 1.80762 29.125C0.713867 26.5903 0.166992 23.882 0.166992 21C0.166992 18.1181 0.713867 15.4097 1.80762 12.875C2.90137 10.3403 4.38574 8.13544 6.26074 6.26044C8.13574 4.38544 10.3406 2.90106 12.8753 1.80731C15.41 0.713562 18.1184 0.166687 21.0003 0.166687C23.8823 0.166687 26.5906 0.713562 29.1253 1.80731C31.66 2.90106 33.8649 4.38544 35.7399 6.26044C37.6149 8.13544 39.0993 10.3403 40.193 12.875C41.2868 15.4097 41.8337 18.1181 41.8337 21C41.8337 23.882 41.2868 26.5903 40.193 29.125C39.0993 31.6597 37.6149 33.8646 35.7399 35.7396C33.8649 37.6146 31.66 39.099 29.1253 40.1927C26.5906 41.2865 23.8823 41.8334 21.0003 41.8334ZM21.0003 37.6667C22.8406 37.6667 24.5767 37.3976 26.2087 36.8594C27.8406 36.3212 29.3337 35.5486 30.6878 34.5417C29.3337 33.5347 27.8406 32.7622 26.2087 32.224C24.5767 31.6858 22.8406 31.4167 21.0003 31.4167C19.16 31.4167 17.4239 31.6858 15.792 32.224C14.16 32.7622 12.667 33.5347 11.3128 34.5417C12.667 35.5486 14.16 36.3212 15.792 36.8594C17.4239 37.3976 19.16 37.6667 21.0003 37.6667ZM21.0003 18.9167C21.9031 18.9167 22.6496 18.6215 23.2399 18.0313C23.8302 17.441 24.1253 16.6945 24.1253 15.7917C24.1253 14.8889 23.8302 14.1424 23.2399 13.5521C22.6496 12.9618 21.9031 12.6667 21.0003 12.6667C20.0975 12.6667 19.351 12.9618 18.7607 13.5521C18.1705 14.1424 17.8753 14.8889 17.8753 15.7917C17.8753 16.6945 18.1705 17.441 18.7607 18.0313C19.351 18.6215 20.0975 18.9167 21.0003 18.9167Z"
          fill="black"
        />
      </svg>
    </nav>
  );
};

export default NavBar;
