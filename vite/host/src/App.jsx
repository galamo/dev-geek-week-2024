import { useState } from "react";
import MyHeader from "remoteA/MyHeader";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>HOST </h1>
      <MyHeader />
    </>
  );
}

export default App;
