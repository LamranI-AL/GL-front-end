"use client";
import {
  useContext,
  createContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Define the type for the context value
interface ToggleSideBarContextType {
  isToggled: boolean;
  setIsToggled: Dispatch<SetStateAction<boolean>>;
}

// Create the context with a default value
const toggleSideBar = createContext<ToggleSideBarContextType | undefined>(
  undefined
);

// Define props for the wrapper component
interface ToggleSideBarWrapperProps {
  children: ReactNode;
}

// Create the context provider
export const ToggleSideBarWrapper: React.FC<ToggleSideBarWrapperProps> = ({
  children,
}) => {
  const [isToggled, setIsToggled] = useState<boolean>(false);

  return (
    <toggleSideBar.Provider value={{ isToggled, setIsToggled }}>
      {children}
    </toggleSideBar.Provider>
  );
};

// Create a custom hook for consuming the context
export const useToggleSideBar = (): ToggleSideBarContextType => {
  const context = useContext(toggleSideBar);

  if (!context) {
    throw new Error(
      "useToggleSideBar must be used within a ToggleSideBarWrapper"
    );
  }

  return context;
};
