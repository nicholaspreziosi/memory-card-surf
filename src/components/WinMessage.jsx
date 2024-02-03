import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import Typography from "@mui/material/Typography";

function WinMessage({ win, resetGame }) {
  win ? disableBodyScroll(document) : enableBodyScroll(document);

  return (
    <>
      {win && (
        <div
          style={{
            backgroundColor: "rgb(0, 0, 0, 0.7)",
            width: "100vw",
            height: "100vh",
            position: "fixed",
            top: "0%",
            left: "0%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            style={{
              backgroundColor: "white",
              padding: "1rem",
              margin: "1rem",
              maxWidth: "600px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "1rem",
              borderRadius: "0.75rem",
            }}
          >
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <CloseIcon
                onClick={() => {
                  resetGame();
                }}
                style={{ cursor: "pointer" }}
              ></CloseIcon>
            </div>

            <Typography
              gutterBottom
              variant="h5"
              sx={{
                fontWeight: 600,
                padding: "0.5rem 1rem",
              }}
            >
              Congrats! You surfed all of the spots & won the 2024 World
              Championship Tour of Surfing!
            </Typography>
            <Button
              variant="text"
              onClick={() => {
                resetGame();
              }}
              style={{
                width: "150px",
                cursor: "pointer",
                bgColor: "white",
                "&:hover": {
                  bgcolor: "#E8EEF3",
                },
                borderRadius: "0.75",
              }}
            >
              Reset Game
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

export default WinMessage;
