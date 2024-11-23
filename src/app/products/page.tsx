import React from "react";
import ButtonComponent from "@/components/ButtonComponent";
import CardComponent from "@/components/CardComponent";
import HeaderSection from "@/components/HeaderSection";

const Products = () => {
  const products: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  return (
    <main className="w-full">
      <HeaderSection header="Products">
        <ButtonComponent>Add</ButtonComponent>
      </HeaderSection>

      <div
        className={`flex flex-wrap lg:gap-9 gap-[10vw] ${
          products.length % 2 !== 0 ? "justify-start" : "justify-center"
        } lg:justify-start`}
      >
        {products.map((data: any, i: number) => {
          return (
            <CardComponent
              key={i}
              title={`Product ${i + 1}`}
              imgSrc="https://m.media-amazon.com/images/M/MV5BMTc0NzU2OTYyN15BMl5BanBnXkFtZTgwMTkwOTg2MTI@.jpg"
              altImg={`Product ${i + 1} Image`}
            />
          );
        })}
      </div>
    </main>
  );
};

export default Products;
