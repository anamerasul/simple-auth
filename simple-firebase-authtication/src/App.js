import './App.css';
import { app } from './firebase.init';
import { getAuth, GoogleAuthProvider, GithubAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useState } from 'react'
const auth = getAuth(app)

function App() {

  const [user, setUser] = useState({})
  const googleprovider = new GoogleAuthProvider();
  const githubprovider = new GithubAuthProvider();


  const handleGoogleSignIn = () => {
    signInWithPopup(auth, googleprovider)
      .then(result => {
        const user = result.user
        setUser(user)
        console.log(user)

      })
      .catch(error => {
        console.error('error', error)
      })
  }
  const handleGithubSignIn = () => {
    signInWithPopup(auth, githubprovider)
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
  const handleGithubSignOut = () => {
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
        user.uid ?
          <div>
            <button onClick={handleGoogleSignOut} className="rounded-full bg-orange-200 px-4 py-4 mt-12">Google sign out</button>
            <button onClick={handleGithubSignOut} className="rounded-full bg-orange-200 px-4 py-4 mt-12">github sign out</button>
          </div> :
          <div>
            <button onClick={handleGoogleSignIn} className="rounded-full bg-orange-200 px-4 py-4 mt-12">Google sign in</button>
            <button onClick={handleGithubSignIn} className="rounded-full bg-orange-200 px-4 py-4 mt-12">Github sign in</button>


          </div>

      }


      <h2>{user.displayName}</h2>
      <h2>{user.email}</h2>
      <img src={user.photoURL} alt="" />


    </div>
  );
}

export default App;
