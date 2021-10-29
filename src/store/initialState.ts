const userPrefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
const userPrefers = window.matchMedia && window.matchMedia('(prefers-color-scheme: no-preference)').media !== "not all";
const type = userPrefersLight || userPrefers ? "light" : "dark"

export const initialState = {
  theme: type,
  input: "",
  error: "",
  user: null
}

