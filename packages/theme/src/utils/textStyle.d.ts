interface Theme {
    textStyles: Record<string, any>;
    [key: string]: any;
}
declare const composeTextStyle: ({ textStyle, theme, }: {
    textStyle: string;
    theme: Theme;
}) => any[];
export default composeTextStyle;
