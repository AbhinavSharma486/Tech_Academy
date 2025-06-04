import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import Wrapper from "./Wrapper";
import Login from "../../pages/Login";
import Register from "../../pages/Register";

function AuthWrapper() {
  const location = useLocation();
  const navigate = useNavigate();

  const isLogin = location.pathname === "/login";
  const isRegister = location.pathname === "/register";

  return (
    <Wrapper
      isToggled={isRegister}
      onToggle={() => navigate(isRegister ? "/login" : "/register")}
    >
      <Login isVisible={isLogin} />
      <Register isVisible={isRegister} />
    </Wrapper>
  );
}

export default AuthWrapper;
