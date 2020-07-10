import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCPl5PSunYnc83UcBRyHudgyK5TJ95AETo",
    authDomain: "crwn-db-e8698.firebaseapp.com",
    databaseURL: "https://crwn-db-e8698.firebaseio.com",
    projectId: "crwn-db-e8698",
    storageBucket: "crwn-db-e8698.appspot.com",
    messagingSenderId: "539010757209",
    appId: "1:539010757209:web:979a9408c60745036c7748"
  };

export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`)
   const snapShot = await userRef.get();

  if(!snapShot.exists){
    const { displayName, email} = userAuth;
    const createdAt = new Date();


    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
        console.log('error creating user', error.message)
    }
  }

  return userRef;
}


firebase.initializeApp(config);


export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;
