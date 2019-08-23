const border = {
  radii: [0, 4].map(n => `${n}px`)
};

export interface ThemeBorder {
  radii: string[];
}

export default border;
