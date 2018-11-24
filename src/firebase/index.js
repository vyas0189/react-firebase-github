import firebase from "firebase";
const config = {
  apiKey: "AIzaSyBFRL-7YJqamh9YUIdqgUhthz8-z7SWkJ0",
  authDomain: "react-github-b56c2.firebaseapp.com",
  databaseURL: "https://react-github-b56c2.firebaseio.com",
  projectId: "react-github-b56c2",
  storageBucket: "react-github-b56c2.appspot.com",
  messagingSenderId: "111133394693"
};
firebase.initializeApp(config);
const auth = firebase.auth();
export { auth, firebase };
