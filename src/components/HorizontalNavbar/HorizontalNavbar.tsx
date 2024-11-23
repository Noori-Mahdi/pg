import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJedi } from "@fortawesome/free-solid-svg-icons";
import { Clock } from "../Clock/Clock";
import { ProgressBar } from "../ProgressBar/ProgressBar";
import { defualtUser } from "../../data/data";
import { ProfileBox } from "../ProfileBox/ProfileBox";
import { CurrentBox } from "../CurrentBox/CurrentBox";

export const HorizontalNavbar = () => {
  return (
    <div className="flex justify-between items-center px-2 py-3">
      <div className="flex items-center">
        <div>
          <FontAwesomeIcon
            className="h-8 w-8 text-primary pr-3"
            icon={faJedi}
          />
        </div>
        <div className=" select-none">
          <Clock type="time" />
        </div>
        <div className="w-44 ml-10 select-none">
          <ProgressBar
            label={defualtUser.level.lvl + " " + "lvl"}
            progress={defualtUser.level.pro}
          />
        </div>
      </div>
      <div className="flex items-center">
        <div className="mr-12">
          {" "}
          <CurrentBox
            AmountUnits={defualtUser.Current.crown}
            currentType="crown"
          />
        </div>
        <div className="mr-24">
          {" "}
          <CurrentBox
            AmountUnits={defualtUser.Current.coin}
            currentType="coin"
          />
        </div>
        <div>
          <ProfileBox img={defualtUser.img} userName={defualtUser.userName} />
        </div>
      </div>
    </div>
  );
};
