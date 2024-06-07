import React, { useState } from "react";

function App() {
  const [isRaining, setIsRaining] = useState(false);

  function onSunClick() {
    setIsRaining(false);
  }

  function onRainClick() {
    setIsRaining(true);
  }

  function getTitle() {
    const title = isRaining ? "Rain time" : "Sun time";
    return title;
  }

  function getBackgroundColor() {
    const style = isRaining ? "rainy" : "sunny";
    return style;
  }

  return (
    <main className={getBackgroundColor()}>
      <h1>{getTitle()}</h1>
      <button onClick={onSunClick}>Sunny Time</button>
      <button onClick={onRainClick}>Rain Time</button>
    </main>
  );
}

export default App;
