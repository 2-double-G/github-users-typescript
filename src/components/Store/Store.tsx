import { useReducer } from 'react';
import { StoreContext } from './StoreContext';
import { reducer } from '../../store/reducer';
import { initialState } from '../../store/initialState';

interface StoreProps {
  children: React.ReactNode | React.ReactChild
}

export const Store: React.FC<StoreProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch }}>{children}</StoreContext.Provider>
  )
};