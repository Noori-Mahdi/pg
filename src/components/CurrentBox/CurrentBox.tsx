import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CurrentBoxPropsType } from "../../types/types";
import { faCoins, faCrown, faPlus } from "@fortawesome/free-solid-svg-icons";
import './style.scss';

export const CurrentBox = ({
  AmountUnits,
  currentType,
}: CurrentBoxPropsType) => {
  return (
    <div className="flex items-center text-white rounded-md current-box">
        <FontAwesomeIcon className={`mr-2 w-3 h-3 ${currentType === 'crown'? 'text-primary':'text-gold'} tracking-wider`} icon={currentType === "coin" ? faCoins : faCrown} />
      <div className={`text-xs font-bold mr-1`}>{AmountUnits.toLocaleString()}</div>
      <div className={`text-xs font-bold ${currentType === 'crown'? 'text-primary':'text-gold'} uppercase tracking-wider`}>{currentType}</div>

      <button className="flex items-center justify-center rounded-sm bg-muted ml-3 w-4 h-4">
        <FontAwesomeIcon className="w-full h-full font-extrabold p-1"  icon={faPlus} />
      </button>
    </div>
  );
};
