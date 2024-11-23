import "../../sass/global.scss";
import { loginArray } from "../../data/data";
import { SwitchBox } from "../../components/SwitchBox/SwitchBox";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faJedi } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faSteamSymbol } from "@fortawesome/free-brands-svg-icons";
import { Input } from "../../components/Input/Input";
import { CheckBox } from "../../components/CheckBox/CheckBox";
import { Button } from "../../components/Button/Button";
import {
  EMAIL_REGEX,
  INVCODE,
  PASSWORD_REGEX,
  USERNAME_REGEX,
} from "../../utils/regex";
import { Clock } from "../../components/Clock/Clock";
import { useUserContext } from "../../context/User";
import { LoginPropsType } from "../../types/types";

export const Login = ({onChange}:LoginPropsType) => {
  const [statusLoginPage, setStatusLoginPage] = useState(loginArray);
  const [minimumAge, setMinimumAge] = useState<boolean>(false);
  const [acceptRuls, setAccept] = useState<boolean>(false);
  const { login ,isAuthenticated} = useUserContext();

  const handleClickSwitch = (index: number) => {
    const newList = statusLoginPage.map((item, i) => ({
      ...item,
      active: i === index,
    }));
    setStatusLoginPage(newList);
  };


  const handleRegistration = () => {
    if (minimumAge && acceptRuls) {
      const formData: Record<string, string> = {};
      const inputs = document.querySelectorAll<HTMLInputElement>("input");
      inputs.forEach((input) => {
        if (input.name) {
          formData[input.name] = input.value;
        }
      });

      if (formData.email && formData.userName && formData.password) {
        login({
          email: formData.email,
          userName: formData.userName,
          password: formData.password,
          inc: formData.invitationCode ? formData.invitationCode : null,
        });
        onChange(true)
        alert("Registration successful!");
      } else {
        alert("Please fill all required fields.");
      }
    }
  };
  const renderContent = () => {
    const activePage = statusLoginPage.find((e) => e.active);

    if (!activePage) return null;

    if (activePage.text === "login") {
      return (
        <>
          <div className="w-full mb-8">
            <Input
              title="email"
              type="email"
              placeholder="Enter your Email"
              name="email"
              regex={EMAIL_REGEX}
              errorMessage="Invalid email format"
            />
          </div>
          <div className="w-full mb-8">
            <Input
              title="password"
              type="password"
              placeholder="Enter your password"
              name="password"
              regex={PASSWORD_REGEX}
              errorMessage="Password must be at least 5 characters, including uppercase, lowercase, and a number"
            />
          </div>
          <div className="mb-5">
            <Button type="text" text="login" />
          </div>
          <div className="text-center mb-5">
            Forget Password ?{" "}
            <a className="text-primary hover:brightness-150  underline decoration-1 cursor-pointer font-medium tracking-wide capitalize">
              New Password
            </a>
          </div>
          <div className="flex justify-center items-center w-full mb-3">
            <Button
              type="icon"
              icon={
                <FontAwesomeIcon
                  className="w-full h-full"
                  icon={faSteamSymbol}
                />
              }
            />
            <Button
              type="icon"
              icon={
                <FontAwesomeIcon className="w-full h-full" icon={faGoogle} />
              }
            />
          </div>
          <div className="text-center">
            New to TeamForge ?
            <a className="text-primary hover:brightness-150  underline decoration-1 cursor-pointer font-medium tracking-wide capitalize">
              {" "}
              Create New Account
            </a>
          </div>
        </>
      );
    }

    if (activePage.text === "registration") {
      return (
        <>
          <div className="w-full mb-8">
            <Input
              title="user Name"
              type="username"
              placeholder="Enter your user name"
              name="userName"
              regex={USERNAME_REGEX}
              errorMessage="Username must be 3-16 characters long and can only include letters, numbers, and underscores."
            />
          </div>
          <div className="w-full mb-8"> 
            <Input
              title="email"
              type="email"
              placeholder="Enter your Email"
              name="email"
              regex={EMAIL_REGEX}
              errorMessage="Please enter a valid email address."
            />
          </div>
          <div className="w-full mb-8">
            <Input
              title="password"
              type="password"
              placeholder="Enter your password"
              name="password"
              totalLevel={4}
              regex={PASSWORD_REGEX}
              errorMessage="Password must be at least 5 characters long and include a mix of uppercase, lowercase, and numbers."
            />
          </div>
          <div className="w-full mb-8">
            <Input
              title="confirm password"
              type="password"
              placeholder="Enter your confirm password"
              name="confirmPassword"
              regex={PASSWORD_REGEX}
              errorMessage="Password must be at least 5 characters long and include a mix of uppercase, lowercase, and numbers."
            />
          </div>
          <div className="w-full mb-8">
            <Input
              title="Invitation Code"
              type="text"
              placeholder="Invitation Code"
              name="invitationCode"
              regex={INVCODE}
              errorMessage="Invitation code must be exactly 8 characters long and contain only letters and numbers."
            />
          </div>
          <div className="mb-3">
            <CheckBox
              onChange={setMinimumAge}
              active={false}
              context={
                <span>
                  I am 18 years old and I have read and accept{" "}
                  <a className="hover:brightness-150  text-primary underline decoration-1 cursor-pointer font-medium tracking-wide">
                    Terms and Conditions
                  </a>{" "}
                  and{" "}
                  <a className="hover:brightness-150  text-primary underline decoration-1 cursor-pointer font-medium tracking-wide">
                    Privacy Policy
                  </a>
                  .
                </span>
              }
            />
          </div>
          <div className="mb-8">
            <CheckBox
              onChange={setAccept}
              active={false}
              context={
                <span>
                  I would like to receive emails about betting and promotions
                  from loot.bet
                </span>
              }
            />
          </div>
          <div className="mb-5">
            <Button
              type="text"
              text="registration"
              onClick={handleRegistration}
            />
          </div>
          <div className="mb-5">
            <div className="text-center font-medium tracking-wide text-base">
              or via social network
            </div>
          </div>
          <div className="flex justify-center items-center w-full mb-3">
            <Button
              type="icon"
              icon={
                <FontAwesomeIcon
                  className="w-full h-full"
                  icon={faSteamSymbol}
                />
              }
            />
            <Button
              type="icon"
              icon={
                <FontAwesomeIcon className="w-full h-full" icon={faGoogle} />
              }
            />
          </div>
          <div className="text-center">
            Have an account?
            <a className="text-primary hover:brightness-150  underline decoration-1 cursor-pointer font-medium tracking-wide capitalize">
              {" "}
              login
            </a>
          </div>
        </>
      );
    }

    return null;
  };

  return (
    <>
      <div className={`flex w-screen h-screen bg-main-dark color-text-dark`}>
        <div className="relative w-5/12 h-full">
          <div className="w-full h-full flex flex-col justify-center pb-32 items-center bg-dark pt-5 px-3">
            <div className="relative mb-8">
              <FontAwesomeIcon className="w-32 h-32" icon={faJedi} />
            </div>
            <div className="capitalize text-xl text-center font-bold">
              <span>Account Available :</span>
              <span className="pl-3">32,074</span>
            </div>
            <div className="capitalize text-center text-xl font-bold">
              <span className="text-primary">Account Online :</span>
              <span className="pl-3">18,906</span>
            </div>
            <div className="mt-8 z-10">
              <Clock type="full"/>
            </div>
          </div>
          <div className="absolute w-full flex items-center justify-center right-8 bottom-0 pb-5 ">
            <div className="flex items-center justify-end px-2">
              <FontAwesomeIcon
                className="relative w-16 h-16 p-3 rounded-full logo"
                icon={faJedi}
              />
              <h2 data-text="TeamForge" className="textAnimation">
                TeamForge
              </h2>
            </div>
          </div>
        </div>
        <div className="relative w-7/12 overflow-scroll h-screen py-8 px-32">
          <FontAwesomeIcon
            className="absolute hover:brightness-150 color-text-muted cursor-pointer w-5 h-5 right-16 top-4"
            icon={faXmark}
          />
          <div className="mb-8">
            <SwitchBox
              onClick={handleClickSwitch}
              optionList={statusLoginPage}
            />
          </div>
          {renderContent()}
        </div>
      </div>
    </>
  );
};
