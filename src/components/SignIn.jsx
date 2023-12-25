import { auth, provider } from "../firebase-config";
import { signInWithPopup } from "firebase/auth";

import Cookies from "universal-cookie";
const cookies = new Cookies();

const SignIn = ({ setIsAuth }) => {
  const handleSignIn = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // console.log(result);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="signIN-container">
      <h1 className="heading">Chat with your friends!</h1>
      <p className="signIN-text">Sign in with Google to continue</p>
      <button className="signIN-btn" onClick={handleSignIn}>
        Sign in
      </button>
    </div>
  );
};

export default SignIn;
