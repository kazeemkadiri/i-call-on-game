import React from "react";
import {Button} from "react-bootstrap";

const InputForm = ({ letter,endGame }) => {
  const inputTitles = ["name", "animal", "place", "thing"];

  return (
    <>
      {inputTitles.map((inputTitle) => (
        <td>
          <input
            type="text"
            name={`${letter}-${inputTitle}`}
            id={`${letter}-${inputTitle}`}
	    disabled
          />
        </td>
      ))}
    </>
  );
};

export default InputForm;
