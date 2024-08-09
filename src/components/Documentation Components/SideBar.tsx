import React, { useEffect } from "react";

const SideBar = () => {
  return (
    <aside className="font-Inter text-lg fixed left-0 top-24 w-48 h-[calc(100vh-6rem)] flex flex-col overflow-y-auto items-baseline justify-start bg-main-white text-main-black py-10 gap-y-12 pl-8 pr-2">
      <div className="">
        <h3 className="font-semibold">API Reference</h3>
      </div>
      <div className="flex flex-col gap-y-4">
        <h3 className="font-semibold">ReadMe</h3>
        <h3 className="font-normal">Installation</h3>
        <h3 className="font-normal">API Keys</h3>
      </div>
      <div className="flex flex-col gap-y-4">
        <h3 className="font-semibold">CLI</h3>
        <h3 className="font-normal">Create</h3>
        <h3 className="font-normal">Step</h3>
        <h3 className="font-normal">Chapter</h3>
        <h3 className="font-normal">Section</h3>
        <h3 className="font-normal">Note</h3>
        <h3 className="font-normal">Slide</h3>
        <h3 className="font-normal">Script</h3>
        <h3 className="font-normal">Voice</h3>
        <h3 className="font-normal">Video</h3>
      </div>
    </aside>
  );
};

export default SideBar;
