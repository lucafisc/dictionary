import React, { useState, useEffect, ChangeEvent } from "react";
import "./App.css";
import Word from "./components/Word";
import Search from "./components/Search";
import Info from "./components/Info";
import Source from "./components/Source";
import Header from "./components/Header";
import { Entry, ErrorObj } from "./types/types";
import { fetchObj } from "./modules/fetchObj";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [entry, setEntry] = useState<Entry>();
  const [search, setSearch] = useState("");
  const [fontType, setFontType] = useState(localStorage.getItem('fontType') ?? "font-sans")
  const [darkMode, setDarkMode] = useState(
    localStorage.theme === "dark" ? true : false
  );
  const [entryError, setEntryError] = useState<ErrorObj>();

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      submitForm();
    }
  };

  const submitForm = () => {
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${search}`;
    fetchObj(url, setEntry, setEntryError);
  };

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.currentTarget.value);
  };

  useEffect(() => {
    if (darkMode) {
      localStorage.theme = "dark";
      document.documentElement.classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className={`${fontType} App bg-white dark:bg-black min-h-screen`}>
      <div className="p-5 mx-auto max-w-screen-md">
        <Header darkMode={darkMode} setDarkMode={setDarkMode} fontType={fontType} setFontType={setFontType}/>
        <Search
          search={search}
          handleChange={handleChange}
          handleKeyPress={handleKeyPress}
          submitForm={submitForm}
        />
        {entry && !entryError?.title && (
          <>
            <Word entry={entry} />
            <Info entry={entry} />
            <Source sourceUrls={entry.sourceUrls} />
          </>
        )}
		 {entryError?.title && (
          <>
            <ErrorPage err={entryError}/>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
