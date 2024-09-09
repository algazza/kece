import React, { useState } from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import styles from "../helper/style";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Navigate, useNavigate } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate()

  // visibility password
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  //   login function
  const handleSubmit = (event) => {
    event.preventDefault();
    const correctUsername = "admin123";
    const correctPassword = "dedekbiba";

    if (username === correctUsername && password === correctPassword) {
      // save to localstorage
      localStorage.setItem("username", username);
      localStorage.setItem("isAuthenticated", "true");
      setError("");
      navigate("/")
    } else {
      setError("Invalid Username or Password");
    }
  };

//   mengecek setelah jika seseorang berhasil login
  const isAuthenticated = localStorage.getItem("username");
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <section className="flex justify-center items-center h-dvh">
      <form
        className="p-4 border-2 border-abuGelap rounded-md"
        onSubmit={handleSubmit}
      >
        <h2 className={`${styles.heading1} text-center mb-2`}>Login</h2>
        <FormControl fullWidth>
          <TextField
            id="outlined-basic"
            label="Username"
            variant="outlined"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            error={!!error}
          />
        </FormControl>
        <FormControl fullWidth sx={{ marginY: 2 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={!!error}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  onMouseUp={handleMouseUpPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>

        <div className="flex justify-center flex-col">
          <button
            type="submit"
            className="font-semibold py-2 px-8 bg-biruMuda-500 rounded-md text-primary"
          >
            Login
          </button>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </div>
      </form>
    </section>
  );
};

export default Login;
