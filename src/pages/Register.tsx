  import { useState } from "react";
  import { Container, TextField, Button, Typography } from "@mui/material";
  import { useNavigate } from "react-router-dom";
  import { login } from "../utils/auth";

  const Register = () => {
      const navigate = useNavigate();
      const [form, setForm] = useState({ email: "", password: "", confirm: "" });

      const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          setForm({ ...form, [e.target.name]: e.target.value });
      };

    const handleRegister = async () => {
      const { email, password, confirm } = form;

      if (!email || !password || !confirm) {
        alert("All fields are required.");
        return;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address.");
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

      await login(email, password);
      navigate("/dashboard");
    };

      return (
          <Container maxWidth="sm" className="mt-20 p-8 shadow-lg rounded-xl bg-white">
              <Typography variant="h4" className="text-center font-bold mb-6">
                  Register
              </Typography>

              <TextField label="Email" name="email" fullWidth margin="normal" onChange={handleChange} />
              <TextField label="Password" type="password" name="password" fullWidth margin="normal" onChange={handleChange} />
              <TextField label="Confirm Password" type="password" name="confirm" fullWidth margin="normal" onChange={handleChange} />

              <Button variant="contained" color="primary" fullWidth className="!mt-6" onClick={handleRegister}>
                  Create Account
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
