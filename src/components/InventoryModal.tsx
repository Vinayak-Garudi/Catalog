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
} from "@nextui-org/react";
import React from "react";
import ButtonComponent from "./ButtonComponent";
import SizeTabsComponent from "./SizeTabsComponent";
import InputComponent from "./InputComponent";

interface InventoryModalProps {
  isOpen: boolean;
  inventorySaving?: boolean;
  onClose: () => void;
  onSave: () => void;
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

  const [loading, setLoading] = React.useState(true);
  const [sizesArray, setSizesArray] = React.useState(sizes);
  const [popOverOpen, setPopOverOpen] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    if (isOpen) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [isOpen]);

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
                  type="number"
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
                <SizeTabsComponent sizesArray={sizesArray} />
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
                  onClick={onSave}
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
