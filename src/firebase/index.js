// ! THIS COMPONENT WILL ACT AS A GROUP OF ALL THE FIREBASE FUNCTIONALITY
// ! IT WILL COME IN HANDY WHEN WE NEED TO IMPORT FIREBASE STUFF

import Firebase from "./firebaseConfig";
import FirebaseContext from "./firebaseContext";
import { withFirebase } from "../hoc/withFirebase";

export default Firebase;
export { FirebaseContext, withFirebase };
