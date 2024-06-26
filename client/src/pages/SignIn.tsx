import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice.tsx";
import OAuth from "../components/OAuth.tsx";
import useHttp from "../api/useHttp.ts";
import { userSignIn } from "../api/user.ts";
import  { RootState } from "../redux/store";

interface SignUpData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<SignUpData>({
    email: "",
    password: "",
  });
  const { loading, error } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();
  const { sendRequest } = useHttp();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      // const res = await fetch("/api/auth/signin", {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify(formData),
      // });
      // const data = await res.json();
      // console.log(data);
      const response = await sendRequest(userSignIn(formData));
      console.log(response, "response");
      // if (data.success === false) {
      //   dispatch(signInFailure(data.message));
      //   return;
      // }
      dispatch(signInSuccess(response));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message));
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form className="flex flex-col gap-4" onSubmit={handleSumbit}>
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
          {loading ? "Loading..." : "Sign In"}
        </button>
        <OAuth />
      </form>
      <div className="flex gap-2 mt-5">
        <p>Dont Have an acoount?</p>
        <Link to={"/sign-up"}>
          <span className="text-blue-700">Sign Up</span>
        </Link>
        {error && <p className="text-red-500 mt-5">{error}</p>}
      </div>
    </div>
  );
}
export default SignIn;
