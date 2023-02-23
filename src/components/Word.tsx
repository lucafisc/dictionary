import { BiPlay } from "react-icons/bi";
import React, { useState, useEffect } from "react";
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
    <div className="flex justify-between items-center mb-8">
      <div className="flex flex-col items-start">
        <h1 className="text-3xl font-bold dark:text-white">{entry.word}</h1>
        <p className="text-purple-500">{entry.phonetic}</p>
      </div>
      <button
        onClick={handleClick}
        className={`w-12 h-12 bg-purple-300 text-purple-500 dark:bg-purple-500 dark:text-purple-300 rounded-full flex items-center justify-center ${
          !audio ? " dark:bg-gray-800 cursor-not-allowed" : ""
        }`}
        disabled={!audio}
      >
        <BiPlay className={`text-3xl ${!audio ? "text-gray-400" : ""}`} />
      </button>
    </div>
  );
}
