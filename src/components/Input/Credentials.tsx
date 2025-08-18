import React, { useState } from "react";
import BlockButton from "../BlockButton";

interface CredentialsProps {
  username: string;
  password: string;
  title: string;
  description: string;
  setUsername: (value: string) => void;
  setPassword: (value: string) => void;
  sendCredsToApi: () => void;
}

const Credentials: React.FC<CredentialsProps> = ({
  username,
  password,
  title,
  description,
  setUsername,
  setPassword,
  sendCredsToApi,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-white">
      <h1 className="text-5xl font-bold text-center mb-3">{title}</h1>
      <p className="text-center text-gray-400 text-lg mb-10">{description}</p>

      <div className="w-full max-w-lg space-y-6">
        <input
          className="w-full px-4 py-4 text-lg rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
          type="text"
          value={username}
          placeholder="Enter username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <div className="relative">
          <input
            className="w-full px-4 py-4 text-lg rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-gray-400"
            type={showPassword ? "text" : "password"}
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute inset-y-0 right-0 flex items-center text-gray-400 hover:text-white"
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