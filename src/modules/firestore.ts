import firebase from 'firebase/app';
import { Auth } from "firebase/auth";
import { Firestore, collection, setDoc, doc, deleteDoc, getDocs, query, where } from 'firebase/firestore';

export const addFavoriteWord = async (word: string, auth: Auth, db: Firestore) => {
	const user = auth.currentUser;
	if (!user) return;
  
	const favoriteWordsRef = collection(db, 'users', user.uid, 'favoriteWords');
  
	// Check if the word already exists in the user's favoriteWords collection
	const querySnapshot = await getDocs(query(favoriteWordsRef, where('word', '==', word)));
	const favoriteWordDocs = querySnapshot.docs;
  
	if (favoriteWordDocs.length === 0) {
	  // The word is not favorited yet, so add it to favorites
	  await setDoc(doc(favoriteWordsRef, word), { word });
	} else {
	  // The word is already favorited, so remove it from favorites
	  const favoriteWordId = favoriteWordDocs[0].id;
	  await deleteDoc(doc(favoriteWordsRef, favoriteWordId));
	}
  };