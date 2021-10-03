import { IState } from '../interfaces';
import { Types } from './types';

type Action = { type: Types}

export const reducer = (state: IState, { type }: Action) => {
  switch (type) {
    case Types.Dark: return { ...state, theme: "dark" };
    case Types.Light: return { ...state, theme: "light" };
    default: return state;
  }
}