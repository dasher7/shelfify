import app from "firebase/app";
import dotenv from "dotenv";

dotenv.config();

const firebaseConfig = {
  apiKey: process.env.SHELFIFY_FIREBASE_API_KEY,
  authDomain: process.env.SHELFIFY_FIREBASE_AUTH,
  databaseURL: process.env.SHELFIFY_FIREBASE_DATABASE,
  projectId: process.env.SHELFIFY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.SHELFIFY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.SHELFIFY_FIREBASE_MESSAGIN_SENDER,
  appId: process.env.SHELFIFY_FIREBASE_APP_ID,
  measurementId: process.env.SHELFIFY_FIREBASE_MEASUREMENT_ID
};

class Firebase {
  constructor() {
    app.initializeApp(firebaseConfig);
  }
}

export default Firebase;
