import MainBar from "@/components/Dashboard/MainBar";
import Sidebar from "@/components/Dashboard/Sidebar";
import Header, { MenuItemProp } from "@/components/Header/Header";
import Head from "next/head";
import { useState } from "react";

const menuTab: Array<MenuItemProp> = [
  { title: "Edit Profile" },
  { title: "Medical" },
  { title: "Next of kin" },
  { title: "Dependants" },
  { title: "Education History" },
  { title: "Employment History" },
  { title: "Documents" },
];

export default function Home() {
  const [menuActive, setMenuActive] = useState(menuTab[0].title);

  return (
    <>
      <Head>
        <title>Home - Lavidalocal</title>
        <meta name="description" content="homepage of lavidalocal enterprise" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Header />

        <div className="mt-10 flex space-x-4 pb-32 md:px-20">
          <Sidebar
            menuTab={menuTab}
            menuActive={menuActive}
            setMenuActive={setMenuActive}
          />
          <MainBar menuActive={menuActive} />
        </div>
      </main>
    </>
  );
}
