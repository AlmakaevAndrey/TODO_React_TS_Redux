import 'styled-components';
import { ThemeType } from '../../components/ThemeSwitch/Themes';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
