import { useState } from "react";
import Credentials from "../../components/Input/Credentials";
import BlockButton from "../../components/BlockButton";
import Layout from "../../components/Layout";

const Register = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<Boolean>(false);

  //TODO: function call to API
  const sendCredsToApi = () => {};

  return (
    <Layout>
      <div>
        <Credentials
          username={username}
          password={password}
          setUsername={setUsername}
          setPassword={setPassword}
        />
        <BlockButton label="Submit" onClick={sendCredsToApi} />
      </div>
    </Layout>
  );
};

export default Register;
