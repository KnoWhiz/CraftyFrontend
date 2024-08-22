/* eslint-disable @next/next/no-img-element */
"use client";

import React, { useEffect, useRef } from "react";
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
  const [showAccountSidebar, setShowAccountSidebar] = useState<boolean>(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setShowAccountSidebar(false);
      }
    }

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

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
    router.push("/crafty");
    setPage("crafty");
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

  return (
    <>
      <nav
        ref={navRef}
        className="z-50 font-raleway text-xl fixed top-0 border-b-[1px] border-solid border-black flex flex-row h-24 w-full items-center justify-between bg-main-white text-main-black pl-20 pr-16"
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
        <div
          className="cursor-pointer"
          onClick={() => {
            showAccountSidebar
              ? setShowAccountSidebar(false)
              : setShowAccountSidebar(true);
          }}
        >
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
        </div>
      </nav>
      {showAccountSidebar && (
        <nav className="fixed z-50 h-full w-72 border-l-[1px] border-solid border-black bg-white top-24 right-0 flex flex-col">
          <div className="flex flex-col justify-start items-center w-full h-1/3 py-20 border-b-[1px] border-black border-solid">
            <div className="absolute top-6 left-6">
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={() => {
                  setShowAccountSidebar(false);
                }}
                cursor="pointer"
              >
                <path
                  d="M10.5 11.3973L3.35421 18.2361C3.08685 18.492 2.74657 18.6199 2.33337 18.6199C1.92018 18.6199 1.5799 18.492 1.31254 18.2361C1.04518 17.9802 0.911499 17.6546 0.911499 17.2591C0.911499 16.8637 1.04518 16.538 1.31254 16.2822L8.45837 9.44338L1.31254 2.60459C1.04518 2.34872 0.911499 2.02306 0.911499 1.62762C0.911499 1.23218 1.04518 0.906528 1.31254 0.650655C1.5799 0.394782 1.92018 0.266846 2.33337 0.266846C2.74657 0.266846 3.08685 0.394782 3.35421 0.650655L10.5 7.48944L17.6459 0.650655C17.9132 0.394782 18.2535 0.266846 18.6667 0.266846C19.0799 0.266846 19.4202 0.394782 19.6875 0.650655C19.9549 0.906528 20.0886 1.23218 20.0886 1.62762C20.0886 2.02306 19.9549 2.34872 19.6875 2.60459L12.5417 9.44338L19.6875 16.2822C19.9549 16.538 20.0886 16.8637 20.0886 17.2591C20.0886 17.6546 19.9549 17.9802 19.6875 18.2361C19.4202 18.492 19.0799 18.6199 18.6667 18.6199C18.2535 18.6199 17.9132 18.492 17.6459 18.2361L10.5 11.3973Z"
                  fill="#1C1B1F"
                />
              </svg>
            </div>
            <img
              src="./assets/icons/profile-placeholder.svg"
              alt="profile picture"
            />
            <h2 className="text-2xl font-medium">Kno Whiz</h2>
          </div>
          <div className="flex flex-col justify-start items-center w-full h-2/3 py-16">
            <a href="/" className="cursor-pointer text-2xl font-medium">
              Sign Out
            </a>
          </div>
        </nav>
      )}
    </>
  );
};

export default NavBar;
