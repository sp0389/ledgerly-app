import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Credentials from "../../components/Input/Credentials";
import BlockButton from "../../components/BlockButton";
import { login } from "../../services/authService";
import { handleUser } from "../../factory/userFactory";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

  const sendLoginDataToApi = async () => {
    const user = handleUser(username, password);

    try{
      const loginUser = await login(user);
      loginUser ? setIsLoggedIn(true) : setIsLoggedIn(false);
      //TODO: Show prompt login successful and redirect user.
    } catch(error: any) {
      //TODO: show the error to the user.
      console.log(error.message);
    }
  };

  useEffect(() => {
    if (isLoggedIn){
      //TODO: redirect
    }
  }, [isLoggedIn]);

  return (
    <Layout>
      <Credentials
        username={username}
        password={password}
        setUsername={setUsername}
        setPassword={setPassword}
      />
      <BlockButton label="Submit" onClick={sendLoginDataToApi} />
    </Layout>
  );
};

export default Login;