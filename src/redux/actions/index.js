import { authRef, userTracker, usersRef  } from '../../config/firebase';
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
            const user = res.user;
            usersRef(user.uid).update({
                // Here we can add more data from the user object if we wish to.
                username: user.displayName,
                email: user.email,
                avatar: user.photoURL
            });
            userTracker.child(user.uid).set({ user: user.displayName });

        })
        .catch(err => {
            console.log('error!!', err);
        });
}

export const signOut = (user) => dispatch => {
    userTracker.child(user.uid).remove();
    authRef.signOut()
        .then(()=> {
            console.log('user signed out')
        })
        .catch(err => {
            console.log(err)
        });
}