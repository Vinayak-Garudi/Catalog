"use client";
import ButtonComponent from "@/components/ButtonComponent";
import { EyeFilledIcon } from "@/components/EyeFilledIcon";
import { EyeSlashFilledIcon } from "@/components/EyeSlashedFilledIcon";
import InputComponent from "@/components/InputComponent";
import { apiRequest } from "@/utils/api";
import { setLocalStorageItem } from "@/utils/localstorage";
import { Card, CardBody, CardFooter, Divider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import React from "react";
import { useCookies } from "react-cookie";

interface authProps {
  email: string;
  password: string;
}

const SignUp = () => {
  const router = useRouter();
  const [btnLoading, setBtnLoading] = React.useState<boolean>(false);
  const [otpSent, setOtpSent] = React.useState<boolean>(false);
  const [otp, setOtp] = React.useState<string | number>("");
  const [isVisible, setIsVisible] = React.useState(false);
  const [authValues, setAuthValues] = React.useState<authProps>({
    email: "",
    password: "",
  });
  const [cookies, setCookie] = useCookies(["token"]);

  function handleLogin() {
    setBtnLoading(true);
    apiRequest("auth/login", {
      method: "POST",
      data: authValues,
    })
      .then(() => {
        setOtpSent(true);
        setBtnLoading(false);
      })
      .catch((error) => {
        setBtnLoading(false);
      });
  }

  function verifyOTP() {
    setBtnLoading(true);
    const verificationValues = {
      ...authValues,
      otp,
    };
    apiRequest("auth/verify", {
      method: "POST",
      data: verificationValues,
    })
      .then((response: any) => {
        setLocalStorageItem("user", response.user);
        setCookie("token", response.data.token);
        router.push("/");
      })
      .catch((error) => {
        setBtnLoading(false);
      });
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
        {!otpSent ? (
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
        ) : (
          <CardBody className="gap-y-4">
            <InputComponent
              type="text"
              placeholder="OTP"
              label="OTP"
              labelPlacement="outside"
              className="w-80"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
            />
          </CardBody>
        )}
        <Divider />
        {!otpSent ? (
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
        ) : (
          <CardFooter>
            <div className="flex justify-between w-full">
              <ButtonComponent
                className="w-5/12"
                onClick={() => {
                  setOtpSent(false);
                  setBtnLoading(false);
                }}
              >
                Retry
              </ButtonComponent>
              <ButtonComponent
                className="w-5/12"
                onClick={verifyOTP}
                isLoading={btnLoading}
              >
                Verify OTP
              </ButtonComponent>
            </div>
          </CardFooter>
        )}
      </Card>
    </main>
  );
};

export default SignUp;
