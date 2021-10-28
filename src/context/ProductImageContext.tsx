import {
  useContext,
  createContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

interface ICurrentImageState {
  name: string;
  imagePath: string;
  delay?: number;
}

interface IProductImageProviderValue {
  currentImage: ICurrentImageState;
  setCurrentImage: Dispatch<SetStateAction<ICurrentImageState>>;
}

const INITIAL_VALUE: IProductImageProviderValue = {
  currentImage: {
    name: "leftSectionImage",
    imagePath: "/leftSectionImage.png",
    delay: 0,
  },
  setCurrentImage: () => {},
};

const ProductImageContext = createContext(INITIAL_VALUE);

function ProductImageProvider({ children }: { children: ReactNode }) {
  const [currentImage, setCurrentImage] = useState(INITIAL_VALUE.currentImage);
  return (
    <ProductImageContext.Provider value={{ currentImage, setCurrentImage }}>
      {children}
    </ProductImageContext.Provider>
  );
}

function useProductImage() {
  const context = useContext(ProductImageContext);
  if (context === undefined) {
    console.error("useProductImage must be used within a ProductImageContext");
  }
  return context;
}

export { ProductImageProvider, useProductImage };
