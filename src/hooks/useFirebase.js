import { useEffect, useState } from "react";
import initializeFirebase from  '../Pages/Firebase/firebase.init'
import axios from 'axios';
import { getAuth, createUserWithEmailAndPassword ,signOut,
      onAuthStateChanged , signInWithEmailAndPassword ,
      signInWithPopup, GoogleAuthProvider ,updateProfile 


} from "firebase/auth";


initializeFirebase();


const useFirebase = () =>{
    const auth = getAuth();

const [user, setuser] = useState({});
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
const [admin, setAdmin] = useState(false);
const googleProvider =   new GoogleAuthProvider();

  
    useEffect(()=>{
      const uri = `https://lit-wildwood-89046.herokuapp.com/users/${user.email}`;
      fetch(uri)
      .then(res => res.json())
      .then(data => setAdmin(data.admin))
    },[user])
  
const googleSignIn = (history, location) =>{
  setLoading(true)
  signInWithPopup(auth, googleProvider)
  .then((result) => {
    
    const user = result.user;
    setError("")
    saveUser(user.email, user.displayName, 'PUT')
    const destination = location?.state?.from || '/dashboard' ;
    history.replace(destination)
    
  }).catch((error) => {
    
    setError(error.message);
  }).finally(()=>setLoading(false));
}

const registerUser = (email, password, name, history) =>{
    setLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    
    .then((userCredential) => {

      const newuser = {email, displayName: name};
      setuser(newuser)
       updateProfile(auth.currentUser, {
        displayName: name}).then(() => {
          
          saveUser(email,name, 'POST');
        
      }).catch((error) => {
        setError(error.message)
      });

      history.push('/dashboard')
   
       
       setError("");
     
    })
    .catch((error) => {
      setError(error.message);
     
    }).finally(()=>setLoading(false))
    ;
} 
const loginUser = (email, password, history, location) =>{
    setLoading(true)
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    
    const destination = location?.state?.from || '/dashboard' ;
    history.replace(destination)
    setError('');
    
  })
  .catch((error) => {
    setError(error.message);
  }).finally(()=>setLoading(false))
  ;
} 
useEffect( ()=>{
  const unSubscribe =   onAuthStateChanged(auth, (user) => {
        if (user) {
          setuser(user)
        } else {
          
            setuser({})
        } 
        setLoading(false)
      });

      return ()=> unSubscribe;
} , [])  


 
 const saveUser = (email, name, method) =>{
 
  const newUser = {email: email, displayName: name};
   
  if(method==='POST')
  {
    axios.post('https://lit-wildwood-89046.herokuapp.com/users', newUser)
    
  }
  else
  {
    axios.put('https://lit-wildwood-89046.herokuapp.com/users', newUser)
   
  }
  
  
 } 


  
const logOut = () =>{
    signOut(auth).then(() => {
        
      }).catch((error) => {
        setError(error.message);
      }).finally(()=>setLoading(false))
      ;
}
  
return {
    user, 
    registerUser,
    logOut,
    loginUser,
    loading,
    error,
    googleSignIn,
    admin
}

}

export default useFirebase;