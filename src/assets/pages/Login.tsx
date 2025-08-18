import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Credentials from "../../components/Input/Credentials";
import { login } from "../../services/authService";
import { handleUser } from "../../factory/userFactory";
import { useNavigate } from "react-router";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const navigate = useNavigate();

  const sendLoginDataToApi = async () => {
    const user = handleUser(username, password);

    try{
      const loginUser = await login(user);
      loginUser ? setIsLoggedIn(true) : setIsLoggedIn(true);
      //TODO: Show prompt login successful and redirect user.
    } catch(error: any) {
      //TODO: show the error to the user.
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (isLoggedIn){
      navigate("/home");
    }
  }, [isLoggedIn]);

  return (
    <Layout>
      <Credentials
        title="Ledgerly"
        description="Simplify Your Spending. Maximize Your Saving."
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
        sendCredsToApi={sendLoginDataToApi}
      />
    </Layout>
  );
};

export default Login;