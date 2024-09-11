import React, { useState } from "react";
import {
  FormControl,
  FormHelperText,
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
import { loaderIcon, logoArmor } from "../helper";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

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
    const correctPassword = "bibagumush";

    if (username === correctUsername && password === correctPassword) {
      // save to localstorage
      localStorage.setItem("username", username);
      localStorage.setItem("isAuthenticated", "true");
      setError("");
      navigate("/");
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
    <section className="flex flex-col gap-4 justify-center items-center h-dvh">
      <img src={logoArmor} alt="icon-artomoro" className="w-40" />
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
            error={error && !username}
            helperText={error && !username ? `username is required` : ""}
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
            error={error && !password}
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
          {error && !password && (
            <FormHelperText error>Password is required</FormHelperText>
          )}
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
