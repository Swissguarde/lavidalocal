import React from "react";
import { MenuItemProp } from "./Header";

type TabItemProps = {
  item: MenuItemProp;
  selected: boolean;
  setMenuActive: (value: string) => void;
};
const TabItem: React.FC<TabItemProps> = ({ item, selected, setMenuActive }) => {
  return (
    <div
      className={`flex h-10 cursor-pointer items-center justify-center p-1 text-xs duration-300 md:p-2 md:text-base ${
        selected ? "bg-gray-300 text-black" : "bg-blue-900 text-white"
      }`}
      onClick={() => setMenuActive(item.title)}
    >
      {item.title}
    </div>
  );
};
export default TabItem;
