import { createContext } from "react";
import { IStore } from "../../interfaces";
import { initialState } from '../../store/initialState';

export const StoreContext = createContext<IStore>({
  state: initialState,
  dispatch: () => null
});