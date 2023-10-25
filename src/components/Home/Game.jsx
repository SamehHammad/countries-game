import React, { useState, useEffect } from "react";
import "./game.css"; // Import your CSS file for styling
import { Button } from "react-bootstrap";
import { countriesData, getRandomColor } from "./data"; // Assuming you're only using countriesData from the "data" file
import { useNavigate } from "react-router-dom";
import { AiOutlineReload } from "react-icons/ai";
import { BiHomeHeart } from "react-icons/bi";


const SquareSplitter = () => {
  const [numberOfSquares, setNumberOfSquares] = useState(0);
  const [scores, setScores] = useState(Array(0).fill(0));
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [started, setStarted] = useState(false);
  const navigate = useNavigate();

  const handleStarted = () => {
    setStarted(true);
  };

  useEffect(() => {
    const conNumb = JSON.parse(localStorage.getItem("cNumber"));
    const newNumberOfSelects = parseInt(conNumb, 10);
    setNumberOfSquares(newNumberOfSelects);
    setScores(Array(newNumberOfSelects).fill(0));
  }, []);

  const handleCountryChange = (e, index) => {
    const updatedCountries = [...selectedCountries];
    updatedCountries[index] = e.target.value;
    setSelectedCountries(updatedCountries);
  };

  const incrementScore = (index) => {
    const updatedScores = [...scores];
    updatedScores[index] += 1;
    setScores(updatedScores);
  };
  const reset = () => {
    setScores(Array(numberOfSquares).fill(0));
  };
  const renderSquares = () => {
    const squares = [];
    for (let i = 0; i < numberOfSquares; i++) {
      const selectedCountry = countriesData.find(
        (country) => country.name === selectedCountries[i]
      );
      const flagURL = selectedCountry ? selectedCountry.flagURL : "";

      squares.push(
        <div
          className="square"
          key={i}
          style={{
            backgroundColor: `#556766`,
          }}
        >
          <div onClick={() => incrementScore(i)} style={{ height: "100vh" }}>
            {started ? (
              <>
                <img
                  src={flagURL}
                  alt={selectedCountries[i]}
                  style={{ width: "100%", height: "30%", marginBottom: "20px" }}
                />
                <h1>{selectedCountries[i]}</h1>
                <h1
                  style={{
                    color: getRandomColor(),
                    fontSize: "60px",
                    textShadow: "2px 2px 4px #fff",
                  }}
                >
                  {scores[i]}
                </h1>
              </>
            ) : (
              <>
                <select onChange={(e) => handleCountryChange(e, i)}>
                  <option value="">Select a country</option>
                  {countriesData.map((country) => (
                    <option key={country.name} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </>
            )}
          </div>
        </div>
      );
    }
    return squares;
  };

  return (
    <div className="squares-container">
      {renderSquares()}
      {!started ? (
        <Button
          variant="success"
          className="d-block m-auto mt-5 started"
          onClick={handleStarted}
        >
          Start
        </Button>
      ) : (
        <div onClick={reset}>
          <AiOutlineReload
            className="reset"
            style={{  cursor: "pointer" }}
          />
        </div>
      )}
      <div  onClick={() => navigate("/countries-game/")}>
        <BiHomeHeart className="back" style={{  cursor: "pointer" }}/>
      </div>
    </div>
  );
};

export default SquareSplitter;
