"use client";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Skeleton,
} from "@nextui-org/react";
import React from "react";
import ButtonComponent from "./ButtonComponent";
import SliderComponent from "./SliderComponent";
import InputComponent from "./InputComponent";

interface InventoryModalProps {
  isOpen: boolean;
  inventorySaving?: boolean;
  onClose: () => void;
  onSave: () => void;
  title: string;
  type?: string;
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
  const sizes = [
    {
      value: 0,
      label: "XS",
    },
    {
      value: 1,
      label: "S",
    },
    {
      value: 2,
      label: "M",
    },
    {
      value: 3,
      label: "L",
    },
    {
      value: 4,
      label: "XL",
    },
    {
      value: 5,
      label: "2XL",
    },
    {
      value: 6,
      label: "3XL",
    },
    {
      value: 7,
      label: "4XL",
    },
    {
      value: 8,
      label: "Total",
      isReadOnly: true,
    },
  ];

  const [selectedSize, setSelectedSize] = React.useState(sizes[0].label);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setLoading(true);
    if (isOpen) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [isOpen]);

  function handleSizeChange(e: number) {
    setSelectedSize(sizes[e].label);
  }

  return (
    <Modal size="md" radius="sm" isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>
              <div className="flex justify-center">
                {!loading ? (
                  <InputComponent
                    type="number"
                    label={
                      selectedSize === "Total"
                        ? "Total Quantity"
                        : "Enter Quantity"
                    }
                    isReadOnly={selectedSize === "Total"}
                    isDisabled={selectedSize === "Total"}
                    className="w-2/3"
                  />
                ) : (
                  <Skeleton className="w-2/3 h-12 rounded-sm">
                    <div className="h-full w-full rounded-sm bg-default-200"></div>
                  </Skeleton>
                )}
              </div>
              {!loading ? (
                <SliderComponent
                  label="Select a size"
                  marks={sizes}
                  maxValue={sizes.length - 1}
                  getValue={(val) => sizes[Number(val)].label}
                  onChange={(e) => handleSizeChange(e)}
                />
              ) : (
                <Skeleton className="w-full h-16 rounded-sm">
                  <div className="h-full w-full rounded-sm bg-default-200"></div>
                </Skeleton>
              )}
            </ModalBody>
            <ModalFooter>
              <Button color="danger" variant="light" onPress={onClose}>
                Close
              </Button>
              <ButtonComponent
                disabled={loading}
                isLoading={inventorySaving}
                onClick={onSave}
              >
                Save
              </ButtonComponent>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default InventoryModal;
