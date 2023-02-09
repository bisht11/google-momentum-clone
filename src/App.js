import React from "react";
import Weather from "./components/Weather";
import Time from "./components/Time";
import DateTime from "./components/DateTime";
import Quote from "./components/Quote";

function App() {
  return (
    <div className="App">
      <Weather />
      <Time />
      <DateTime />
      <Quote />
    </div>
  );
}

export default App;
