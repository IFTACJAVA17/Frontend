import firebase from 'firebase';

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};

firebase.initializeApp(config);

export function signInWithEmailAndPassword(email, password){
    firebase.auth().signInWithEmailAndPassword(email,password).then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    });
}

export function signInWithProvider(provider){
    firebase.auth().signInWithPopup(provider)
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    });
}

export function doSignOut() {
    firebase.auth.signOut()
}

export const googleProvider = new firebase.auth.GoogleAuthProvider();
export default firebase;