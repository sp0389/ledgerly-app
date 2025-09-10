import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Credentials from "../../components/Input/Credentials";
import Layout from "../../components/Layout";
import { registerUser } from "../../services/authService";
import { handleUser } from "../../factory/userFactory";

const Register = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const navigate = useNavigate();

  const sendCredsToApi = async () => {
    const user = handleUser(email, password);

    try {
      const registeredUser = await registerUser(user);
      //TODO: set an alert to prompt the user that their registration was successful. Then redirect.
      registeredUser ? setIsLoggedIn(true) : setIsLoggedIn(false);

    } catch (error:any){
      //TODO: we can display an error prompt here also. console for now.
      console.log(error.message);
    }
  }

  useEffect(() => {
    if(isLoggedIn){
      navigate('/home');
    }
  },[isLoggedIn]);

  return (
    <Layout>
      <div>
        <Credentials
          title="Register"
          description="Register a new account"
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
          sendCredsToApi={sendCredsToApi}
        />
      </div>
    </Layout>
  );
};

export default Register;