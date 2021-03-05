import firebase from "firebase";
const config ={
    apiKey: "AIzaSyAwhuNXcnO9rY3y2JcnVp-uE_u4LgpARcw",
    authDomain: "exam-alteration.firebaseapp.com",
    databaseURL: "https://exam-alteration-default-rtdb.firebaseio.com",
    projectId: "exam-alteration",
    storageBucket: "exam-alteration.appspot.com",
    messagingSenderId: "804395169160",
    appId: "1:804395169160:web:c68e21284c352f0584b63d",
    measurementId: "G-MHRZL7YPR9"
};
//import firebase from "firebase";
//const firebaseApp =firebase.initializeApp({
//});
firebase.initializeApp(config);
export const auth =firebase.auth();
export const db =firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => {
  auth.signInWithPopup(googleProvider).then((res) => {
    console.log(res.user)
  }).catch((error) => {
    console.log(error.message)
  })
}

export default firebase;
