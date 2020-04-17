import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config =
{
    apiKey: "AIzaSyD73TilxAbLkizIAPlhorKWVBbw-RQWINw",
    authDomain: "e-shop-cc13b.firebaseapp.com",
    databaseURL: "https://e-shop-cc13b.firebaseio.com",
    projectId: "e-shop-cc13b",
    storageBucket: "e-shop-cc13b.appspot.com",
    messagingSenderId: "348597366921",
    appId: "1:348597366921:web:71c6a1bb9cb0ed43a25658",
    measurementId: "G-852RX3R3BC"
  };

  firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {

  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {

  const { displayName, email} = userAuth;
  const createdAt = new Date();

  try {
    
    await userRef.set({
    displayName,
    email,
    createdAt,
    ...additionalData
    });

  } catch (error){
      console.log('error creating user', error.message);
    } 
  }
  return userRef;
};

    
export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({  prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;