import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'


const config =  {
    apiKey: "AIzaSyD9AxW5tJEJKHEA_VOLw_mhbg9fu7FC05I",
    authDomain: "crwn-dbl.firebaseapp.com",
    projectId: "crwn-dbl",
    storageBucket: "crwn-dbl.appspot.com",
    messagingSenderId: "663084343499",
    appId: "1:663084343499:web:addda4ff5101f61bf73b4e",
    measurementId: "G-6JS8NNYXEH"
  }

firebase.initializeApp(config)


export const auth =firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider()

provider.setCustomParameters({ prompt: 'select_account' })
export function signInWithGoogle(){
    auth.signInWithPopup(provider)
} 

export default firebase;

