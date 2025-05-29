import { Container, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { logout } from "../utils/auth";

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    return (
        <Container maxWidth="md" className="mt-20 p-6 rounded-xl shadow-lg bg-white">
            <Typography variant="h3" className="mb-4 font-bold text-center">
                Welcome to the Dashboard 🚀
            </Typography>
            <Typography variant="body1" className="mb-6 text-center text-gray-600">
                You have successfully logged in and this route is protected with JWT.
            </Typography>

            <div className="flex justify-center">
                <Button variant="outlined" color="error" onClick={handleLogout}>
                    Logout
                </Button>
            </div>
        </Container>
    );
};

export default Dashboard;
