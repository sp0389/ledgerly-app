import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import Credentials from "../../components/Input/Credentials";
import BlockButton from "../../components/BlockButton";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

  const sendLoginDataToApi = () => {
    //TODO: api call.
  };

  useEffect(() => {
    //TODO: set up API function call.
  }, []);

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
