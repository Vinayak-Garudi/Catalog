"use client";
import { useEffect, useState } from "react";
import Close from "./Close";
import MenuIcon from "./MenuIcon";

const Navbar = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const nestedMenu: boolean = false;
  const [menuItems, setMenuItems] = useState<any[]>([]);

  useEffect(() => {
    setMenuItems([]);
    for (let i = 0; i < 7; i++) {
      if (nestedMenu) {
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
          boxShadow: "var(--borderShadowBottom)",
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
              boxShadow: "var(--borderShadowRight)",
            }}
          >
            <div className="h-16 fixed w-screen lg:w-3/12 flex items-center">
              <Close
                className="size-12 cursor-pointer hover:fill-foregroundHover"
                onClick={() => setShowSidebar(false)}
              />
              <div className="mx-4">My Company</div>
            </div>

            {nestedMenu ? (
              <div>
                {menuItems.map((data: any, i: number) => {
                  return <div key={i}></div>;
                })}
              </div>
            ) : (
              <div
                className="customScrollbar overflow-y-auto top-12 relative"
                style={{ height: "calc(100% - 4rem)" }}
              >
                {menuItems.map((data: any, i: number) => {
                  return (
                    <div key={i} className="border-b-#17171721 border-b">
                      <div className="flex items-end gap-2 h-16 ml-6 cursor-pointer text-foregroundHover hover:text-foregroundTextHover font-semibold">
                        <div>{data.itemIcon}</div>
                        <div>{data.itemName}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
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
