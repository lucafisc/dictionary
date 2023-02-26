import { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import { useDetectClickOutside } from 'react-detect-click-outside';

type FontProps = {
	setFontType: React.Dispatch<React.SetStateAction<string>>;
	fontType : string;
  };

export default function FontSelector({
	setFontType,
	fontType
  }: FontProps): JSX.Element {
	const [isMenuVisible, setIsMenuVisible] = useState(false);

	const toggleMenu = () => {
	  setIsMenuVisible((prevState) => !prevState);
	};
	const ref = useDetectClickOutside({ onTriggered: () =>  setIsMenuVisible(false)});

	const handleClick = (font : string) => {
		setFontType(font);
		setIsMenuVisible(false);
		localStorage.fontType = font;

	  };

  return (
<div ref={ref} className="relative ml-auto mr-4">
<button onClick={toggleMenu} data-dropdown-toggle="dropdownDefaultRadio" className="mb-2 text-gray-500 dark:text-white dark:bg-gray-800  bg-gray-50 hover:text-white hover:bg-purple-500 dark:hover:bg-purple-500 focus:outline-none focus:ring-0 font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center" type="button"><BiEditAlt/><svg className="w-4 h-4 ml-2" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>
<div className={`${isMenuVisible ? "" : "hidden"} absolute z-10 w-30 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600`}>
    <ul className="text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownRadioButton">
      <li>
        <div onClick={() => handleClick("font-serif")} className="flex items-center cursor-pointer p-2">
            <input checked={fontType === "font-serif" ? true : false} id="default-radio-1" type="radio" value="" name="default-radio" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
            <label htmlFor="default-radio-1" className=" cursor-pointer font-serif ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Serif</label>
        </div>
      </li>
      <li>
        <div onClick={() => handleClick("font-sans")} className="flex items-center cursor-pointer p-2">
            <input checked={fontType === "font-sans" ? true : false} id="default-radio-2" type="radio" value="" name="default-radio" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
            <label htmlFor="default-radio-2" className="cursor-pointer font-sans ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sans serif</label>
        </div>
      </li>
      <li>
        <div onClick={() => handleClick("font-mono")} className="flex items-center cursor-pointer p-2">
            <input checked={fontType === "font-mono" ? true : false} id="default-radio-3" type="radio" value="" name="default-radio" className="cursor-pointer w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"></input>
            <label htmlFor="default-radio-3" className="cursor-pointer font-mono ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Monospace</label>
        </div>
      </li>
    </ul>
</div>
</div>
  );
}
