import { push } from 'connected-react-router'
import {auth, firestore, Timestamp} from '../../firebase'
import { signInAction, signOutAction } from './actions'

export const listenAuthState = () => {
    return async (dispatch) => {
        return auth.onAuthStateChanged((user) => {
            if (user) {
                const uid = user.uid
                firestore.collection('users').doc(uid).get()
                .then((snapshot) => {
                    const data = snapshot.data()
                    dispatch(signInAction({
                        isSignedIn: true,
                        role: data.role,
                        uid: uid,
                        username: data.username,
                    }))
                })
            } else {
                dispatch(push('/signin'))
            }
        })
    }
}

export const resetPassword = (email) => {
    return async (dispatch) => {
        return auth.sendPasswordResetEmail(email)
        .then(() => {
            alert('リセットメールを送信しました。')
            dispatch(push('/signin'))
        }).catch(() => {
            alert('パスワードリセットに失敗しました。')
        })
    }
}

export const signUp = (username, email, password) => {
    return async (dispatch) => {
        return auth.createUserWithEmailAndPassword(email, password)
        .then((result) => {
            const user = result.user
            if (user) {
                const uid = user.uid
                const timestamp = Timestamp.now()
                const userInitialData = {
                    created_at: timestamp,
                    updated_at: timestamp,
                    username: username,
                    email: email,
                    uid: uid,
                    role: "customer",
                }
            firestore.collection('users').doc(uid).set(userInitialData)
            .then(() => {
                dispatch(push('/'))
                })
            }
        })
    }
}

export const signIn = (email, password) => {
    return async (dispatch) => {
        return auth.signInWithEmailAndPassword(email, password)
        .then((result) => {
            const user = result.user
            if (user) {
                const uid = user.uid
                firestore.collection('users').doc(uid).get()
                .then((snapshot) => {
                    const data = snapshot.data()
                    dispatch(signInAction({
                        isSignedIn: true,
                        role: data.role,
                        uid: uid,
                        username: data.username,
                    }))
                    dispatch(push('/'))
                    })
            }
        })
    }
}

export const signOut = () => {
    return async (dispatch) => {
        return auth.signOut()
        .then(() => {
            dispatch(signOutAction())
            dispatch(push('/signin'))
        })
    }
}