import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { pagesInfoArray } from "../../data/data";
import { faBell, faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import './style.scss'

export const VerticalNavBar = () => {
  return (
    <div className="glassBox h-full flex color-text-muted flex-col justify-between py-0 items-center NavBar">
      <ul>
        {pagesInfoArray.map((e,index) => (
          <li className={`flex justify-center items-center w-full hover:cursor-pointer hover:border-r my-7 px-3 py-1 ${index === 0 && 'mt-3'}`}>
            <FontAwesomeIcon className="h-4 w-full" icon={e.iconName} />
          </li>
        ))}
      </ul>
      <div className="">
        <div className="px-2 hover:text-white hover:cursor-pointer color-text-muted ">
          <FontAwesomeIcon className="border-b py-3 w-4 h-4" icon={faBell} />
        </div>
        <div className="px-2 hover:text-white hover:cursor-pointer color-text-muted ">
          <FontAwesomeIcon className="py-3 w-4 h-4" icon={faVolumeHigh} />
        </div>
      </div>
    </div>
  );
};
