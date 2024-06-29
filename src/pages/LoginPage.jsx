import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase/config";

const LoginPage = ({ setIsAuth }) => {
  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setIsAuth(true);
      localStorage.setItem("TOKEN", data.user.refreshToken);
    });
  };
  return (
    <div className="container">
      <div className="login">
        <h2>ChatRoom</h2>
        <p>Login to Countiune...</p>
        <button onClick={handleClick}>
          <span>Login with </span>
          <img src="https://upload.wikimedia.org/wikipedia/commons/3/3e/Google_2011_logo.png" />
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
