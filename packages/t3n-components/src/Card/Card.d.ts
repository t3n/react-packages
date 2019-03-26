/// <reference types="react" />
interface CardProps {
    rounded?: boolean;
    big?: boolean;
    elevate?: boolean;
    dashed?: boolean;
    href?: string | false;
    color?: string;
}
declare const Card: {
    ({ href, ...props }: CardProps): JSX.Element;
    defaultProps: {
        rounded: boolean;
        big: boolean;
        elevate: boolean;
        dashed: boolean;
        href: string;
        color: string;
        width: number;
    };
};
export default Card;
