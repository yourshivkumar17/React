📘 Chapter 10 : Forms in React
Form kya hota hai?

Jahan user data enter karta hai.

Examples:

Login Form
Registration Form
Contact Form
Feedback Form

Example:

-----------------------
| Name      [______] |
| Email     [______] |
| Password  [______] |
|            [Submit]|
-----------------------
  App.jsx------
  import { useState } from "react";

function App() {
  const [name, setName] = useState("");

  return (
    <div>
      <h1>Form Demo</h1>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <button onClick={() => alert(name)}>
        Submit
      </button>
    </div>
  );
}

export default App;
