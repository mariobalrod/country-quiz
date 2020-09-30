import "styled-components";
import { Theme } from "./themes";

declare module "styled-components" {
  export type DefaultTheme = Theme;
}
