/// <reference types="react" />
import { TextColorProps } from 'styled-system';
interface AvatarImageProps {
    src: string;
    size?: string;
    className?: string;
}
interface AvatarProps extends AvatarImageProps {
    label?: string;
    textColor?: TextColorProps['color'];
}
declare const StyledAvatar: import("styled-components").StyledComponent<{
    ({ label, className, ...rest }: AvatarProps): JSX.Element;
    defaultProps: {
        label: string;
    };
}, any, AvatarProps, never>;
export default StyledAvatar;
