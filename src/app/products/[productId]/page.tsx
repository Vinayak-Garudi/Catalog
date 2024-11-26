import React from "react";
import ButtonComponent from "@/components/ButtonComponent";
import HeaderSection from "@/components/HeaderSection";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { productId } = params;
  const idForUpdate: boolean = productId !== "add";

  return (
    <main className="w-full">
      <HeaderSection header={`${idForUpdate ? "Edit" : "Add new"} product`}>
        <ButtonComponent>Save</ButtonComponent>
      </HeaderSection>
    </main>
  );
};

export default ProductPage;
