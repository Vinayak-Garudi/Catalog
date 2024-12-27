"use client";
import ButtonComponent from "@/components/ButtonComponent";
import { EyeFilledIcon } from "@/components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/EyeSlashedFilledIcon";
import InputComponent from "@/components/InputComponent";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";

interface authProps {
  email: string;
  password: string;
}

const SignUp = () => {
  const router = useRouter();
  const [btnLoading, setBtnLoading] = React.useState<boolean>(false);
  const [isVisible, setIsVisible] = React.useState(false);
  const [authValues, setAuthValues] = React.useState<authProps>({
    email: "",
    password: "",
  });

  function handleLogin() {
    setBtnLoading(true);
    setTimeout(() => {
      console.log("authValues", authValues);
      router.replace("/");
    }, 1500);
  }

  function handleFormValues(value: any, key: string) {
    setAuthValues((val) => {
      return {
        ...val,
        [key]: value,
      };
    });
  }

  return (
    <main className="w-screen h-screen fixed top-0 left-0 flex items-center justify-center">
      <Card className="max-w-[400px]">
        <CardBody className="gap-y-4">
          <InputComponent
            type="email"
            placeholder="Email"
            label="Email"
            labelPlacement="outside"
            className="w-80"
            value={authValues.email}
            onChange={(e) => handleFormValues(e.target.value, "email")}
          />

          <InputComponent
            type={isVisible ? "text" : "password"}
            endContent={
              <button
                className="focus:outline-none mt-2"
                type="button"
                onClick={() => setIsVisible(!isVisible)}
              >
                {isVisible ? (
                  <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                ) : (
                  <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                )}
              </button>
            }
            placeholder="Password"
            label="Password"
            labelPlacement="outside"
            className="w-80"
            isClearable={false}
            value={authValues.password}
            onChange={(e) => handleFormValues(e.target.value, "password")}
          />
        </CardBody>
        <Divider />
        <CardFooter>
          <div className="flex justify-center w-full">
            <ButtonComponent
              className="w-11/12"
              onClick={handleLogin}
              isLoading={btnLoading}
            >
              Log In
            </ButtonComponent>
          </div>
        </CardFooter>
      </Card>
    </main>
  );
};

export default SignUp;
