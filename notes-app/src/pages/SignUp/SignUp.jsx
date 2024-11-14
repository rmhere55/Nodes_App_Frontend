import  { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Passwordinput from "../../components/Input/Passwordinput";
import { Link } from "react-router-dom";
import { validateEmail } from '../../utils/helper'


const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    // Add your login handling logic here
    // console.log("Form submitted");
    if(!name){
      setError("Please enter your name");
      return
    }
    if(!validateEmail(email)){
      setError("Invalid Email");
      return;
  }
  if(!password){
      setError("Password is required");
      return;
  }

  setError('')
// sginUp api call
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form onSubmit={handleSignUp}>
            <h4 className="text-2xl mb-7"> Sign Up</h4>
            {/* Add your input fields and submit button here */}

            <input
              type="text"
              placeholder="Name"
              className="input-box"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <input
              type="text"
              placeholder="Email"
              className="input-box"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <Passwordinput
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-xs pb-1"> {error}</p>}
            <button type="submit" className="btn-primary">
              Sign Up
            </button>
            <p className="text-sm text-center mt-4">
              Already have a account{""}
              <Link
                to="/login"
                className="font-medium  text-primary underline"
              >
                {" "}
                Login{" "}
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
