import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from '../firebase-config'



export const authContext = createContext()


export const useAuth = () => {
    const context = useContext(authContext)
    if (!context) throw new Error("There is no auth provider");
    return context
}

export function AuthProvider({ children }) {


    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    //FUNCION DE REGISTRO
    const singup = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password)

    //FUNCION DE LOGEO
    const login = (email, password) => signInWithEmailAndPassword(auth, email, password)

    //FUNCION DE DESLOGEO
    const logout = () => signOut(auth)

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        });

        return () => unsubscribe();
    }, [])

    return (
        <authContext.Provider value={{ singup, login, user, logout, loading }}>
            {children}
        </authContext.Provider>
    )
}