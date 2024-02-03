import { useState, useEffect } from "react";
import Cards from "./Cards.jsx";
import Score from "./Score.jsx";
import WinMessage from "./WinMessage.jsx";
import Instructions from "./Instructions.jsx";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

function App() {
  const [isLoading, setLoading] = useState(true);

  const [scoreData, setScoreData] = useState({
    score: 0,
    bestScore: 0,
  });

  const [win, setWin] = useState(false);

  const [cardData, setCardData] = useState([
    {
      id: 0,
      name: "Pipeline",
      location: "Hawaii",
      country: "USA",
      img: "../public/pipeline.jpg",
      photoCredits: "Photo: Jonathan Reiter / Surfline",
      clicked: false,
      longitude: "-158.0549034",
      latitude: "21.6647448",
      swellHeight: null,
      swellPeriod: null,
      swellDir: null,
      swellDir16Point: null,
      waterTemp: null,
    },
    {
      id: 1,
      name: "Teahupoo",
      location: "Tahiti",
      country: "France",
      img: "../public/teahupoo.jpg",
      photoCredits: "Photo: Ben Thouard / Surfline",
      clicked: false,
      longitude: "-149.2677",
      latitude: "-17.8471",
      swellHeight: null,
      swellPeriod: null,
      swellDir: null,
      swellDir16Point: null,
      waterTemp: null,
    },
    {
      id: 2,
      name: "Jeffrey's Bay",
      location: "Eastern Cape",
      country: "South Africa",
      img: "../public/jbay.jpg",
      photoCredits: "Photo: Alan van Gysen / Surfline",
      clicked: false,
      longitude: "24.922220",
      latitude: "-34.049171",
      swellHeight: null,
      swellPeriod: null,
      swellDir: null,
      swellDir16Point: null,
      waterTemp: null,
    },
    {
      id: 3,
      name: "Supertubos",
      location: "Peniche",
      country: "Portugal",
      img: "../public/supertubos.jpg",
      photoCredits: "Photo: Helio Antonio / Surfline",
      clicked: false,
      longitude: "-9.381470",
      latitude: "39.356491",
      swellHeight: null,
      swellPeriod: null,
      swellDir: null,
      swellDir16Point: null,
      waterTemp: null,
    },
    {
      id: 4,
      name: "Hossegor",
      location: "Landes",
      country: "France",
      img: "../public/hossegor.jpg",
      photoCredits: "Photo: Jeremiah Klein / Surfline",
      clicked: false,
      longitude: "-1.4262382",
      latitude: "43.6584045",
      swellHeight: null,
      swellPeriod: null,
      swellDir: null,
      swellDir16Point: null,
      waterTemp: null,
    },
    {
      id: 5,
      name: "Puerto Escondido",
      location: "Oaxaca",
      country: "Mexico",
      img: "../public/puertoescondido.jpg",
      photoCredits: "Photo: Edwin Morales / Surfline",
      clicked: false,
      longitude: "-97.0726428",
      latitude: "15.8693331",
      swellHeight: null,
      swellPeriod: null,
      swellDir: null,
      swellDir16Point: null,
      waterTemp: null,
    },
    {
      id: 6,
      name: "Snapper Rocks",
      location: "Gold Coast",
      country: "Australia",
      img: "../public/snapper.jpg",
      photoCredits: "Photo: Andrew Shield / Surfline",
      clicked: false,
      longitude: "153.5497863",
      latitude: "-28.1622948",
      swellHeight: null,
      swellPeriod: null,
      swellDir: null,
      swellDir16Point: null,
      waterTemp: null,
    },
    {
      id: 7,
      name: "Cloudbreak",
      location: "Tavarua",
      country: "Fiji",
      img: "../public/cloudbreak.jpg",
      photoCredits: "Photo: Chris Peel / Surfline",
      clicked: false,
      longitude: "177.2022995",
      latitude: "-17.8577324",
      swellHeight: null,
      swellPeriod: null,
      swellDir: null,
      swellDir16Point: null,
      waterTemp: null,
    },
    {
      id: 8,
      name: "G-Land",
      location: "Java",
      country: "Indonesia",
      img: "../public/gland.jpg",
      photoCredits: "Photo: Brad Masters / Surfline",
      clicked: false,
      longitude: "114.3510032",
      latitude: "-8.7315716",
      swellHeight: null,
      swellPeriod: null,
      swellDir: null,
      swellDir16Point: null,
      waterTemp: null,
    },
    {
      id: 9,
      name: "Skeleton Bay",
      location: "Walvis Bay",
      country: "Namibia",
      img: "../public/skeletonbay.jpg",
      photoCredits: "Photo: Ian Thurtell / Surfline",
      clicked: false,
      longitude: "14.5071125",
      latitude: "-22.9557607",
      swellHeight: null,
      swellPeriod: null,
      swellDir: null,
      swellDir16Point: null,
      waterTemp: null,
    },
    {
      id: 10,
      name: "Lower Trestles",
      location: "California",
      country: "USA",
      img: "../public/trestles.jpg",
      photoCredits: "Photo: Kenny Morris / Surfline",
      clicked: false,
      longitude: "-117.58964718100353",
      latitude: "33.38220087593996",
      swellHeight: null,
      swellPeriod: null,
      swellDir: null,
      swellDir16Point: null,
      waterTemp: null,
    },
    {
      id: 11,
      name: "Punta Roca",
      location: "La Libertad",
      country: "El Salvador",
      img: "../public/puntaroca.jpg",
      photoCredits: "Photo: Billy Watts / Surfline",
      clicked: false,
      longitude: "-89.3530771",
      latitude: "13.4848021",
      swellHeight: null,
      swellPeriod: null,
      swellDir: null,
      swellDir16Point: null,
      waterTemp: null,
    },
  ]);

  function clearClicked() {
    let newData = cardData.map((item) => ({ ...item, clicked: false }));
    setCardData(newData);
  }

  function clearScore() {
    setScoreData((scoreData) => {
      return {
        score: 0,
        bestScore: scoreData.bestScore,
      };
    });
  }

  function resetGame() {
    clearClicked();
    clearScore();
    setWin(!win);
  }

  async function getForecast() {
    let output = [];
    for (let obj of cardData) {
      await fetch(
        `https://api.weatherapi.com/v1/marine.json?key=76940e6c707d4eeab27163440240102&q=${obj.latitude},${obj.longitude}&days=8&aqi=no&alerts=no`,
        { mode: "cors" }
      )
        .then((response) => response.json())
        .then((marineData) => {
          let swellHeight =
            marineData.forecast.forecastday[0].hour[0].swell_ht_ft;
          let swellPeriod =
            marineData.forecast.forecastday[0].hour[0].swell_period_secs;
          let swellDir = marineData.forecast.forecastday[0].hour[0].swell_dir;
          let swellDir16Point =
            marineData.forecast.forecastday[0].hour[0].swell_dir_16_point;
          let waterTemp =
            marineData.forecast.forecastday[0].hour[0].water_temp_f;
          let updatedItem = { ...obj };
          updatedItem.swellHeight = swellHeight;
          updatedItem.swellPeriod = swellPeriod;
          updatedItem.swellDir = swellDir;
          updatedItem.swellDir16Point = swellDir16Point;
          updatedItem.waterTemp = waterTemp;
          output.push(updatedItem);
        });
    }
    setCardData(output);
    setLoading(false);
  }

  useEffect(() => {
    getForecast();
  }, []);

  if (isLoading) {
    return (
      <Container
        sx={{
          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          sx={{
            fontWeight: 600,
          }}
        >
          Loading...
        </Typography>
      </Container>
    );
  }

  return (
    <>
      <Container
        maxWidth={false}
        sx={{
          margin: "0",
          padding: { xs: "1rem", sm: "2rem" },
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <WinMessage win={win} resetGame={resetGame}></WinMessage>
        <Instructions></Instructions>
        <Score scoreData={scoreData}></Score>
        <Cards
          cardData={cardData}
          setCardData={setCardData}
          scoreData={scoreData}
          setScoreData={setScoreData}
          win={win}
          setWin={setWin}
          clearClicked={clearClicked}
          clearScore={clearScore}
        ></Cards>
      </Container>
    </>
  );
}

export default App;
