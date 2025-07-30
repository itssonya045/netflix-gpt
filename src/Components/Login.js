import { useRef, useState } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validation";
import { supabase } from "../utils/Client";
import { useNavigate } from 'react-router-dom';
import Browse from "./Browse";
const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const navigate = useNavigate()

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleClick = async () => {
    const emailVal = email.current.value.trim();
    const passwordVal = password.current.value.trim();
    const nameVal = name.current?.value.trim() || "";

    const message = checkValidData(emailVal, passwordVal, isSignInForm ? null : nameVal);
    setErrorMessage(message);
    if (message) return;

    try {
      if (!isSignInForm) {
        // Sign Up
        const { data, error } = await supabase.auth.signUp({
          email: emailVal,
          password: passwordVal,
          options: {
            data: {
              name: nameVal,
            },
          },
        });

        if (error) {
          setErrorMessage(error.message);
        } else {
          console.log("Sign up success:", data);
          setErrorMessage("Sign-up successful! Check your email for confirmation.");
        }
      } else {
        // Sign In
        const { data, error } = await supabase.auth.signInWithPassword({
          email: emailVal,
          password: passwordVal,
        });

        if (error) {
          setErrorMessage(error.message);
        } else {
          console.log("Sign in success:", data);
          navigate("/Browse")
        }
      }
    } catch (err) {
      setErrorMessage("Unexpected error occurred. Try again.");
      console.error("Auth error:", err);
    }
  };

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
    setErrorMessage(null);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background"
        />
      </div>

      <form
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700"
          />
        )}

        <input
          type="email"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700"
          required
        />
        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
          required
        />

        {errorMessage && (
          <p className="text-red-500 text-sm my-2">{errorMessage}</p>
        )}

        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg"
          onClick={handleClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now."
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
