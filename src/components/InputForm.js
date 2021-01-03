import React from "react";

const InputForm = ({ letter }) => {

const inputTitles = ["name", "animal", "place", "thing"];

  const validateFirstLetter = (e) => {
    const userInput = e.target.value;
    if (userInput.charAt(0).toUpperCase() !== letter) {
      alert(`Word must begin with ${letter}`);
      e.target.value = "";
    }
  };

  return (
    <>
      {inputTitles.map((inputTitle) => (
        <td>
          <input
            type="text"
            name={`${letter}-${inputTitle}`}
            id={`${letter}-${inputTitle}`}
 	    className="form-control"
     	    style={{width:'20vw'}}
            onChange={(e) => {validateFirstLetter(e);}}
            disabled
          />
        </td>
      ))}
    </>
  );
};

export default InputForm;
