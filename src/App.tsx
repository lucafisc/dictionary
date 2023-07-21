import React, { useState, useEffect } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import Search from "./components/Search";
import WordPage from "./components/WordPage";
import Header from "./components/Header";
import ErrorPage from "./components/ErrorPage";
import SignInOut from "./components/SignInOut";
import FavoriteWordsList from "./components/FavoriteWordsList";
import { FirebaseConfig } from "./FirebaseConfig";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { getFirestore, collection } from "firebase/firestore";

// Initialize Firebase
const firebaseApp = initializeApp(FirebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

const BlankComponent = () => null;

// Your web app's Firebase configuration

// Initialize Firebase
const firebaseApp = initializeApp(FirebaseConfig);

const auth = getAuth(firebaseApp);

function SignIn() {

	const signInWithGoogle = () => {
	  const provider = new GoogleAuthProvider();
	  signInWithPopup(auth, provider);
	}
  
	return (
	  <>
		<button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
		<p>Do not violate the community guidelines or you will be banned for life!</p>
	  </>
	)
  
  }

  function SignOut() {
	return auth.currentUser && (
	  <button className="sign-out" onClick={() => auth.signOut()}>Sign Out</button>
	)
  }
  
function App() {
  const [user] = useAuthState(auth);
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
          user={user}
          auth={auth}
        />
        <Search
          search={search}
          handleChange={handleChange}
          handleKeyPress={handleKeyPress}
          submitForm={submitForm}
        />
        <Routes>
          <Route path="/" element={<BlankComponent />} />
          <Route
            path="/definition/:search"
            element={<WordPage setSearch={setSearch} auth={auth} db={db} />}
          />
          <Route path="/error" element={<ErrorPage />} />
          <Route
            path="/signin"
            element={<SignInOut user={user} auth={auth} />}
          />
          <Route
            path="/favorites"
            element={<FavoriteWordsList auth={auth} db={db} />}
          />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
