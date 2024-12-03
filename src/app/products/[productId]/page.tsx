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
import TextareaComponent from "@/components/TextareaComponent";

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
        <Card radius="none" className="w-full h-full lg:w-8/12">
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
                  <TextareaComponent
                    placeholder="Product Description"
                    minRows={5}
                    maxRows={5}
                  />
                </div>
              </div>
            </div>
          </CardBody>
          <Divider />
        </Card>

        <Card radius="none" className="w-full lg:w-4/12">
          <CardHeader className="flex gap-3 justify-between">
            <div className="flex flex-col">
              <p className="text-md">Product Images</p>
            </div>
            <div className="flex gap-2">
              <ButtonComponent>Edit</ButtonComponent>
              <ButtonComponent>Add</ButtonComponent>
            </div>
          </CardHeader>
          <Divider />
          <CardBody className="h-48">
            {false ? (
              <div className="w-full h-full flex justify-center items-center">
                No Images Uploaded
              </div>
            ) : (
              <div className="w-full h-full flex gap-x-2">
                <div className="min-w-40 h-40 border-dashed border border-foregroundTextHover hover:border-primaryHover">
                  hi
                </div>
                <div className="min-w-40 h-40 border-dashed border border-foregroundTextHover hover:border-primaryHover">
                  hi
                </div>
                <div className="min-w-40 h-40 border-dashed border border-foregroundTextHover hover:border-primaryHover">
                  hi
                </div>
              </div>
            )}
          </CardBody>
        </Card>
      </div>
    </main>
  );
};

export default ProductPage;
