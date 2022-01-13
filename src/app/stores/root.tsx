import React, { createContext, ReactNode, useContext } from 'react';
import { TodoStore } from './todo';

export class RootStore {
  todoStore: TodoStore;

  constructor() {
    this.todoStore = new TodoStore();
  }
}

let store: RootStore;

const StoreContext = createContext<RootStore | undefined>(undefined);
StoreContext.displayName = 'StoreContext';

function useRootStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error('useRootStore must be used within RootStoreProvider');
  }

  return context;
}

export function useTodoStore() {
  return useRootStore().todoStore;
}

export function RootStoreProvider({ children }: { children: ReactNode }) {
  // only create root store once (store is a singleton)
  const root = store ?? new RootStore();

  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}

export default RootStore;
