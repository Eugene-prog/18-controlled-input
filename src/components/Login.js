import { useState } from 'react';

function Login() {

  const [data, setData] = useState({username: "", password:""});

  function handleFormSubmit(event){
    event.preventDefault();
    const userData = {
      user: data.username,
      password: data.password
    };
    console.log(data);
  }

  return(
  <>
    <h1>Login Form</h1>
    <form onSubmit={handleFormSubmit}>
      <label>Username:
        <input type="text" value={data.username} onChange={(e) => setData({...data, username: e.target.value})}/> 
      </label>
      <label>Password:
        <input type="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}/> 
      </label>
      <button>Login</button>
    </form>
  </>
  );
}

export default Login;