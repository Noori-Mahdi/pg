import { ButtonPropType } from "../../types/types";

export const Button = ({ icon, text, type, onClick}: ButtonPropType) => {
  return (
    <>
      {type === "text" && (
        <div onClick={onClick} className="w-full hover:brightness-150 cursor-pointer select-none text-center py-2 h-full uppercase font-bold text-xl tracking-wider rounded-sm bg-primary">
          {text}
        </div>
      )}
      {type === "icon" && (
        <div onClick={onClick} className="flex hover:brightness-150  mx-1 cursor-pointer items-center justify-center w-10 h-10  py-2 rounded-full bg-input">
          {icon}
        </div>
      )}
    </>
  );
};
