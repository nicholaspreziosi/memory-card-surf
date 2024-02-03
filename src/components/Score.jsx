import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function Score({ scoreData }) {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gap: "2rem",
          margin: "1rem",
        }}
      >
        <Paper
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
            boxShadow: 3,
            borderRadius: "0.75rem",
            width: { xs: "240px", sm: "400px" },
            padding: "1rem",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              margin: { xs: "0rem", sm: "1rem" },
              padding: "0!important",
            }}
          >
            Score: {scoreData.score}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: 600,
              margin: { xs: "0rem", sm: "1rem" },
              padding: "0!important",
            }}
          >
            Best Score: {scoreData.bestScore}
          </Typography>
        </Paper>
      </div>
    </>
  );
}

export default Score;
