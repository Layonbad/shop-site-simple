import firebase from "firebase/compat";
import "firebase/firestore";

// web apps firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAih-uCmNp1X1STyOFljsC8ME3KETDt2m0",
  authDomain: "shop-site-simple.firebaseapp.com",
  projectId: "shop-site-simple",
  storageBucket: "shop-site-simple.appspot.com",
  messagingSenderId: "1068109486526",
  appId: "1:1068109486526:web:f8e95af4d355812732c1ef"
};

firebase.initializeApp(firebaseConfig);

export default firebase;
