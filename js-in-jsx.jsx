Ab JavaScript ko JSX me use karte hain
Code change karo:

import "./App.css";
function App() {

  const name = "Shiv";

  return (
    <div>
      <h1>Hello {name}</h1>
    </div>
  );
}

export default App;

Browser me output------
Hello Shiv
