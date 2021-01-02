import "./bootstrap.min.css";
import "./App.css";
import { useState } from "react";

import Countdown from "react-countdown";

import { Table, Button } from "react-bootstrap";
import InputForm from "./components/InputForm";

function App() {
  const [startTimer, setStartTimer] = useState(false);

  const [currentGameLetter, setCurrentGameLetter] = useState("");

  const alphabetsArr = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const inputFieldsArray = ["name", "animal", "place", "thing"];

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
          {hours}:{minutes}:{seconds}
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
