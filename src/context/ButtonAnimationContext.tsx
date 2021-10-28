import {
  useContext,
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface IButtonProviderValue {
  isVisible: boolean;
  setVisibility: Dispatch<SetStateAction<boolean>>;
}

const INITIAL_VALUE: IButtonProviderValue = {
  isVisible: true,
  setVisibility: () => {},
};

const ButtonAnimationContext = createContext(INITIAL_VALUE);

function ButtonProvider({ children }: { children: ReactNode }) {
  const [isVisible, setVisibility] = useState(true);
  return (
    <ButtonAnimationContext.Provider value={{ isVisible, setVisibility }}>
      {children}
    </ButtonAnimationContext.Provider>
  );
}

function useButtonAnimation() {
  const context = useContext(ButtonAnimationContext);
  if (context === undefined) {
    console.error("useButtonAnimation must be used within a CountProvider");
  }
  return context;
}

export { ButtonProvider, useButtonAnimation };
