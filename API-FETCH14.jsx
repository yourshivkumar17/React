Ab industry me sabse pehla aur sabse important use hai:

🚀 API Fetch using useEffect

Ye har React developer ko aana chahiye.

API kya hoti hai?

API ka matlab hai server se data lana.

Jaise:

Users
Products
Movies
Weather

Sab API se aata hai.

Sabse Easy API Example
App.jsx================

import { useEffect } from "react";

function App() {

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  return (
    <div>
      <h1>API Demo</h1>
    </div>
  );
}

export default App;
---------------------------------
Output
Browser
API Demo
Console (F12)
[
  {id:1, name:"Leanne Graham"},
  {id:2, name:"Ervin Howell"},
  ...
]
------------------------------------
Easy Example 2 (Sirf Pehla User)

Agar poori list nahi dekhni, sirf pehla user dekhna hai.

import { useEffect } from "react";

function App() {

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data[0]));
  }, []);

  return (
    <h1>API Demo</h1>
  );
}

export default App;
Console
{
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz"
}
-----------------------------------
Easy Example 3 (Sirf Name)
import { useEffect } from "react";

function App() {

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => console.log(data[0].name));
  }, []);

  return (
    <h1>API Demo</h1>
  );
}

export default App;
Console
Leanne Graham
