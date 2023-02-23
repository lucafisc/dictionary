import { Definition as DefinitionProps } from "../types/types";

export default function Definition({ definition, example }: DefinitionProps) {
  return (
    <>
      <ul className="list-disc marker:text-purple-500 pl-4 mb-2">
        <li className="dark:text-white text-left">{definition}</li>
      </ul>
      {example && (
        <p className="dark:text-gray-500 text-left pl-4 mb-2">"{example}"</p>
      )}
    </>
  );
}
