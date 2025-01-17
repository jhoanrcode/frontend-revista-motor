import React, { ReactNode } from "react";

export interface GlobalProps {
  mobileMenu: boolean;
  setMobileMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

export const GlobalContext = React.createContext<GlobalProps>(
  {} as GlobalProps
);

interface Props {
  children?: ReactNode;
}

export const GlobalProvider = ({ children }: Props) => {
  const [mobileMenu, setMobileMenu] = React.useState(false);

  return (
    <GlobalContext.Provider value={{ setMobileMenu, mobileMenu }}>
      {children}
    </GlobalContext.Provider>
  );
};
