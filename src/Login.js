import logo from './logo.svg';
import './App.css';

function Login() {
  return (
    <div className="Login">
      <header className="App-header">
        <div className="App-header-logo">
          <img src="./logo_large.png" />
        </div>
      </header>
      <main>
        <from className="">
          <label for="username">
            Username
          </label>
          <input type=
            "text"
            id="username"
          /> 
          <label for="password">
            Password
          </label>
          <input type=
            "password"
            id="password"
          /> 
          <button type="submit">Login</button>
        </from>
      </main>
    </div>
  );
}

export default Login;
