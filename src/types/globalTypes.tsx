import React from "react";

// common object type
export interface CommonObjType {
    [key: string]: any
}

// Define the context type
export interface GlobalStateContextType {
    state: CommonObjType;
    setState: React.Dispatch<React.SetStateAction<CommonObjType>>;
}