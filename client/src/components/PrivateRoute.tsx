import React from "react";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

interface User {
  avatar: string;
}

interface RootState {
  user: {
    currentUser: User | null
  }
}
export default function PrivateRoute() {
  const { currentUser } = useSelector((state: RootState) => state.user);
  return currentUser ? <Outlet /> : <Navigate to="sign-in" />;
}
