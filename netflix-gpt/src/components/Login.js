import { useState } from "react";
import Header from "./Header";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignIn = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div>
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/4d2c5849-b306-4884-9036-6211f7ee0178/web/IN-en-20240930-TRIFECTA-perspective_1e1ca6cd-9e2d-4e9d-9e4b-ba0c2d3a0e31_large.jpg"
                    alt="bgimage"
                    className="absolute" />
            </div>
            <form className="w-3/12 p-12 my-36 bg-black absolute my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1 className="text-3xl font-bold p-2 m-4">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {!isSignInForm && <input
                    type="text"
                    placeholder="Full Name"
                    className="p-2 m-4 w-full bg-gray-700" />}
                <input
                    type="text"
                    placeholder="email"
                    className="p-2 m-4 w-full bg-gray-700" />
                <input
                    type="password"
                    placeholder="password"
                    className="p-2 m-4 w-full bg-gray-700" />
                <button
                    className="p-2 m-4 w-full bg-red-700 rounded-lg">{isSignInForm ? "Sign In" : " Sign up"}
                </button>
                <p className="p-2 m-4 cursor-pointer"
                    onClick={toggleSignIn}>
                    {isSignInForm ? "New to NeFlixGPT, Please SignUp" : "Already Registered, Sign In now"}
                </p>
            </form>
        </div>
    )
};

export default Login;