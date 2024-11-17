"use client";
import { useEffect, useState } from "react";
import Close from "./Close";
import MenuIcon from "./MenuIcon";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const nestedMenu: boolean = false;
  const [menuItems, setMenuItems] = useState<any[]>([]);

  useEffect(() => {
    for (let i = 0; i < 20; i++) {
      if (nestedMenu) {
        console.log("nestedMenu", nestedMenu);
        setMenuItems((data) => [
          ...data,
          {
            subMenuName: `Sub-Menu ${i + 1}`,
            subMenuIcon: "o",
            subMenuItems: [
              {
                subMenuItemName: "Item 1",
                subMenuItemIcon: "0",
              },
              {
                subMenuItemName: "Item 2",
                subMenuItemIcon: "0",
              },
            ],
          },
        ]);
      } else {
        console.log("nestedMenu", nestedMenu);
        setMenuItems((data) => [
          ...data,
          {
            itemIcon: "o",
            itemName: `Item ${i + 1}`,
          },
        ]);
      }
    }
  }, []);

  return (
    <main>
      <header
        style={{
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--borderColor)",
        }}
        className="fixed h-16 w-screen bg-transparentColor text-foreground flex items-center z-40"
      >
        <MenuIcon
          className="size-12 cursor-pointer hover:fill-foregroundHover"
          onClick={() => setShowSidebar(true)}
        />
        <div className="mx-4">My Company</div>
      </header>
      {showSidebar ? (
        <>
          <div
            className="z-50 fixed h-screen bg-background text-foreground  w-screen lg:w-3/12"
            style={{
              borderRight: "1px solid var(--borderColor)",
            }}
          >
            <div className="fixed h-16 w-full flex items-center">
              <Close
                className="size-12 cursor-pointer hover:fill-foregroundHover"
                onClick={() => setShowSidebar(false)}
              />
              <div className="mx-4">My Company</div>
            </div>

            {/* {nestedMenu ? (
              <div>
                {menuItems.map((data: any, i: number) => {
                  return <div key={i}></div>;
                })}
              </div>
            ) : (
              <div className="overflow-x-scroll">
                {menuItems.map((data: any, i: number) => {
                  return (
                    <div key={i} className="flex gap-2">
                      <div>{data.itemIcon}</div>
                      <div>{data.itemName}</div>
                    </div>
                  );
                })}
              </div>
            )} */}
          </div>
          <div
            className="z-30 cursor-pointer h-screen w-screen fixed bg-transparentColor"
            onClick={() => setShowSidebar(false)}
          ></div>
        </>
      ) : (
        ""
      )}
    </main>
  );
};

export default Navbar;
