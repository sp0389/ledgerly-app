import { useEffect } from "react";
import { removeToken } from "../../services/authService";
import { useNavigate } from "react-router";

const Logout = () => {

  const navigate = useNavigate();

  useEffect(() => {
    removeToken();
    navigate("/");
  }, []);

  return (
    <>
    </>
  )
}

export default Logout;