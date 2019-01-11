import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import fbConfig from "./firebaseOAuth";

const config = {
  apiKey: fbConfig.REACT_APP_FIREBASE_API_KEY,
  authDomain: fbConfig.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: fbConfig.REACT_APP_FIREBASE_DATABASE_URL,
  projectId: fbConfig.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: fbConfig.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: fbConfig.REACT_APP_FIREBASE_MESSAGING_SENDER_ID
};
firebase.initializeApp(config);
const auth = firebase.auth();
const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true
});
export { auth, firebase, db };
