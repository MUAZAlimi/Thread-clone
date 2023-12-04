import React from "react";
import LoginCard from "../component/LoginCard";
import SignUpCard from "../component/SignUpCard";
import { useRecoilValue } from "recoil";
import authScreenAtom from "../atoms/authAtom";

const AuthPage = () => {
  const authScreenState = useRecoilValue(authScreenAtom);

  return <>{authScreenState === "login" ? <LoginCard /> : <SignUpCard />}</>;
};

export default AuthPage;
