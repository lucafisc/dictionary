import React, { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import Word from "./components/Word";
import Search from "./components/Search";
import Info from "./components/Info";
import { Entry } from "./types/types";
import { fetchObj } from "./modules/fetchObj";

function App() {
  const [entry, setEntry] = useState<Entry>();
  const [search, setSearch] = useState("");

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      submitForm();
    }
  };

  const submitForm = () => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
    fetchObj(url, setEntry);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.currentTarget.value);
  };

  return (
    <div className="App bg-white dark:bg-black">
      <div className="p-3 mx-auto max-w-screen-md">
        <Search
          search={search}
          handleChange={handleChange}
          handleKeyPress={handleKeyPress}
          submitForm={submitForm}
        />
        {entry && (
          <>
            <Word entry={entry} />
            <Info entry={entry} />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
