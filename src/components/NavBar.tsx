"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const NavBar = () => {
  const [isDocumentation, setIsDocumentation] = useState<Boolean>(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.includes("/documentation")) {
      setIsDocumentation(true);
    } else {
      setIsDocumentation(false);
    }
  }, [pathname]);

  const handleCrafty = () => {
    router.push("/");
  };

  const handleDocumentation = () => {
    router.push("/documentation");
  };

  return (
    <nav
      className="font-Inter text-xl fixed top-0 flex flex-row h-24 w-full items-center justify-between bg-main-white text-main-black pl-20 pr-16"
      style={isDocumentation ? { borderBottom: "1px solid black" } : {}}
    >
      <h1
        style={{ cursor: "pointer" }}
        onClick={handleCrafty}
        className="font-semibold"
      >
        Crafty
      </h1>
      <h1
        style={{ cursor: "pointer" }}
        onClick={handleDocumentation}
        className={isDocumentation ? "font-semibold" : "font-normal"}
      >
        Documentation
      </h1>
    </nav>
  );
};

export default NavBar;
