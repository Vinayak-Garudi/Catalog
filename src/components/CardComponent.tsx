"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image, Tooltip } from "@nextui-org/react";
import { IoOptionsSharp } from "react-icons/io5";
import InventoryModal from "./InventoryModal";
import { MdLibraryAdd } from "react-icons/md";

interface CardInterface {
  onPress?: () => void;
  className?: string;
  altImg?: string;
  imgSrc?: string;
  title?: string;
}

const CardComponent: React.FC<CardInterface> = ({
  onPress,
  className = "",
  imgSrc,
  altImg = "",
  title = "",
}) => {
  const [showInventory, setShowInventory] = React.useState(false);
  const [inventorySaving, setInventorySaving] = React.useState(false);

  function onInventorySave() {
    setInventorySaving(true);
    setTimeout(() => {
      setInventorySaving(false);
      setShowInventory(false);
    }, 4000);
  }

  return (
    <main>
      <InventoryModal
        title={title}
        isOpen={showInventory}
        inventorySaving={inventorySaving}
        onClose={() => setShowInventory(false)}
        onSave={() => onInventorySave()}
      ></InventoryModal>
      <Card
        shadow="sm"
        radius="none"
        isHoverable
        isPressable
        className={`min-h-56 min-w-[40vw] lg:min-w-52 lg:min-h-72 ${className}`}
      >
        <CardBody onClick={onPress} className="overflow-visible p-0 h-full">
          <Image
            shadow="sm"
            radius="none"
            width="100%"
            className="h-48 lg:h-60"
            alt={altImg}
            src={imgSrc}
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{title}</b>
          <Tooltip
            showArrow={true}
            radius="none"
            content={true ? "Inventory" : "Add Product"}
          >
            <div>
              {true ? (
                <IoOptionsSharp
                  size={20}
                  className="hover:text-foregroundHover h-full w-full"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent triggering Card's onClick
                    setShowInventory(true);
                  }}
                />
              ) : (
                <MdLibraryAdd
                  size={20}
                  className="hover:text-foregroundHover h-full w-full"
                />
              )}
            </div>
          </Tooltip>
        </CardFooter>
      </Card>
    </main>
  );
};

export default CardComponent;
