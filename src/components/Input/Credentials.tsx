import React, { useState } from "react";
import BlockButton from "../BlockButton";

interface CredentialsProps {
  email: string;
  password: string;
  title: string;
  description: string;
  setEmail: (value: string) => void;
  setPassword: (value: string) => void;
  sendCredsToApi: () => void;
}

const Credentials: React.FC<CredentialsProps> = ({
  email,
  password,
  title,
  description,
  setEmail,
  setPassword,
  sendCredsToApi,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-white">
      <h1 className="text-4xl font-bold text-center mb-3">{title}</h1>
      <p className="text-center text-gray-400 text-lg mb-8">{description}</p>

      <div className="space-y-6 w-full max-w-md">
        <input
          className="w-full px-4 py-4 text-lg rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
          style={{ backgroundColor: "#332e3c" }}
          type="text"
          value={email}
          placeholder="Enter email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="relative">
          <input
            className="w-full px-4 py-4 text-lg rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
            style={{ backgroundColor: "#332e3c" }}
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center text-gray-400 hover:text-white px-3"
            aria-label="Toggle password visibility"
          >
            {showPassword ? (
              <span className="icon-[tabler--eye-off] size-5"></span>
            ) : (
              <span className="icon-[tabler--eye] size-5"></span>
            )}
          </button>
        </div>

        <BlockButton label="Submit" onClick={sendCredsToApi} />
      </div>
    </div>
  );
};

export default Credentials;