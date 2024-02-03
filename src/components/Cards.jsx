import { useLayoutEffect } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function Cards({
  cardData,
  setCardData,
  scoreData,
  setScoreData,
  setWin,
  clearClicked,
  clearScore,
}) {
  function handleClick(e, item) {
    e.preventDefault();
    if (scoreData.score === 11 && !item.clicked) {
      setWin(true);
    }
    if (item.clicked) {
      clearScore();
      clearClicked();
    } else if (scoreData.score >= scoreData.bestScore) {
      incrementBothScores();
      updateClicked(item);
    } else {
      incrementScore();
      updateClicked(item);
    }
  }

  function incrementBothScores() {
    setScoreData((scoreData) => {
      return {
        score: scoreData.score + 1,
        bestScore: scoreData.bestScore + 1,
      };
    });
  }

  function incrementScore() {
    setScoreData((scoreData) => {
      return {
        score: scoreData.score + 1,
        bestScore: scoreData.bestScore,
      };
    });
  }

  function updateClicked(item) {
    let updatedObj = { ...item };
    updatedObj.clicked = true;
    setCardData(
      cardData.map((item) => {
        return item.id === updatedObj.id ? updatedObj : item;
      })
    );
  }

  const scrollX = window.scrollX;
  const scrollY = window.scrollY;

  useLayoutEffect(() => {
    window.scrollTo(scrollX, scrollY);
  });

  return (
    <>
      <div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={0}
          sx={{ margin: 0, padding: 0, width: "100%" }}
        >
          {[...cardData]
            .sort(() => Math.random() - 0.5)
            .map((item) => (
              <div key={item.id}>
                <Grid key={item.id} item sx={{ padding: "0.5rem" }}>
                  <Card
                    sx={{
                      width: "240px",
                      height: "330px",
                      boxShadow: 3,
                      cursor: "pointer",
                      borderRadius: "0.75rem",
                      bgColor: "white",
                      "&:hover": {
                        bgcolor: "#E8EEF3",
                      },
                    }}
                    variant="outlined"
                    onClick={(e) => {
                      handleClick(e, item);
                    }}
                  >
                    <img
                      src={item.img}
                      alt={item.name}
                      style={{ width: "240px", height: "160px" }}
                    />
                    <CardContent sx={{ padding: "12px" }}>
                      <Typography
                        gutterBottom
                        variant="body2"
                        color="text.secondary"
                        sx={{ fontSize: 10 }}
                      >
                        {item.photoCredits}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="h5"
                        sx={{ fontWeight: 600 }}
                      >
                        {item.name}
                      </Typography>
                      <Typography gutterBottom variant="body1">
                        {item.location}, {item.country}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body1"
                        sx={{ fontWeight: 600, fontSize: 14 }}
                      >
                        {item.swellHeight} ft at {item.swellPeriod} sec{" "}
                        {item.swellDir}º {item.swellDir16Point}
                      </Typography>
                      <Typography
                        gutterBottom
                        variant="body1"
                        sx={{ fontWeight: 600, fontSize: 14 }}
                      >
                        Water Temp: {item.waterTemp}º F
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </div>
            ))}
        </Grid>
      </div>
    </>
  );
}

export default Cards;
