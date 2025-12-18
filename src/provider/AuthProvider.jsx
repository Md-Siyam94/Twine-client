import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile, } from "firebase/auth"
import auth from "../firebase_init";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const AuthContext = createContext()


const AuthProvider = ({ children }) => {
    const axiosPublic = useAxiosPublic()
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()


    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (userData) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userData)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false)
            if (currentUser) {
                const userInfo = {email: currentUser.email}
                axiosPublic.post('/jwt', userInfo)
                .then(res=>{
                    if(res.data?.token){
                        const token = res.data.token;
                        localStorage.setItem('access-token', token)
                    }
                })

            }
            else {
                localStorage.removeItem('access-token')
                setLoading(false)
            }
        })

        return () => {
            return unsubscribe()
        }
    }, [])

    const info = {
        user,
        loading,
        googleLogin,
        signIn,
        signUp,
        updateUserProfile,
        logOutUser,

    }


    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;