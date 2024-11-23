import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pagesInfoArray } from "../../data/data";
import { faJedi } from "@fortawesome/free-solid-svg-icons";
import "./style.scss";
import { useState } from "react";

export const NavBar = () => {
  const [controlWidth, setControlWidth] = useState(false);

  return (
    <div
      onMouseLeave={() => setControlWidth(false)}
      onMouseMove={() => setControlWidth(true)}
      className={`flex flex-col bg-main-dark color-text-dark justify-between  h-screen p-4 ${controlWidth && 'w-2/12'}`}
    >
      <div>
        <div className="flex items-center gap-3 justify-start border-b pb-3 mb-3">
          <FontAwesomeIcon
            className={`${
              !controlWidth ? "w-10 h-10 text-primary" : " w-8 h-8 "
            }`}
            icon={faJedi}
          />
          {controlWidth && (
            <div className="text-xl tracking-wider uppercase font-bold text-primary">
              TeamForge
            </div>
          )}
        </div>
        <ul>
          {pagesInfoArray.map((e, index) => (
            <li
              className={`flex gap-2 cursor-pointer tracking-wider font-bold py-2 capitalize pageList ${!controlWidth && 'justify-center'} ${
                index + 1 == pagesInfoArray.length && "mt-8 text-input-error"
              }`}
            >
              <div>
                <FontAwesomeIcon
                  className={`${controlWidth ? "w-4 h-4 " : "w-5 h-5"}`}
                  icon={e.iconName}
                />
              </div>
              {controlWidth && <div>{e.pageName}</div>}
            </li>
          ))}
        </ul>
      </div>
      {controlWidth && (
        <div className="text-center text-sm font-medium text-white">
          <div>Create By Mahdi Nouri</div>
          <div className="mt-2">2024</div>
        </div>
      )}
    </div>
  );
};
