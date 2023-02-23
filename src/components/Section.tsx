import Definition from "./Definition";
import Synonym from "./Synonym";
import { Meaning } from "../types/types";

type SectionProps = {
  meaningItem: Meaning;
};

export default function Section({ meaningItem }: SectionProps) {
  const definitions = meaningItem.definitions.map((item) => {
    return <Definition definition={item.definition} example={item.example} />;
  });
  const synonyms = meaningItem.synonyms.map((item) => {
    return <Synonym synonym={item} />;
  });
  return (
    <>
      <div className="flex w-full items-center mb-4">
        <p className="italic text-lg dark:text-white pr-3">
          {meaningItem.partOfSpeech}
        </p>
        <hr className="h-px bg-gray-200 border-0 dark:bg-gray-100 grow"></hr>
      </div>
      <h2 className="dark:text-gray-500 text-left mb-2">Meaning</h2>
      {definitions}
      {synonyms}
    </>
  );
}
