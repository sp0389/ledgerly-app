interface CredentialsProps {
  username: string;
  password: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
}

//TODO: base implementation (missing features)
const Credentials: React.FC<CredentialsProps> = ({ username, password, setUsername, setPassword }) => {
  return (
    <div>
      <div className="mb-3">
        <h1 style={{textAlign: "center"}}>Welcome!</h1>
        <h2 style={{textAlign: "center"}}>Enter your details below.</h2>
      </div>

      <div>
        <label className="label-text" htmlFor="defaultInput">Username</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" />
      </div>

      <div className="mb-3">
        <label className="label-text" htmlFor="defaultInput">Password</label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} className="input" />
      </div>
    </div>
  )
}

export default Credentials;