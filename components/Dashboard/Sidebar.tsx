import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { MenuItemProp } from "../Header/Header";
import SideTabItem from "./SideTabItem";

type SidebarProps = {
  menuTab: Array<MenuItemProp>;
  menuActive: string;
  setMenuActive: (value: string) => void;
};

const Sidebar: React.FC<SidebarProps> = ({
  menuTab,
  menuActive,
  setMenuActive,
}) => {
  return (
    <div className="hidden w-80 flex-col text-black md:flex">
      <header className="flex h-20 items-center justify-between bg-[url('/images/banner.svg')] bg-center object-cover px-10 text-blue-900 shadow-lg">
        <h2 className="text-xl font-bold">Menu</h2>
        <div className="cursor-pointer rounded-full bg-blue-900 p-1.5 text-white">
          <FaBars size={18} />
        </div>
      </header>

      <div className="flex flex-col gap-1 px-10 py-4 shadow-lg">
        {menuTab.map((item, i) => (
          <SideTabItem
            key={i}
            item={item}
            selected={item.title === menuActive}
            setMenuActive={setMenuActive}
          />
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
