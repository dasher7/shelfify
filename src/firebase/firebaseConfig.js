// ! THIS WILL BE THE MAIN CLASS
// ! WE CREATE THE FIREBASE CLASS INITIALIZING THE FIREBASE APP ITSELF
// ! WE ALSO CREATE ALL THE API IN ORDER TO COMMUNICATE WITH FIREBASE

import app from "firebase/app";
import "firebase/auth";
import "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGIN_SENDER,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
    this.auth = app.auth();
    this.db = app.database();
  }

  /**
   * * AUTH API
   */

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) => {
    this.auth.signInWithEmailAndPassword(email, password);
  };

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) => this.auth.updatePassword(password);

  /**
   * *END AUTH API
   */

  /**
   * * DATABASE API
   */

  // ? Save or retrieve a single a user
  user = (userId) => this.db.ref("users/" + userId);

  // ? Retrieve all users
  findAllUser = () => this.db.ref("users");

  // ? Save or retrieve one card
  card = (userId, category) => this.db.ref("cards/" + userId + "/" + category);

  // ? Retrieve all cards
  findAllCards = () => this.db.ref("cards/");

  // ? Save or retrieve one category
  category = (userId) => this.db.ref("category/" + userId);

  // ? Retrieve all categories of all users
  allCategoryForAllUsers = () => this.db.ref("category/");

  /**
   * * END DATABASE API
   */
}

export default Firebase;
