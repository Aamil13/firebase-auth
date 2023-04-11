import {createContext, useContext, useEffect , useState} from 'react';
import { auth } from '../firebase';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    GoogleAuthProvider,
    signInWithPopup
 } from "firebase/auth";


const AuthContext = createContext();

export function AuthContextProvider({children}){
    
    const [ user,setUser] = useState({});

        function googleSignIn(){
            const Provider = new GoogleAuthProvider();
           return signInWithPopup(auth,Provider)
        }

     function signUp(email , password){
       return createUserWithEmailAndPassword(auth,email,password)
       
    }

     function logIn(email ,password){
        return signInWithEmailAndPassword(auth,email,password)
    }

    function logout(){
        return signOut(auth)
    }
    
    useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
        setUser(currentUser);
        
      })
    
      return () => {
        unsubscribe();
      }
    })
    


    return (
        <AuthContext.Provider value={{googleSignIn,signUp,logIn,logout ,user}} >
            {children}
        </AuthContext.Provider>
    )
}


export function UserAuth(){
    return useContext(AuthContext)
}