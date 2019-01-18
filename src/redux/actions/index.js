import firebase, { authRef } from '../../config/firebase';
import { FETCH_USER } from './types';

export const fetchUser = () => dispatch => {
    authRef.onAuthStateChanged(user => {
        /**
         * If user allready is logged in, dipatch user object to
         * store, otherwise set user to null.
         */
        if(user) {
            dispatch({
                type: FETCH_USER,
                payload: user
            });
        } else {
            dispatch({
                type: FETCH_USER,
                payload: { displayName: 'Guest', uid: 'guestId', photoURL: 'guest' }
            });
        }
    });
}

export const signIn = (provider) => dispatch => {
    /**
     * Pass the correct provider to the signin method.
     * These are exported from firebase.js
     */
    authRef.signInWithPopup(provider)
        .then(res => { 
            //console.log(res.user)
            firebase.database().ref('users/' + res.user.uid).set({
                // For now the users name and email is persisted in the firebase database     
                // Here we can add more data from the user object if we wish to.
                username: res.user.displayName,
                email: res.user.email
            });
        })
        .catch(err => {
            console.log('error!!', err);
        });
}

export const signOut = () => dispatch => {
    authRef.signOut()
        .then(()=> {
            console.log('user signed out')
        })
        .catch(err => {
            console.log(err)
        });
}