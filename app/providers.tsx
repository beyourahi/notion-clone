"use client";

import { PropsWithChildren, createContext } from "react";

interface ContextData {}

export const Context = createContext<ContextData>({} as ContextData);

export const Providers = ({ children }: PropsWithChildren) => {
    return <Context.Provider value={{}}>{children}</Context.Provider>;
};
