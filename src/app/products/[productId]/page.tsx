"use client";
import React from "react";
import ButtonComponent from "@/components/ButtonComponent";
import HeaderSection from "@/components/HeaderSection";
import { Card, CardBody, CardHeader, Divider } from "@nextui-org/react";
import TextareaComponent from "@/components/TextareaComponent";
import InputComponent from "@/components/InputComponent";

interface ProductPageProps {
  params: {
    productId: string;
  };
}

interface formProps {
  productName: string;
  type: string;
  price: number;
  productionPrice: number;
  color: string;
  sellingTag: string;
  description: string;
}

const ProductPage = ({ params }: ProductPageProps) => {
  const { productId } = params;
  const idForUpdate: boolean = productId !== "add";
  const [formValues, setFormValues] = React.useState<formProps>({
    productName: "",
    type: "",
    price: 0,
    productionPrice: 0,
    color: "",
    sellingTag: "",
    description: "",
  });

  function handleFormValues(value: any, key: string) {
    setFormValues((val) => {
      return {
        ...val,
        [key]: value,
      };
    });
  }

  function saveProduct() {
    console.log("formValues", formValues);
  }

  return (
    <main className="w-full">
      <HeaderSection
        header={`${
          true ? `${idForUpdate ? "Edit" : "Add new"} product` : `Product Name`
        }`}
      >
        {true ? (
          <ButtonComponent onClick={saveProduct}>Save</ButtonComponent>
        ) : (
          <ButtonComponent>Add</ButtonComponent>
        )}
      </HeaderSection>

      <div className="flex justify-center gap-2 lg:flex-nowrap flex-wrap">
        <Card radius="none" className="w-full lg:w-4/12 h-fit">
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
                  <div className="w-full lg:w-4/12">Product Name</div>
                  <div className="w-full lg:w-8/12">
                    <InputComponent
                      placeholder="Product Name"
                      value={formValues.productName}
                      onChange={(e) =>
                        handleFormValues(e.target.value, "productName")
                      }
                    />
                  </div>
                </div>
                <div className="flex justify-evenly gap-2 lg:flex-nowrap flex-wrap w-full">
                  <div className="w-full lg:w-4/12">Product Type</div>
                  <div className="w-full lg:w-8/12">
                    <InputComponent
                      placeholder="Product Type"
                      value={formValues.type}
                      onChange={(e) => handleFormValues(e.target.value, "type")}
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-evenly gap-2 lg:flex-nowrap flex-wrap w-full">
                <div className="flex justify-evenly gap-2 lg:flex-nowrap flex-wrap w-full">
                  <div className="w-full lg:w-4/12">Product Price</div>
                  <div className="w-full lg:w-8/12">
                    <InputComponent
                      placeholder="Product Price"
                      type="number"
                      value={formValues.price}
                      onChange={(e) =>
                        handleFormValues(e.target.value, "price")
                      }
                    />
                  </div>
                </div>
                <div className="flex justify-evenly gap-2 lg:flex-nowrap flex-wrap w-full">
                  <div className="w-full lg:w-4/12">Production Price</div>
                  <div className="w-full lg:w-8/12">
                    <InputComponent
                      placeholder="Production Price"
                      value={formValues.productionPrice}
                      onChange={(e) =>
                        handleFormValues(e.target.value, "productionPrice")
                      }
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-evenly gap-2 lg:flex-nowrap flex-wrap w-full">
                <div className="flex justify-evenly gap-2 lg:flex-nowrap flex-wrap w-full">
                  <div className="w-full lg:w-4/12">Colour</div>
                  <div className="w-full lg:w-8/12">
                    <InputComponent
                      placeholder="Colour"
                      value={formValues.color}
                      onChange={(e) =>
                        handleFormValues(e.target.value, "color")
                      }
                    />
                  </div>
                </div>
                <div className="flex justify-evenly gap-2 lg:flex-nowrap flex-wrap w-full">
                  <div className="w-full lg:w-4/12">Selling Tag</div>
                  <div className="w-full lg:w-8/12">
                    <InputComponent
                      placeholder="Selling Tag"
                      value={formValues.sellingTag}
                      onChange={(e) =>
                        handleFormValues(e.target.value, "sellingTag")
                      }
                    />
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
                    value={formValues.description}
                    onChange={(e) =>
                      handleFormValues(e.target.value, "description")
                    }
                  />
                </div>
              </div>
            </div>
          </CardBody>
          <Divider />
        </Card>
      </div>
    </main>
  );
};

export default ProductPage;
