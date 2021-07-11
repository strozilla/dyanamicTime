import React, { useState } from "react";

function App() {
  let time = new Date().toLocaleTimeString();

  setInterval(getTime, 1000);

  const [now, currTime] = useState(time);

  function getTime() {
    const upTime = new Date().toLocaleTimeString();
    currTime(upTime);
  }

  return (
    <div className="container">
      <h1>{now}</h1>
      <button onClick={getTime}>Get Time</button>
    </div>
  );
}

export default App;
