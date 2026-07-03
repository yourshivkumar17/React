📘 Chapter 5: Event Handling + onChange
Problem

Agar user apna naam type kare to screen par live dikhna chahiye.

Example:

Enter Name

Shiv Kumar

Hello Shiv Kumar 👋

Ye React ka bahut common interview question hai.

Step 1: App.jsx----------------
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");

  return (
    <div className="container">
      <h1>React Input Demo</h1>

      <input
        type="text"
        placeholder="Enter Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h2>Hello {name}</h2>
    </div>
  );
}

export default App;
----------------
  Output
React Input Demo

+--------------------------+
| Enter Your Name          |
+--------------------------+

Hello Shiv

Jaise hi tum type karoge

S
Sh
Shi
Shiv

Neeche bhi live update hoga.
