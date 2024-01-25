import SignIn from "../../signin/SignIn";
import SignUp from "../../signup/SignUp";
import "./Auth.scss";
const Auth = () => {
  return (
    <div className="auth">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default Auth;
