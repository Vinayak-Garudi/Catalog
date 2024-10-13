"use client"
import { CommonObjType, GlobalStateContextType } from "@/types/globalTypes";
import { createContext, ReactNode, useContext, useState } from "react";

// Create a context with a default value of undefined
const GlobalStateContext = createContext<GlobalStateContextType | undefined>(undefined);

// Create a provider component
export const GlobalStateProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [state, setState] = useState<CommonObjType>({}); // Initial global state

    return (
        <GlobalStateContext.Provider value={{ state, setState }}>
            {children}
        </GlobalStateContext.Provider>
    );
};

// Custom hook to use the global state
export const useGlobalState = (): GlobalStateContextType => {
    const context = useContext(GlobalStateContext);
    if (!context) {
        throw new Error('useGlobalState must be used within a GlobalStateProvider');
    }
    return context;
};