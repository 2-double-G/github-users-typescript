interface IObject {
  [key: string]: string
}

interface IMode {
  [key: string]: {
    [key: string]: IObject
  }
}

export const mode: IMode = {
  dark: {
    card: {
      bg: "rgb(31, 42, 72)"
    },
    layout: {
      bg: "rgb(20, 28, 47)"
    },
    userSearch: {
      color: "white"
    },
    header: {
      color: "white"
    },
    themeButton: {
      bgHover: "rgba(255, 255, 255, 0.2)"
    },
  },
  light: {
    card: {
      bg: "rgb(254, 254, 254)",
      bs: "2px 2px 10px rgb(226, 229, 248)"
    },
    layout: {
      bg: "rgb(245, 248, 255)"
    },
    userSearch: {
      color: "rgb(80, 107, 161)"
    },
    header: {
      color: "rgb(20, 28, 47)"
    },
    themeButton: {
      colorHover: "rgb(20, 28, 47)"
    },
  },
};