import { useState } from "react";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import styles from "../helper/style";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Navigate, useNavigate } from "react-router-dom";
import { logoArmor } from "../helper";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
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
    const correctPassword = "jonarmor";

    if (password === correctPassword) {
      // save to localstorage
      localStorage.setItem("passkey", password);
      localStorage.setItem("isAuthenticated", "true");
      setError("");
      navigate("/newwebsite");
    } else {
      setError("Passkey salah");
    }
  };

  //   mengecek setelah jika seseorang berhasil login
  const isAuthenticated = localStorage.getItem("passkey");
  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <section
      className={`${styles.paddingY} flex flex-col gap-2 justify-center items-center h-dvh`}
    >
      <img src={logoArmor} alt="icon-artomoro" className="w-40" />
      <h2 className={`${styles.heading3} text-center px-2`}>
        Maaf Website sedang dalam maintanance
      </h2>
      <p className="text-center px-2">Masukkan passkey untuk melihat website</p>
      <form className="" onSubmit={handleSubmit}>
        <FormControl fullWidth sx={{ marginY: 2 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Passkey</InputLabel>
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
            <FormHelperText error>Passkey harus diisi</FormHelperText>
          )}
        </FormControl>

        <div className="flex justify-center flex-col">
          <button
            type="submit"
            className="font-semibold py-2 px-8 bg-biruMuda-500 rounded-md text-primary"
          >
            Masuk
          </button>
          {error && <p className="text-red-500 text-center mt-2">{error}</p>}
        </div>
      </form>
    </section>
  );
};

export default Login;
