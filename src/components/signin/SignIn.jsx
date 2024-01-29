import { useEffect, useState } from "react";
import { getRedirectResult } from "firebase/auth";
import Button from "../button/Button";
import InputForm from "../input-form/InputForm";
import {
  auth,
  googleRedirectSignIn,
  signInAuthUserWithEmailAndPassword,
} from "../../utils/Firebase";
import "./SignIn.scss";

const initialFormFields = {
  email: "",
  password: "",
};

const SignIn = () => {
  useEffect(() => {
    async function getRedirectData() {
      await getRedirectResult(auth);
    }
    getRedirectData();
  }, []);

  const [formFields, setFormFields] = useState(initialFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    setFormFields(initialFormFields);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetFormFields();
    } catch (error) {
      switch (error.code) {
        case "auth/wrong-password":
          alert("incorrect password for email");
          break;
        case "auth/user-not-found":
          alert("no user associated with this email");
          break;
        default:
          console.log(error);
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <InputForm
          label="Email"
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        />

        <InputForm
          label="Password"
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        />
        <div className="buttons">
          <Button type="submit">Sign In</Button>
          <Button
            type="button"
            btnType="secondary"
            onClick={googleRedirectSignIn}
          >
            Google sign in
          </Button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
