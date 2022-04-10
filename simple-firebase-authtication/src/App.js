import './App.css';
import { app } from './firebase.init';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const auth = getAuth(app)

function App() {

  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    console.log('working')

    signInWithPopup(auth, provider)
      .then(result => {

        const user = result.user
        console.log(user)
      })
      .catch(error => {
        console.log(error)
      })
  }


  return (
    <div className="App">
      <button onClick={handleGoogleSignIn} className="rounded-full bg-orange-200 px-4 py-4 mt-12">Google sign in</button>
    </div>
  );
}

export default App;
