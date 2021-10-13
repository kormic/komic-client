import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        bodyBg: string;
        bodyColor: string;
        headerBg: string;
        footerBg: string;
        accent: string;
        articleColor: string;
        subtitleColor: string;
    }
}