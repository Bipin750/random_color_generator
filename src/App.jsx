import { useState } from "react";
import "./App.css";
import RandomColor from "./RandomColor";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>Random Color Generator</div>
      <RandomColor />
    </>
  );
}

export default App;
