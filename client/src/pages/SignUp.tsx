import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OAuth from "../components/OAuth";
import useHttp from "../api/useHttp";
import { userSignUp } from "../api/user";

interface SignUpData {
  username: string;
  email: string;
  password: string;
}

const SignUp:React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignUpData>({
    username: "",
    email: "",
    password: "",
  });

  const { sendRequest, loading, error } = useHttp();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSumbit = async (e) => {
    // if we dont have this one, if we click button
    // will refresh page
    e.preventDefault();
    try {
      // setLoading(true);
      // const res = await fetch("/api/auth/signup", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });
      // const data = await res.json();
      // console.log(data);
      // if (data.success === false) {
      //   setLoading(false);
      //   setError(data.message);
      //   return;
      // }
      // setLoading(false);
      // setError(null);
      const response = await sendRequest(userSignUp(formData));
      console.log(response, "response");
      navigate("/sign-in");
    } catch (error) {
      // setLoading(false);
      // setError(error.message);
      console.log(error);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSumbit}>
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-slate-700 text-white p-3
         rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
        >
          {loading ? "Loading..." : "Sign Up"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Have an acoount?</p>
        <Link to={"/sign-in"}>
          <span className="text-blue-700">Sign in</span>
        </Link>
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </div>
    </div>
  );
}
export default SignUp;
