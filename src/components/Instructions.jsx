import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function Instructions() {
  return (
    <>
      <Container>
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            fontWeight: 600,
          }}
        >
          Welcome to the 2024 World Championship Tour of Surfing!
        </Typography>
        <Typography gutterBottom variant="body1">
          This app is a simple memory game where you will want to click to surf
          all of the tour stops once and make sure not to surf any spot twice!
          The best score you can get is 12, meaning you have visited all
          locations. The surf spot cards include live swell and water
          temperature information.
        </Typography>
      </Container>
    </>
  );
}

export default Instructions;
