"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image, Tooltip } from "@nextui-org/react";
import { IoOptionsSharp } from "react-icons/io5";
import InventoryModal from "./InventoryModal";

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
  return (
    <main>
      <InventoryModal
        title={title}
        isOpen={showInventory}
        onClose={() => setShowInventory(false)}
        onSave={() => setShowInventory(false)}
      ></InventoryModal>
      <Card
        shadow="sm"
        radius="none"
        isHoverable
        isPressable
        className={`min-h-56 min-w-[40vw] lg:min-w-52 lg:min-h-72 ${className}`}
        onClick={onPress}
      >
        <CardBody className="overflow-visible p-0 h-full">
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
          <Tooltip showArrow={true} radius="none" content="Inventory">
            <div>
              <IoOptionsSharp
                className="hover:text-foregroundHover h-full w-full"
                onClick={(e) => {
                  e.stopPropagation(); // Prevent triggering Card's onClick
                  setShowInventory(true);
                }}
              />
            </div>
          </Tooltip>
        </CardFooter>
      </Card>
    </main>
  );
};

export default CardComponent;
