import {createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import auth from "../firebase_init";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()

    
    const googleLogin = ()=>{
        return signInWithPopup(auth, googleProvider)
    }


    const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOut =()=>{
        return signOut(auth)
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, (currentUser)=>{
            if(currentUser){
                setUser(currentUser);
                setLoading(false)
            }else{
                setLoading(false)
            }
        })

        return ()=> unSubscribe()
    },[])

    const info = {
        user,
        loading,
        googleLogin,
        signIn,
        signUp,
        logOut
    }


    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;