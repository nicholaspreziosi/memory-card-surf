import Button from "@mui/material/Button";
import CloseIcon from "@mui/icons-material/Close";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

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
              maxWidth: "800px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "1rem",
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

            <h1 style={{ padding: "0.5rem 1rem" }}>
              Congrats! You surfed all of the spots!
            </h1>
            <Button
              variant="text"
              onClick={() => {
                resetGame();
              }}
              style={{ width: "150px", cursor: "pointer" }}
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
