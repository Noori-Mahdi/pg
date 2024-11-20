export type optionListSwitchBox = {
  text: string;
  active: boolean;
};

export interface SwitchBoxPropType {
  optionList: optionListSwitchBox[];
  onClick: (index: number) => void;
}

export type InputPropType = {
  name: string;
  placeholder: string;
  title: string;
  type: "password" | "text" | "email" | 'username' | 'invCode';
  totalLevel?: number;
  regex?: RegExp; 
  errorMessage?: string;
};

export interface CheckBoxPorpType {
  context: React.ReactNode;
  active?: boolean;
}

export interface ButtonPropType {
  text?: string;
  icon?: React.ReactNode;
  type: 'text'|'icon';
}
