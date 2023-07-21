import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Search from "./components/Search";
import WordPage from "./components/WordPage";
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import { FirebaseConfig } from "./FirebaseConfig";
  
const BlankComponent = () => null;

function App() {
  const [search, setSearch] = useState("");
  const [fontType, setFontType] = useState(
    localStorage.getItem("fontType") ?? "font-sans"
  );
  const [darkMode, setDarkMode] = useState(
    localStorage.theme === "dark" ? true : false
  );

  const handleKeyPress: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      submitForm();
    }
  };

  const navigate = useNavigate();
  const submitForm = () => {
    navigate(`/definition/${search}`);
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
        <Header
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          fontType={fontType}
          setFontType={setFontType}
        />
        <Search
          search={search}
          handleChange={handleChange}
          handleKeyPress={handleKeyPress}
          submitForm={submitForm}
        />
			  <Routes>
		<Route path="/" element={<BlankComponent />} />
          <Route path="/definition/:search" element={<WordPage setSearch={setSearch} />} />
          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
