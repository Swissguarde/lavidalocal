import React from "react";
import { MenuItemProp } from "../Header/Header";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

type SideTabItemProps = {
  item: MenuItemProp;
  selected: boolean;
  setMenuActive: (value: string) => void;
};

const SideTabItem: React.FC<SideTabItemProps> = ({
  item,
  selected,
  setMenuActive,
}) => {
  return (
    <div
      className="flex cursor-pointer justify-between p-2"
      onClick={() => setMenuActive(item.title)}
    >
      <h2
        className={`${selected ? "text-blue-900" : "text-black"} font-semibold`}
      >
        {item.title}
      </h2>
      <HiOutlineArrowNarrowRight
        size={20}
        color={`${selected ? "blue" : "black"}`}
      />
    </div>
  );
};
export default SideTabItem;
