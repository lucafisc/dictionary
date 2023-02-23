export type Definition = {
  definition: string;
  example?: string;
};

export type Meaning = {
  partOfSpeech: string;
  synonyms: string[];
  definitions: Definition[];
};

export type Entry = {
  word?: string;
  phonetic?: string;
  phonetics?: { audio: string }[];
  meanings: Meaning[];
}