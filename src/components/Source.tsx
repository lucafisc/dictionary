import { FiExternalLink } from "react-icons/fi";

type SourceProps = {
  sourceUrls: string[];
};

export default function Info({ sourceUrls }: SourceProps): JSX.Element {
  return (
    <div className="flex items-start flex-col break-all">
      <hr className="h-px opacity-50 mb-6 mt-6 bg-gray-200 border-0 dark:bg-gray-100 w-full"></hr>
      <p className="md:text-xl  text-gray-500 underline text-left mb-2">Source</p>
      <a href={sourceUrls[0]} className="md:text-xl flex items-center dark:text-white">
        {sourceUrls[0]}
        <FiExternalLink className="md:text-xl  ml-2 text-gray-500" />
      </a>
    </div>
  );
}
