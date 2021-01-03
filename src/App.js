import "./bootstrap.min.css";
import "./App.css";
import { useState } from "react";

import Countdown from "react-countdown";

import { Table, Button } from "react-bootstrap";
import InputForm from "./components/InputForm";

function App() {
  const wordsApiUrl = "https://api.dictionaryapi.dev/api/v2/entries/en/";

  const [startTimer, setStartTimer] = useState(false);

  const [currentGameLetter, setCurrentGameLetter] = useState("");

  const [scores, setScores] = useState(0);

  const alphabetsArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const inputFieldsArray = ["name", "animal", "place", "thing"];

  const getUserInputs = ()=>{ return inputFieldsArray.map(inputField=>{
      return document.querySelector(`#${currentGameLetter}-${inputField}`).value;
    })};


  const calculateScores = ()=>{ 
    const userInputs = getUserInputs();

    userInputs.forEach( userInput => {
      fetch(wordsApiUrl + userInput)
      .then(res=>res.json())
      .then((res)=>{
        if(Object.keys(res).indexOf("title") === 0){return;}
  	if(parseInt(Object.keys(res[0]).indexOf("word")) === 0 ){ setScores(prevScore => prevScore + 1) }
      });
    })
  };

  const enableInputFields = (alphabet) => {
    inputFieldsArray.forEach((inputFieldTitle) =>
      document
        .getElementById(`${alphabet}-${inputFieldTitle}`)
        .removeAttribute("disabled")
    );
  };

  const disableInputFields = () => {
    inputFieldsArray.forEach(
      (inputFieldTitle) =>
        (document.getElementById(
          `${currentGameLetter}-${inputFieldTitle}`
        ).disabled = true)
    );
  };

  const disableGameButton = (button) => {
    button.disabled = true;
  };

  const startGame = (e, alphabet) => {
    disableGameButton(e.target);
    //Start timer
    setStartTimer(true);

    setCurrentGameLetter(alphabet);

    //Enable all input fields
    enableInputFields(alphabet);
  };

  const endGame = () => {
    //resetTimer
    //disable input fields
    disableInputFields();
    setStartTimer(false);
    setCurrentGameLetter("");
    //calculate scores
    calculateScores();
  };

  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      //End current game
      endGame();
      return (
        <span>
          {hours}:{minutes}:{seconds}
        </span>
      );
    } else {
      // Render a countdown
      return (
        <span>
          0{hours}:0{minutes}:{seconds.toString().length === 1 ? `0${seconds}` : seconds}
        </span>
      );
    }
  };

  return (
    <div className="App container">
      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Letters</th>
            <th>Name</th>
            <th>Animal</th>
            <th>Place</th>
            <th>Thing</th>
            <th>
              {startTimer ? (
                <Countdown renderer={renderer} date={Date.now() + 30000} />
              ) : (
                "00:00:30"
              )}
            </th>
          </tr>
        </thead>
        <tbody>
          {alphabetsArr.map((alphabet) => {
            return (
              <tr key={alphabet}>
                <td>
                  <Button
                    variant="warning"
                    onClick={(e) => startGame(e, alphabet)}
                  >
                    {alphabet}
                  </Button>
                </td>
                <InputForm letter={alphabet} />
              </tr>
            );
          })}
          <tr>
            <td>
              <Button
                variant="info"
                onClick={() => {
                  endGame();
                }}
              >
                Submit
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
