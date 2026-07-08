📘 Chapter 11 : Multiple Inputs

Abhi tak humne sirf Name liya tha.

Ab hum lenge:

👤 Name
📧 Email
App.jsx---------------------------------------
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="container">
      <h1>Registration Form</h1>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <button
        onClick={() =>
          alert(`Name: ${name}\nEmail: ${email}`)
        }
      >
        Submit
      </button>
    </div>
  );
}

export default App;
Output----------------------------
Registration Form

[ Enter Name ]

[ Enter Email ]

[ Submit ]

Agar user likhe:

Name : Shiv

Email : shiv@gmail.com

Submit

Output

Name : Shiv

Email : shiv@gmail.com
