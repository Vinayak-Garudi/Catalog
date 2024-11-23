"use client";
import React from "react";
import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";
import { IoOptionsSharp } from "react-icons/io5";

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
  return (
    <Card
      shadow="sm"
      radius="none"
      isPressable
      isHoverable
      className={`min-h-56 min-w-[40vw] lg:min-w-52 lg:min-h-72 ${className}`}
      onPress={() => onPress}
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
        <IoOptionsSharp onClick={() => console.log("inventory clicked")} />
      </CardFooter>
    </Card>
  );
};

export default CardComponent;
