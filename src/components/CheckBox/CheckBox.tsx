import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CheckBoxPorpType } from "../../types/types";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export const CheckBox = ({ context, active }: CheckBoxPorpType) => {
  const [activeBox, setActiveBox] = useState<boolean>(active ? active : false);
  return (
    <div className={`flex items-start`}>
      <div
      onClick={()=>setActiveBox(!activeBox)}
        className={`mr-2 hover:brightness-150  mt-1 min-h-5 min-w-5 flex justify-center items-center cursor-pointer w-5 h-5 rounded border border-2 border-color-checkBox ${
          activeBox && "bg-primary border-primary"
        }`}
      >
        {activeBox && (
          <FontAwesomeIcon className="w-full h-full" icon={faCheck} />
        )}
      </div>
      <div>{context}</div>
    </div>
  );
};
