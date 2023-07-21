import { HiMoon } from "react-icons/hi";
import { TiSortAlphabetically } from "react-icons/ti";
import FontSelector from "./FontSelector"

type HeaderProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  fontType : string;
  setFontType: React.Dispatch<React.SetStateAction<string>>;
};

