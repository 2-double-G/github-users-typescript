export interface IState {
  theme: string
}

export interface IStore {
  state: IState
  dispatch: React.Dispatch<any>
}