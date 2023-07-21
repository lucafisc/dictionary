import React, { useState, useEffect } from "react";
import { Auth } from "firebase/auth";
import {
  Firestore,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { Link } from "react-router-dom";

type FavoriteWordsListProps = {
  auth: Auth;
  db: Firestore;
};

const FavoriteWordsList: React.FC<FavoriteWordsListProps> = ({ auth, db }) => {
  const [favoriteWords, setFavoriteWords] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const user = auth.currentUser;

  useEffect(() => {
    if (!user) {
      setFavoriteWords([]);
      setIsLoading(false);
      return;
    }

    const favoriteWordsRef = collection(db, "users", user.uid, "favoriteWords");
    const favoriteWordsQuery = query(favoriteWordsRef);

    const fetchFavoriteWords = async () => {
      try {
        const querySnapshot = await getDocs(favoriteWordsQuery);
        const words: string[] = [];
        querySnapshot.forEach((doc) => {
          words.push(doc.data().word);
        });
        setFavoriteWords(words);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching favorite words:", error);
        setIsLoading(false);
      }
    };

    fetchFavoriteWords();

    return () => {
      setIsLoading(true);
    };
  }, [user, auth, db]);

  if (isLoading) {
    return <div className="dark:text-white ">Loading...</div>;
  }

  if (!user) {
    return <div className="dark:text-white ">Please sign in to see your favorite words.</div>;
  }

  if (favoriteWords.length === 0) {
    return <div className="dark:text-white ">No favorite words yet. Start adding some!</div>;
  }

  return (
	<div className="grid grid-cols-2 md:grid-cols-3 xs:grid-cols-1 gap-4">
	  {favoriteWords.map((word) => (
		<Link to={"/definition/" + word} key={word}>
		  <div className="flex rounded-xl hover:bg-purple-500 hover:dark:bg-purple-500 hover:text-white dark:bg-gray-800 bg-gray-50 active:bg-purple-600 active:text-white active:scale-95 transition-all">
			<h1 className="ml-3 mr-3 pt-5 pb-5 md:text-3xl text-2xl mb-1 font-bold dark:text-white overflow-hidden whitespace-nowrap truncate">
			  {word}
			</h1>
		  </div>
		</Link>
	  ))}
	</div>
  );
  
};

export default FavoriteWordsList;
