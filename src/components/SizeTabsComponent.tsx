import { Tab, Tabs } from "@nextui-org/react";
import React from "react";

interface sizesObjProps {
  label: string | number;
  quantity: number;
}

interface sizeTabsProps {
  sizesArray: sizesObjProps[];
}

const SizeTabsComponent: React.FC<React.PropsWithChildren<sizeTabsProps>> = ({
  sizesArray,
}) => {
  return (
    <div className="flex w-full flex-col">
      <Tabs>
        <Tab title="Text">
          <div className="flex w-full flex-col">
            <Tabs>
              {sizesArray.map((size: sizesObjProps, i: number) => {
                return !Number(size.label) ? (
                  <Tab key={i} title={size.label}></Tab>
                ) : (
                  ""
                );
              })}
            </Tabs>
          </div>
        </Tab>
        <Tab title="in">
          <div className="flex w-full flex-col">
            <Tabs>
              {sizesArray.map((size: sizesObjProps, i: number) => {
                return Number(size.label) ? (
                  <Tab key={i} title={size.label}></Tab>
                ) : (
                  ""
                );
              })}
            </Tabs>
          </div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default SizeTabsComponent;
