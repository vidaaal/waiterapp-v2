import 'styled-components';
import { defaultTheme } from '../styles/themes/default';

declare module 'styled-components' {
  type DefaultThemeType = typeof defaultTheme;

  export interface DefaultTheme extends DefaultThemeType { }
}