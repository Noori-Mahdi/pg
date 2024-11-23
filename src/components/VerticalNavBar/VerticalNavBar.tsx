import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { friendList, pagesInfoArray } from "../../data/data";
import { faBell, faVolumeHigh, faPlus } from "@fortawesome/free-solid-svg-icons";
import { VerticalNavBarPropsType } from "../../types/types";
import { MinProfile } from "../MinProfile/MinProfile";

export const VerticalNavBar = ({ type }: VerticalNavBarPropsType) => {
  const [showMinProfile, setShowMinProfile] = useState<null | number>(null);
  const [friendLists, setFriendList] = useState(
    friendList.sort((a, b) => a.userStatus - b.userStatus)
  );

  // Ref برای گرفتن عنصر کلیک شده
  const profileRef = useRef<HTMLDivElement>(null);

  // هندل کلیک خارج از MinProfile
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target as Node)
      ) {
        setShowMinProfile(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="glassBox h-full flex color-text-muted flex-col justify-between py-0 items-center NavBar">
      {type === "navBar" ? (
        <>
          <ul>
            {pagesInfoArray.map((e, index) => (
              <li
                key={index}
                className={`flex justify-center navBarLi items-center w-full hover:cursor-pointer hover:border-r my-7 px-3 py-1 ${
                  index === 0 && "mt-3"
                }`}
              >
                <FontAwesomeIcon className="h-4 w-full" icon={e.iconName} />
              </li>
            ))}
          </ul>
          <div className="">
            <div className="px-2 hover:text-white hover:cursor-pointer color-text-muted ">
              <FontAwesomeIcon
                className="border-b py-3 w-4 h-4"
                icon={faBell}
              />
            </div>
            <div className="px-2 hover:text-white hover:cursor-pointer color-text-muted ">
              <FontAwesomeIcon className="py-3 w-4 h-4" icon={faVolumeHigh} />
            </div>
          </div>
        </>
      ) : (
        <div className="relative w-16 h-full text-center">
          <ul className="p-3 frindList z-0">
            {friendLists.map((e, index) => (
              <li
                key={index}
                onClick={() => setShowMinProfile(index)}
                className={`mb-5 hover:cursor-pointer relative`}
              >
                {index === showMinProfile && showMinProfile !== null && (
                  <div ref={profileRef}>
                    <MinProfile
                      img={e.userImg}
                      inGame={e.inGame}
                      userStatus={e.userStatus}
                      userName={e.userName}
                      level={e.lvl}
                    />
                  </div>
                )}
                <div
                  className={`w-10 h-10 ${
                    e.userStatus === 1 && "border-success"
                  } ${e.userStatus === 2 && "border-primary"} ${
                    e.userStatus === 3 && "border-muted"
                  }  border-2 p-1 rounded-full `}
                >
                  <img
                    className={`h-full w-full rounded-full `}
                    src={e.userImg}
                  />
                </div>
                <div
                  className={`font-bold text-xs mt-1 tracking-wide truncate overflow-hidden whitespace-nowrap ${
                    e.userStatus === 1 && "text-success"
                  } ${e.userStatus === 2 && "text-primary"} ${
                    e.userStatus === 3 && "text-muted"
                  } `}
                >
                  {e.userName}
                </div>
              </li>
            ))}
          </ul>

          <button className="flex justify-center  items-center absolute bottom-0 p-2  glassBox  left-0 text-center z-10  h-14 w-full">
            <FontAwesomeIcon
              className=" border-2 rounded-full border-dashed w-4 h-4 p-2 text-white"
              icon={faPlus}
            />
          </button>
        </div>
      )}
    </div>
  );
};
