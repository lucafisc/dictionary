import { HiMoon } from "react-icons/hi";
import { TiSortAlphabetically } from "react-icons/ti";
import FontSelector from "./FontSelector"

type HeaderProps = {
  darkMode: boolean;
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  fontType : string;
  setFontType: React.Dispatch<React.SetStateAction<string>>;
};

export default function Header({
  darkMode,
  setDarkMode,
  fontType,
  setFontType
}: HeaderProps): JSX.Element {
  const handleClick = () => {
    setDarkMode((prevMode) => !prevMode);
  };
  return (
    <div className="h-12 mb-4 flex items-center justify-between">
      <TiSortAlphabetically className="text-5xl text-gray-500 dark:text-gray-200" />
	<FontSelector setFontType={setFontType} fontType={fontType}/>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          onChange={handleClick}
          checked={darkMode ? true : false}
          type="checkbox"
          value=""
          className="sr-only peer"
        ></input>
        <div className="w-11 h-6 mr-4 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-purple-500"></div>
        <HiMoon className="text-xl text-gray-500 dark:text-gray-200" />
      </label>
    </div>
  );
}
