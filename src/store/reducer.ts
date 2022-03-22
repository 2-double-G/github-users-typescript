import { IState, IUser } from '../interfaces';
import { Types } from './types';

export type Action = {
  type: Types
  user?: IUser | undefined | null
  input?: string | undefined
  error?: string | undefined | unknown
}

export const reducer = (state: IState, { type, input, user, error }: Action) => {
  switch (type) {
    case Types.Dark: return { ...state, theme: "dark" };
    case Types.Light: return { ...state, theme: "light" };
    case Types.SetInput: return { ...state, input };
    case Types.GetUserSuccess: return { ...state, user, error: "" }
    case Types.GetUserError: return { ...state, user: null, error }
    default: return state;
  }
}