import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MinProfilePropsType } from "../../types/types";
import {
  faXmark,
  faUser,
  faMessage,
  faFlag,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./style.scss";

export const MinProfile = ({
  img,
  userName,
  userStatus,
  inGame,
  level,
}: MinProfilePropsType) => {
  return (
    <div className="absolute -left-72 top-0 glassBox p-3 MinProfile w-64">
      <div
        className={`flex items-center h-16 z-20  ${
          userStatus === 1 && "text-success"
        } ${userStatus === 2 && "text-primary"} ${
          userStatus === 3 && "text-muted"
        }`}
      >
        <div
          className={`border-2 rounded-full ${
            userStatus === 1 && "border-success"
          } ${userStatus === 2 && "border-primary"} ${
            userStatus === 3 && "border-muted"
          }`}
        >
          <img src={img} className="w-16 h-16 rounded-full p-1" />
        </div>
        <div className="mx-3 text-start font-bold tracking-wide truncate overflow-hidden whitespace-nowrap">
          <div className="text-sm">{userName}</div>
          {inGame ? (
            <div className="text-xs">{inGame}</div>
          ) : (
            <div className="text-xs uppercase">
              {userStatus == 2 ? "online" : "offline"}
            </div>
          )}
          <div className="text-xs font-bold Orbitron tracking-wide">
            lvl : {level}
          </div>
        </div>
      </div>
      <div>
        <ul>
          <li className="flex hover:brightness-200 items-center mt-3 capitalize text-sm tracking-wide color-text-dark">
            <FontAwesomeIcon className="w-3 h-3 mr-2" icon={faUser} />
            <div>Profile</div>
          </li>
          <li className="flex hover:brightness-200 items-center mt-3 capitalize text-sm tracking-wide color-text-dark">
            <FontAwesomeIcon className="w-3 h-3 mr-2" icon={faMessage} />
            <div>Massage</div>
          </li>
          <li className="flex hover:brightness-200 items-center mt-3 capitalize text-sm tracking-wide text-input-error">
            <FontAwesomeIcon className="w-3 h-3 mr-2" icon={faFlag} />
            <div>Report</div>
          </li>
        </ul>
      </div>
      <div>
        <div className="mt-3 bg-dark w-full">
          <input
            placeholder="send message ..."
            className="text-white text-sm tracking-wide bg-dark outline-none py-1 px-2"
            type="text"
          />
          <FontAwesomeIcon
            className="px-2 text-white"
            icon={faArrowRightToBracket}
          />
        </div>
      </div>
    </div>
  );
};
