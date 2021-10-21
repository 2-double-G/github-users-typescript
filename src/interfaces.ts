export interface IState {
  theme: string
  input?: string | undefined
  user?: IData | undefined | null
  error?: string | undefined | unknown
}

export interface IStore {
  state: IState
  dispatch: React.Dispatch<any>
}

export interface IData {
  [key: string]: any
}

export interface IUser {
  name: string | null
  login: string
  html_url: string
  created_at: string
  bio: string | null,
  avatar_url: string | null
  public_repos: number,
  followers: number
  following: number
  location: string | null
  blog: string | null
  twitter_username: string | null
  company: string | null
}