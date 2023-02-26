import { Definition as DefinitionProps } from "../types/types";

export default function Definition({ definition, example }: DefinitionProps) {
  return (
    <div className="w-full break-all">
      <ul className="list-disc marker:text-purple-500 pl-4 mb-3">
        <li className="md:text-xl  dark:text-white text-left">{definition}</li>
      </ul>
      {example && (
        <p className="md:text-xl  text-gray-500 text-left pl-4 mb-3">
          "{example}"
        </p>
      )}
    </div>
  );
}
