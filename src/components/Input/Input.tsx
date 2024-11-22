import { useState, useEffect } from "react";
import { InputPropType } from "../../types/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

export const Input = ({
  name,
  placeholder,
  title,
  type,
  totalLevel,
  regex, 
  errorMessage, 
}: InputPropType) => {
  const [value, setValue] = useState<string>(""); 
  const [lvlPassword, setLvlPassword] = useState<number>(0);
  const [errorStatus, setErrorStatus] = useState<string | null>(null);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false); 
  const totalLevels = totalLevel;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value); 
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement, Element>)=>{
    const newValue = e.target.value;
    setValue(newValue); 
    if (regex && !regex.test(newValue)) {
      setErrorStatus(errorMessage || "Invalid input");
    } else {
      setErrorStatus(null);
    }
  }

  useEffect(() => {
    if (type === "password" && totalLevel) {
      let passwordLevel = 0;

      if (/\d/.test(value)) {
        passwordLevel++;
      }

      if (/[a-z]/.test(value)) {
        passwordLevel++;
      }

      if (/[A-Z]/.test(value)) {
        passwordLevel++;
      }

      if (value.length >= 5) {
        passwordLevel++;
      }

      setLvlPassword(passwordLevel);
    }
  }, [value, type, totalLevel]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <div className="w-full h-full">
      <label
        className="flex justify-between items-center text-label-input"
        htmlFor={name}
      >
        <span className="capitalize font-semibold text-base tracking-wide">
          {title}
        </span>
        {type === "password" && totalLevels && (
          <div className="flex items-center h-2">
            {Array.from({ length: totalLevels }, (_, i) => (
              <div
                key={i}
                className={`w-4 h-0.5 bg-white ${
                  lvlPassword >= i + 1 ? "bg-primary" : ""
                } active mr-1`}
              ></div>
            ))}
          </div>
        )}
      </label>
      <div className="flex items-center w-full h-full rounded-sm bg-input">
        <input
          className={`bg-transparent tracking-wider font-medium hover:brightness-150 w-full h-full placeholder:text-placeholder-input placeholder:font-medium placeholder:text-base outline-none p-2 ${
            errorStatus ? "border-red-500" : ""
          }`}
          name={name}
          placeholder={placeholder}
          type={isPasswordVisible ? "text" : type} 
          value={value} 
          onChange={handleChange} 
          onBlur={handleBlur}
        />
        {type === "password" && (
          <div className="w-8 h-full">
            <FontAwesomeIcon
              className="w-full h-4 color-text-muted cursor-pointer hover:brightness-150"
              icon={isPasswordVisible ? faEyeSlash : faEye} 
              onClick={togglePasswordVisibility}
            />
          </div>
        )}
      </div>
      {errorStatus && (
        <div className="text-input-error text-red-500 text-sm mt-2">
          {errorStatus}
        </div>
      )}
    </div>
  );
};
