function Login() {

  function handleFormSubmit(event){
    event.preventDefault();
    const userData = {
      user: event.target.username.value,
      password: event.target.password.value
    };
    console.log(userData);
  }

  return(
  <>
    <h1>Login Form</h1>
    <form onSubmit={handleFormSubmit}>
      <label>Username:
        <input type="text" name="username"/> 
      </label>
      <label>Password:
        <input type="password" name="password"/> 
      </label>
      <button>Login</button>
    </form>
  </>
  );
}

export default Login;