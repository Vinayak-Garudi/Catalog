"use client";
import React from "react";
import ButtonComponent from "@/components/ButtonComponent";
import CardComponent from "@/components/CardComponent";
import HeaderSection from "@/components/HeaderSection";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";

const PurchaseRequests = () => {
  const router = useRouter();
  const products: number[] = [1, 2, 3];

  return (
    <main className="w-full">
      <HeaderSection header="Purchase Requests">
        {/* <Tooltip showArrow={true} radius="none" content="Search for products"> */}
        <div>
          <ButtonComponent
            isIconOnly
            className="hover:text-foregroundHover h-full w-full"
          >
            <IoSearch />
          </ButtonComponent>
        </div>
        {/* </Tooltip> */}
        <ButtonComponent onClick={() => router.push(`products`)}>
          Add
        </ButtonComponent>
      </HeaderSection>

      <div
        className={`flex flex-wrap lg:gap-9 gap-[10vw] ${
          products.length % 2 !== 0 ? "justify-start" : "justify-center"
        } lg:justify-start`}
      >
        {products.map((data: any, i: number) => {
          return (
            <CardComponent
              onPress={() => router.push(`products/${i + 1}`)}
              key={i}
              title={`Product ${i + 1}`}
              imgSrc="https://m.media-amazon.com/images/M/MV5BMTc0NzU2OTYyN15BMl5BanBnXkFtZTgwMTkwOTg2MTI@.jpg"
              altImg={`Product ${i + 1} Image`}
            ></CardComponent>
          );
        })}
      </div>
    </main>
  );
};

export default PurchaseRequests;
