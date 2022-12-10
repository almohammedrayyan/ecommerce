import React, { useContext, useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import "./login.scss";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
const Login = () => {
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { dispatch } = useContext(AuthContext);
  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/");
        dispatch({ type: "LOGIN", payload: user });
      })
      .catch((error) => {
        setError(true);
      });
  };
  return (
    <div className="login">
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="button">
          Login
        </button>
        {error && <span>Wrong Email and password!</span>}
      </form>
    </div>
  );
};

export default Login;
