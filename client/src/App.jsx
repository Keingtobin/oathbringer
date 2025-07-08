import { Link } from 'react-router-dom';
import axios from 'axios';
import './App.css'

const hello = () => {
  axios.get('http://localhost:8080').then((data) => {
    console.log(data);
  })
}


const login = () =>{
  window.location.href = "https://www.strava.com/oauth/authorize?client_id=166071&response_type=code&redirect_uri=http://localhost:8080/auth/callback&approval_prompt=force&scope=read";
}

function App() {

  return (
    <>
      <button onClick={hello}>
        Hello
      </button>
      <div>
      <button onClick={login}>
        Login
      </button>
      </div>
    </>
  )
}

export default App
