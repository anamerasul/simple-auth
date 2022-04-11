import './App.css';
import { app } from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react'
const auth = getAuth(app)

function App() {

  const [user, setUser] = useState({})
  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        const user = result.user
        setUser(user)
        console.log(user)

      })
      .catch(error => {
        console.error('error', error)
      })
  }

  const handleGoogleSignOut = () => {
    signOut(auth)
      .then(() => {
        setUser({})

      })
      .catch(error => {
        setUser({})
      })
  }

  console.log(user.photoURL)

  return (


    <div className="App">

      {
        user.uid ? <button onClick={handleGoogleSignOut} className="rounded-full bg-orange-200 px-4 py-4 mt-12">Google sign out</button> : <button onClick={handleGoogleSignIn} className="rounded-full bg-orange-200 px-4 py-4 mt-12">Google sign in</button>

      }


      <h2>{user.displayName}</h2>
      <h2>{user.email}</h2>
      <img src={user.photoURL} alt="" />


    </div>
  );
}

export default App;
