import React, {createContext, ReactNode, useContext} from 'react'
import {Todo} from './todo';

export class Root {
    todoStore: Todo;

    constructor() {
        this.todoStore = new Todo();
    }
}

let store: Root;

const StoreContext = createContext<Root | undefined>(undefined);
StoreContext.displayName = "StoreContext";

function useRootStore() {
    const context = useContext(StoreContext);
    if (context === undefined) {
        throw new Error("useRootStore must be used within RootStoreProvider");
    }

    return context;
}

export function useTodoStore() {
    return useRootStore().todoStore;
}

export function RootStoreProvider({children}: { children: ReactNode }) {
    // only create root store once (store is a singleton)
    const root = store ?? new Root();

    return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}

export default Root;
