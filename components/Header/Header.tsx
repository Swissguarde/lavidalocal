import React, { useState } from "react";
import TabItem from "./TabItem";
import { CgProfile } from "react-icons/cg";
import { AiOutlineSetting, AiOutlinePoweroff } from "react-icons/ai";

type HeaderProps = {};
export type MenuItemProp = {
  title: string;
};
const menuTab: Array<MenuItemProp> = [
  { title: "Home" },
  { title: "Payroll" },
  { title: "Leave" },
  { title: "Loan" },
  { title: "Appraisal" },
  { title: "Subscriptions" },
];

const Header: React.FC<HeaderProps> = () => {
  const [menuActive, setMenuActive] = useState(menuTab[0].title);

  return (
    <>
      <header className="flex h-14 items-center bg-blue-900 px-10 md:px-40">
        <h2 className="text-xl font-bold">LAVIDALOCAL ENTERPRISES</h2>
      </header>
      <div className="flex justify-center md:justify-between">
        <div className="flex h-10 w-fit items-center bg-blue-900 md:mx-40">
          {menuTab.map((item, i) => (
            <TabItem
              key={i}
              item={item}
              selected={item.title === menuActive}
              setMenuActive={setMenuActive}
            />
          ))}
        </div>
        <div className="mx-40 hidden md:flex">
          <button className="custom-btn">
            <CgProfile size={20} />
            Profile
          </button>
          <button className="custom-btn">
            <AiOutlineSetting size={20} />
            Settings
          </button>
          <button className="custom-btn">
            <AiOutlinePoweroff size={20} />
            Logout
          </button>
        </div>
      </div>
    </>
  );
};
export default Header;
