

import { useState } from "react";

function App() {
  const [numbers, setNumbers] = useState({ number1: '', number2: '' });
  const [error, setError] = useState(false);
  const [result, setResult] = useState('');

  const handleInputChange = (event, key) => {
    const value = event.target.value;
    const parsedValue = parseFloat(value);

    if (isNaN(parsedValue) && value !== '') {
      setError(true);
      setNumbers({ ...numbers, [key]: value });
      setResult("Error: Invalid number");
    } else {
      setError(false);
      setNumbers({ ...numbers, [key]: value });
      if (numbers.number1 !== '' && numbers.number2 !== '') {
        setResult(parseFloat(numbers.number1) + parseFloat(numbers.number2));
      }
    }
  };

  return (
    <main>
      <h1>Calculator</h1>

      <label>A =</label>
      <input 
        value={numbers.number1} 
        onChange={(event) => handleInputChange(event, 'number1')} 
        style={{ borderColor: error ? 'red' : '' }}
      />

      <label>B =</label>
      <input 
        value={numbers.number2} 
        onChange={(event) => handleInputChange(event, 'number2')} 
        style={{ borderColor: error ? 'red' : '' }}
      />

      <label>A + B =</label>
      <input disabled value={result} style={{ color: error ? 'red' : '' }} />

      <button onClick={() => setResult(parseFloat(numbers.number1) + parseFloat(numbers.number2))}>Compute</button>
    </main>
  );
}

export default App;
