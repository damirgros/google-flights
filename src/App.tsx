import FlightSelectionSection from "./FlightSelectionSection";
import HeroSection from "./HeroSection";
import { Container, CssBaseline } from "@mui/material";
// import useStyles from "./styles";

function App() {
  // const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <HeroSection />
        <FlightSelectionSection />
      </Container>
    </>
  );
}

export default App;
