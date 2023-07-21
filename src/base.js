import { firebaseConfig } from "./firebaseConfig";
import * as firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp(firebaseConfig);

export default app;