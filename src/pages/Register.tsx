import { useState } from "react";
import { Container, TextField, Button, Typography, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { register } from "../utils/auth";

const Register = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "", confirm: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    const { name, email, password, confirm } = form;

    if (!name || !email || !password || !confirm) {
      alert("All fields are required.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Invalid email.");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirm) {
      alert("Passwords do not match!");
      return;
    }

    setLoading(true);
    try {
      await register(email, password);
      navigate("/dashboard");
    } catch (err) {
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container maxWidth="sm" className="mt-20 p-8 shadow-lg rounded-xl bg-white">
      <Typography variant="h4" className="text-center font-bold mb-6">
        Register
      </Typography>

      <TextField
        label="Name"
        name="name"
        fullWidth
        margin="normal"
        onChange={handleChange}
      />
      <TextField label="Email" name="email" fullWidth margin="normal" onChange={handleChange} />
      <TextField label="Password" type="password" name="password" fullWidth margin="normal" onChange={handleChange} />
      <TextField label="Confirm Password" type="password" name="confirm" fullWidth margin="normal" onChange={handleChange} />

      <Button
        variant="contained"
        color="primary"
        fullWidth
        className="!mt-6"
        onClick={handleRegister}
        disabled={loading}
      >
        {loading ? <CircularProgress size={24} color="inherit" /> : "Create Account"}
      </Button>

      <Typography variant="body2" className="!mt-4 text-center">
        Already have an account?{" "}
        <span className="text-blue-600 cursor-pointer" onClick={() => navigate("/login")}>
          Log In
        </span>
      </Typography>
    </Container>
  );
};

export default Register;
