import React, { createContext, useContext, useState, useMemo } from "react";
import { UserInfo, UserContextType } from "../types/types";

interface UserProviderProps {
  children: React.ReactNode;
}

const defaultUser: UserContextType = {
  userName: "",
  password: "",
  email:"",
  inc: null,
  isAuthenticated: false,
  logout: () => {},
  login: () => {}
};

export const UserContext = createContext<UserContextType>(defaultUser);

export const UserProvider: React.FC<UserProviderProps> = ({ children }) => {
  const [user, setUser] = useState<UserInfo>({
    userName: "",
    email:"",
    password: "",
    inc: null,
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = (userData: UserInfo) => {
    setUser(userData);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser({
      userName: "",
      password: "",
      email: "",
      inc: null,
    });
    setIsAuthenticated(false);
  };

  const contextValue = useMemo(
    () => ({ ...user, isAuthenticated, logout, login }),
    [user]
  );

  return (
    <UserContext.Provider value={contextValue}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook for accessing the context
export const useUserContext = (): UserContextType => {
  return useContext(UserContext);
};
