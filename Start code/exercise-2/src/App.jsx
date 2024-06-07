import React from "react";
import { useState } from "react";
function App() {
  /* You will need to use a boolean state to keep the value of the text entered */
  const [ text, setText ] = useState('')

  /* You will need a function to handle a key pressed on the first input and update the state*/
  const handleSubmit = (event) => {
    event.preventDefault();
    const upperText = text.toUpperCase();
    document.getElementById('result').value = upperText;
  }

  const handleInput = (event) => {
    setText(event.target.value)

  }
  return (
    <main>
      <h1>Upper Case Converter</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter any text !</label>
        <input onChange={handleInput} />

        <p>
          <label>Here is the text in upper case</label>
          {/* This input will need to display the text entered in lower case */}
          <input id="result " disabled value={text.toUpperCase()} />
        </p>
      </form>
    </main>
  );
}

export default App;



