"use client";
import React from "react";
import ButtonComponent from "@/components/ButtonComponent";
import HeaderSection from "@/components/HeaderSection";
import {
  Card,
  CardBody,
  CardHeader,
  Divider,
  Select,
  SelectItem,
} from "@nextui-org/react";
import InputComponent from "@/components/InputComponent";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { productId } = params;
  const idForUpdate: boolean = productId !== "add";
  const [values, setValues] = React.useState("");

  return (
    <main className="w-full">
      <HeaderSection header={`${idForUpdate ? "Edit" : "Add new"} product`}>
        <ButtonComponent>Save</ButtonComponent>
      </HeaderSection>

      <div className="flex justify-center gap-2 lg:flex-nowrap flex-wrap">
        <Card radius="none" className="w-full lg:w-8/12">
          <CardHeader className="flex gap-3">
            <div className="flex flex-col">
              <p className="text-md">Product Details</p>
            </div>
          </CardHeader>
          <Divider />
          <CardBody>
            <div className="flex flex-col gap-2 lg:gap-4">
              <div className="flex justify-evenly gap-2 lg:flex-nowrap flex-wrap w-full">
                <div className="flex justify-evenly gap-2 lg:flex-nowrap flex-wrap w-full">
                  <div className="w-full lg:w-4/12">sec 1</div>
                  <div className="w-full lg:w-8/12">
                    <Select
                      size="sm"
                      selectionMode="multiple"
                      placeholder="Select an animal"
                      selectedKeys={values}
                      // onChange={handleSelectionChange}
                    >
                      <SelectItem key={1}>Dog</SelectItem>
                      <SelectItem key={2}>Cat</SelectItem>
                      <SelectItem key={3}>Elephant</SelectItem>
                      <SelectItem key={4}>Lion</SelectItem>
                      <SelectItem key={5}>Tiger</SelectItem>
                      <SelectItem key={6}>Horse</SelectItem>
                    </Select>
                  </div>
                </div>
                <div className="flex justify-evenly gap-2 lg:flex-nowrap flex-wrap w-full">
                  <div className="w-full lg:w-4/12"> sec 2</div>
                  <div className="w-full lg:w-8/12">
                    <Select
                      size="sm"
                      selectionMode="multiple"
                      placeholder="Select an animal"
                      selectedKeys={values}
                      // onChange={handleSelectionChange}
                    >
                      <SelectItem key={1}>Dog</SelectItem>
                      <SelectItem key={2}>Cat</SelectItem>
                      <SelectItem key={3}>Elephant</SelectItem>
                      <SelectItem key={4}>Lion</SelectItem>
                      <SelectItem key={5}>Tiger</SelectItem>
                      <SelectItem key={6}>Horse</SelectItem>
                    </Select>
                  </div>
                </div>
              </div>

              <div className="flex justify-evenly gap-2 lg:flex-nowrap flex-wrap w-full">
                <div className="w-full lg:w-2/12">Description</div>
                <div className="w-full lg:w-10/12">
                  <InputComponent placeholder="Description" />
                </div>
              </div>
            </div>
          </CardBody>
          <Divider />
        </Card>

        <div className="w-full lg:w-4/12">Images Section</div>
      </div>
    </main>
  );
};

export default ProductPage;
