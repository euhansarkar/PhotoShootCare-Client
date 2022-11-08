import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../../firebase/firebase.config';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // user with email and password (register)
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // user with email and password (login)
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // google signin
    const googleSignIn = (provider) => {
        return signInWithPopup(auth, provider);
    }

    const AuthInfo = {user, loading, createUser, logIn, googleSignIn}

    return (
        <AuthContext.Provider value={AuthInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;