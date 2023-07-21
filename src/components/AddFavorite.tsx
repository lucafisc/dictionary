import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { useState, useEffect } from "react";
import { addFavoriteWord } from "../modules/firestore";
import { Auth } from "firebase/auth";
import { Firestore } from "firebase/firestore";
import { collection, query, where, onSnapshot } from "firebase/firestore";

type AddFavoriteProps = {
  word: string | undefined;
  auth: Auth;
  db: Firestore;
};

export default function AddFavorite({ word, auth, db }: AddFavoriteProps) {
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (!word) return;

    const user = auth.currentUser;
    if (!user) return;

    const favoriteWordsRef = collection(db, "users", user.uid, "favoriteWords");
    const favoriteWordsQuery = query(
      favoriteWordsRef,
      where("word", "==", word)
    );

    const unsubscribe = onSnapshot(favoriteWordsQuery, (snapshot) => {
      const isWordFavorite = !snapshot.empty;
      setIsFavorite(isWordFavorite);
    });

    return () => unsubscribe();
  }, [word, auth, db]);
	
  if (!word) return null;
  return (
    <button
      onClick={() => addFavoriteWord(word, auth, db)}
      className="active:scale-95 transition-all hover:bg-purple-500 dark:hover:bg-purple-500 hover:text-white dark:hover:text-black dark:bg-opacity-30 md:w-16 md:h-16 w-12 h-12  text-purple-500  dark:text-purple-500 bg-opacity-50 rounded-full flex items-center justify-center mr-2"
    >
      {isFavorite ? (
        <AiFillStar className={`md:text-5xl text-3xl`} />
      ) : (
        <AiOutlineStar className={`md:text-5xl text-3xl`} />
      )}
    </button>
  );
}
