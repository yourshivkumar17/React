📘 Chapter 12 : Object State (⭐⭐⭐⭐⭐)

Abhi tum aise likh rahe ho:

const [name, setName] = useState("");
const [email, setEmail] = useState("");

Agar 10 inputs ho gaye?

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [city, setCity] = useState("");
const [phone, setPhone] = useState("");
const [age, setAge] = useState("");

😅 Code bahut bada ho jayega.

Industry Style

Ek hi state me sab kuch.

const [user, setUser] = useState({
  name: "",
  email: "",
});

Ab sirf 1 state hai.

App.jsx----------------

import { useState } from "react";
import "./App.css";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  return (
    <div className="container">
      <h1>Registration Form</h1>

      <input
        type="text"
        placeholder="Enter Name"
        onChange={(e) =>
          setUser({
            ...user,
            name: e.target.value,
          })
        }
      />

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) =>
          setUser({
            ...user,
            email: e.target.value,
          })
        }
      />

      <button
        onClick={() =>
          alert(
            `Name : ${user.name}\nEmail : ${user.email}`
          )
        }
      >
        Submit
      </button>
    </div>
  );
}

export default App;-------------------------------
  Output

{
 name:"Shiv",
 email:"shiv@gmail.com"
}

Name bhi bach gaya.
