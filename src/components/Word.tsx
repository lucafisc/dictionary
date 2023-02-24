import { BiPlay } from "react-icons/bi";
import { useState, useEffect } from "react";
import { Entry } from "../types/types";

type WordProps = {
  entry: Entry;
};

export default function Word({ entry }: WordProps): JSX.Element {
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>();
  useEffect(() => {
    setAudio(undefined);
    if (!entry.phonetics) return;
    else {
      for (let i: number = 0; i < entry.phonetics.length; i++) {
        if (entry.phonetics[i].audio) {
          const ad = new Audio(entry.phonetics[i].audio);
          setAudio(ad);
          break;
        }
      }
    }
  }, [entry]);

  function handleClick() {
    if (!audio) return;
    audio.play();
  }

  return (
    <div className="flex justify-between items-center">
      <div className="flex flex-col items-start">
        <h1 className="text-4xl mb-1 font-bold dark:text-white">
          {entry.word}
        </h1>
        <p className="font-bold text-purple-500">{entry.phonetic}</p>
      </div>
      <button
        onClick={handleClick}
        className={`dark:bg-opacity-30 w-12 h-12  text-purple-500  dark:text-purple-500 bg-opacity-50 rounded-full flex items-center justify-center ${
          !audio ? "bg-gray-400 dark:bg-gray-500 cursor-not-allowed" : "dark:bg-purple-500 bg-purple-300"
        }`}
        disabled={!audio}
      >
        <BiPlay className={`text-3xl ${!audio ? "text-gray-50 dark:text-gray-400" : ""}`} />
      </button>
    </div>
  );
}
