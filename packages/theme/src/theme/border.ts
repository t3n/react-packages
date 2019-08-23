const border = {
  radii: [0, 4].map(n => `${n}px`)
};

export interface ThemeBorderInterface {
  radii: string[];
}

export default border;
