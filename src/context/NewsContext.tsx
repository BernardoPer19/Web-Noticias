import React, { createContext, useState, ReactNode, Dispatch, SetStateAction, useContext } from "react";

interface ContextType {
    currentValue: string;
    setCurrentValue: Dispatch<SetStateAction<string>>;
}

interface ProviderProps {
    children: ReactNode;
}

// Crear el contexto
export const NewsContext = createContext<ContextType | undefined>(undefined);

// Proveedor del contexto
const NewsContextProvider: React.FC<ProviderProps> = ({ children }) => {
    const [currentValue, setCurrentValue] = useState<string>("");

    return (
        <NewsContext.Provider value={{ currentValue, setCurrentValue }}>
            {children}
        </NewsContext.Provider>
    );
};

// Hook personalizado para usar el contexto
export const useNewsContext = () => {
    const context = useContext(NewsContext);
    if (!context) {
        throw new Error("useNewsContext debe usarse dentro de un NewsContextProvider");
    }
    return context;
};

export default NewsContextProvider;
