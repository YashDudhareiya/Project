import { Button, TextField, Typography, Container, CircularProgress } from "@mui/material";
import { useState } from "react";
import { login } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password) {
      alert("Please enter both email and password.");
      return;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    
    setLoading(true);
    try {
      await login(email, password);
      navigate("/dashboard");
    } catch (err) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <Container maxWidth="sm" className="p-6 mt-20 shadow-xl rounded-xl">
      <Typography variant="h4" className="mb-6 text-center font-bold">Login</Typography>
      <TextField label="Email" fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
      <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={e => setPassword(e.target.value)} />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        className="!mt-6"
        onClick={handleLogin}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Log In"}
      </Button>

      <Typography variant="body2" className="!mt-7 text-center">
        Don’t have an account?{" "}
        <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/register")}>
          Register
        </span>
      </Typography>
    </Container>
  );
};

export default Login;
