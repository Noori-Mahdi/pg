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
  onChange:(e:boolean)=>void
}

export interface ButtonPropType {
  text?: string;
  icon?: React.ReactNode;
  type: 'text'|'icon';
  onClick?: ()=>void;
}

export interface UserInfo{
  userName:string;
  email:string;
  password:string;
  inc:string | null;
}

export interface UserContextType extends UserInfo{
  isAuthenticated: boolean; 
  logout: () => void;
  login:(userData: UserInfo) =>void;
}

export interface LoginPropsType{
  onChange: (e:boolean) =>void
}
