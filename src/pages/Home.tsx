import { Box, Button, Container, Typography } from "@mui/material";
import { useAuth } from "../context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <Container maxWidth="lg">
      <Box sx={{ my: 4 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography variant="h4" component="h1">
            Investment Tracker
          </Typography>
          <Button variant="contained" color="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Box>
        <Typography variant="h6" component="h2">
          Welcome, {user?.email}
        </Typography>
        <Box sx={{ mt: 4 }}>
          <Typography variant="body1">
            Your investment dashboard will appear here.
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
