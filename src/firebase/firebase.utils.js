import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCdAsXZER3ZuxvIdDUqYgBrNdogjowBk6M",
  authDomain: "crwn-clothing-a78f2.firebaseapp.com",
  databaseURL: "https://crwn-clothing-a78f2.firebaseio.com",
  projectId: "crwn-clothing-a78f2",
  storageBucket: "crwn-clothing-a78f2.appspot.com",
  messagingSenderId: "833245262217",
  appId: "1:833245262217:web:625e0fd3a59b595b757158"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth()
export const firestore = firebase.firestore()

export const createUserProfileDocumnet = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShopt = await userRef.get()
  // not exist
  if (!snapShopt.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date();
    try {

      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })

    } catch (err) {
      console.log(`Error on creating user ${err.message}`)
    }
  }

  return userRef
}

// sign in with Google

// const provider = new firebase.auth.GoogleAuthProvider()
// provider.setCustomParameters({ prompt: 'select_account' })
// export const signInWithGoogle = firebase.auth().signInWithPopup(provider).then(function (result) {
//  console.log(' result.user',  result.user)
// }).catch(function (error) {
//   console.log(`Error on sign in with google ${error.message}`)
// });

export default firebase