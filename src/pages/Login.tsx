import { Button, TextField, Typography, Container } from "@mui/material";
import { useState } from "react";
import { login } from "../utils/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async () => {
        await login(email, password);
        navigate("/dashboard");
    };

    return (
        <Container maxWidth="sm" className="p-6 mt-20 shadow-xl rounded-xl">
            <Typography variant="h4" className="mb-6 text-center font-bold">Login</Typography>
            <TextField label="Email" fullWidth margin="normal" value={email} onChange={e => setEmail(e.target.value)} />
            <TextField label="Password" type="password" fullWidth margin="normal" value={password} onChange={e => setPassword(e.target.value)} />
            <Button variant="contained" color="primary" fullWidth onClick={handleLogin} className="mt-4">Log In</Button>
        </Container>
    );
};

export default Login;
