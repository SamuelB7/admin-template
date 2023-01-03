import { createContext, useEffect, useState } from 'react'
import Cookies from 'js-cookie'
import firebase from '../../firebase/config'
import User from '../../model/User'
import route from 'next/router'

interface AuthContextProps {
    user?: User
    loading?: boolean
    loginGoogle?: () => Promise<void>
    logOut?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({})

async function normalizeUser(firebaseUser: firebase.User): Promise<User> {
    const token = await firebaseUser.getIdToken()
    return {
        uid: firebaseUser.uid,
        name: firebaseUser.displayName,
        email: firebaseUser.email,
        token,
        provider: firebaseUser.providerData[0].providerId,
        imageUrl: firebaseUser.photoURL
    }
}

function manageCookie(isLogged: boolean) {
    if(isLogged) {
        Cookies.set('admin-template-cookie', isLogged, {
            expires: 7
        })
    } else {
        Cookies.remove('admin-template-cookie')
    }
}

export function AuthProvider(props) {
    const [user, setUser] = useState<User>(null)
    const [loading, setLoading] = useState(true)

    async function sessionConfig(firebaseUser) {
        if(firebaseUser?.email) {
            const user = await normalizeUser(firebaseUser)
            setUser(user)
            manageCookie(true)
            setLoading(false)
            return user.email
        } else {
            setUser(null)
            manageCookie(false)
            setLoading(false)
            return false
        }
    }

    async function loginGoogle() {
        try {
            setLoading(true)
            const res = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            sessionConfig(res.user)
            route.push('/')
        } finally {
            setLoading(false)
        }
    }

    async function logOut() {
        try {
            setLoading(true)
            await firebase.auth().signOut()
            await sessionConfig(null)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if(Cookies.get('admin-template-cookie')) {
            const cancel = firebase.auth().onIdTokenChanged(sessionConfig)
            return () => cancel()
        } else {
            setLoading(false)
        }
    }, [])

    return (
        <AuthContext.Provider value={{
            user,
            loading,
            loginGoogle,
            logOut
        }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthContext