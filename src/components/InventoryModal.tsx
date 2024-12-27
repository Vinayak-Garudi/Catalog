"use client";
import {
  Button,
  Chip,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Skeleton,
  Tab,
  Tabs,
} from "@nextui-org/react";
import React from "react";
import ButtonComponent from "./ButtonComponent";
import InputComponent from "./InputComponent";

interface InventoryModalProps {
  isOpen: boolean;
  inventorySaving?: boolean;
  onClose: () => void;
  onSave: (e: sizesObjProps[]) => void;
  title: string;
  type?: string;
}

interface sizesObjProps {
  label: string | number;
  quantity: number;
}

const InventoryModal: React.FC<
  React.PropsWithChildren<InventoryModalProps>
> = ({
  isOpen,
  inventorySaving = false,
  onClose,
  onSave,
  title,
  type = "products",
}) => {
  const sizes: sizesObjProps[] = [
    {
      label: "XS",
      quantity: 0,
    },
    {
      label: "M",
      quantity: 0,
    },
    {
      label: "L",
      quantity: 0,
    },
    {
      label: "XL",
      quantity: 0,
    },
    {
      label: "2XL",
      quantity: 0,
    },
    {
      label: "3XL",
      quantity: 0,
    },
    {
      label: "5XL",
      quantity: 0,
    },
    {
      label: "7XL",
      quantity: 0,
    },
    {
      label: "9XL",
      quantity: 0,
    },
    {
      label: 28,
      quantity: 0,
    },
    {
      label: 30,
      quantity: 0,
    },
    {
      label: 32,
      quantity: 0,
    },
    {
      label: 34,
      quantity: 0,
    },
    {
      label: 36,
      quantity: 0,
    },
    {
      label: 38,
      quantity: 0,
    },
    {
      label: 40,
      quantity: 0,
    },
    {
      label: 42,
      quantity: 0,
    },
    {
      label: 44,
      quantity: 0,
    },
    {
      label: 46,
      quantity: 0,
    },
    {
      label: 48,
      quantity: 0,
    },
    {
      label: 50,
      quantity: 0,
    },
    {
      label: 52,
      quantity: 0,
    },
  ];

  const [loading, setLoading] = React.useState<boolean>(true);
  const [popOverOpen, setPopOverOpen] = React.useState<boolean>(false);
  const [sizesArray, setSizesArray] = React.useState<sizesObjProps[]>(sizes);
  const [currentQuantity, setCurrentQuantity] = React.useState<number>(0);
  const [selectedSize, setSelectedSize] = React.useState<string | number>("XS");

  React.useEffect(() => {
    setLoading(true);
    if (isOpen) {
      resetValues();
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [isOpen]);

  function resetValues() {
    setSizesArray(sizes);
    setCurrentQuantity(0);
    setSelectedSize("XS");
  }

  React.useEffect(() => {
    const position = sizesArray.indexOf(
      sizesArray.filter((res) => res.label === selectedSize)[0]
    );
    let array = sizesArray;
    array[position].quantity = currentQuantity;
    setSizesArray(array);
  }, [currentQuantity]);

  React.useEffect(() => {
    const position = sizesArray.indexOf(
      sizesArray.filter((res) => res.label === selectedSize)[0]
    );
    setCurrentQuantity(sizesArray[position].quantity);
  }, [selectedSize]);

  return (
    <Modal size="md" radius="sm" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex gap-4">
              <span>{title}</span>
              <Chip color="primary" size="sm">
                46729
              </Chip>
            </ModalHeader>
            <ModalBody>
              {!loading ? (
                <InputComponent
                  type="text"
                  value={currentQuantity}
                  onChange={(e) => setCurrentQuantity(Number(e.target.value))}
                  isReadOnly={false}
                  label="Enter Quantity"
                  className="absolute right-8 w-1/2"
                />
              ) : (
                <Skeleton className="rounded-sm">
                  <div className="h-12 right-8 w-1/2 rounded-sm bg-default-300"></div>
                </Skeleton>
              )}
              {!loading ? (
                <div className="flex w-full flex-col">
                  <Tabs radius="sm">
                    <Tab title="Text">
                      <div className="flex w-full flex-col">
                        <Tabs
                          radius="sm"
                          className="-ml-1 mr-1"
                          selectedKey={selectedSize}
                          onSelectionChange={(key) => setSelectedSize(key)}
                        >
                          {sizesArray.map((size: sizesObjProps, i: number) => {
                            return !Number(size.label) ? (
                              <Tab key={size.label} title={size.label}></Tab>
                            ) : (
                              ""
                            );
                          })}
                        </Tabs>
                      </div>
                    </Tab>
                    <Tab title="in">
                      <div className="flex w-full flex-col">
                        <Tabs
                          radius="sm"
                          className="-ml-1 mr-1"
                          selectedKey={selectedSize}
                          onSelectionChange={(key) => setSelectedSize(key)}
                        >
                          {sizesArray.map((size: sizesObjProps, i: number) => {
                            return Number(size.label) ? (
                              <Tab key={size.label} title={size.label}></Tab>
                            ) : (
                              ""
                            );
                          })}
                        </Tabs>
                      </div>
                    </Tab>
                  </Tabs>
                </div>
              ) : (
                <Skeleton className="rounded-sm">
                  <div className="h-11 rounded-sm bg-default-300"></div>
                </Skeleton>
              )}
            </ModalBody>
            <ModalFooter>
              {true ? (
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
              ) : (
                <>
                  <Popover
                    placement="top"
                    isOpen={popOverOpen}
                    onOpenChange={(open) => setPopOverOpen(open)}
                    showArrow={true}
                  >
                    <PopoverTrigger>
                      <Button
                        onPress={() => setPopOverOpen(true)}
                        color="danger"
                        variant="light"
                      >
                        Delete
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent>
                      <div className="px-1 py-2">
                        <div className="text-small font-bold">
                          Are you sure?
                        </div>
                        <div className="text-tiny flex gap-1">
                          <Button
                            color="primary"
                            variant="light"
                            onPress={() => setPopOverOpen(false)}
                          >
                            Cancel
                          </Button>
                          <Button
                            color="danger"
                            variant="light"
                            onPress={onClose}
                          >
                            Delete
                          </Button>
                        </div>
                      </div>
                    </PopoverContent>
                  </Popover>
                </>
              )}
              {true ? (
                <ButtonComponent
                  disabled={loading}
                  isLoading={inventorySaving}
                  onClick={() => onSave(sizesArray)}
                >
                  Save
                </ButtonComponent>
              ) : (
                ""
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default InventoryModal;
