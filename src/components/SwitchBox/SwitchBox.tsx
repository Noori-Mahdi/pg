import { SwitchBoxPropType } from "../../types/types";

export const SwitchBox = ({ optionList, onClick }: SwitchBoxPropType) => {
  return (
    <ul className="flex">
      {optionList.map((option, index) => (
        <li onClick={() => onClick(index)} className={`text-xl hover:brightness-150  select-none cursor-pointer font-bold ${option.active ? 'color-text-dark': 'color-text-muted'}`}>
          <span className="uppercase">{option.text}</span>
          {index + 1 != optionList.length && <span className="mx-2 ">/</span>}
        </li>
      ))}
    </ul>
  );
};


