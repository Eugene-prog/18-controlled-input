import { useState } from 'react';

function Login() {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleFormSubmit(event){
    event.preventDefault();
    const userData = {
      user: {username},
      password: {password}
    };
    console.log(userData);
  }

  return(
  <>
    <h1>Login Form</h1>
    <form onSubmit={handleFormSubmit}>
      <label>Username:
        <input type="text" value={username} name="username" onChange={(e) => setUsername(e.target.value)}/> 
      </label>
      <label>Password:
        <input type="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)}/> 
      </label>
      <button>Login</button>
    </form>
  </>
  );
}

export default Login;