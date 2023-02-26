import Definition from "./Definition";
import Synonym from "./Synonym";
import { Meaning } from "../types/types";
const { v4: uuidv4 } = require('uuid');

type SectionProps = {
  meaningItem: Meaning;
};

export default function Section({ meaningItem }: SectionProps) {
  const definitions = meaningItem.definitions.map((item) => {
    return <Definition key={uuidv4()} definition={item.definition} example={item.example} />;
  });
  const synonyms = meaningItem.synonyms.map((item) => {
    return <Synonym key={uuidv4()} synonym={item} />;
  });
  return (
    <>
      <div className="flex w-full items-center mb-6 mt-6">
        <p className="md:text-xl italic font-medium text-lg dark:text-white pr-3">
          {meaningItem.partOfSpeech}
        </p>
        <hr className="h-px opacity-50 bg-gray-200 border-0 dark:bg-gray-100 grow"></hr>
      </div>
      <h2 className="md:text-xl text-gray-500 text-left mb-2">Meaning</h2>
      {definitions}
      {meaningItem.synonyms[0] && (
        <div className="flex flex-wrap mt-3 mb03">
          <p className="md:text-xl text-gray-500">Synonyms</p> {synonyms}
        </div>
      )}
    </>
  );
}
