export const elevate = '0 2px 10px rgba(0,0,0,.15)';
export const elevateHover = '0 5px 20px 0 rgba(0,0,0,.2)';

export interface ThemeShadows {
  elevate: string;
  elevateHover: string;
}

const shadows = {
  elevate,
  elevateHover,
};

export default shadows;
