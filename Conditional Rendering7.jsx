📘 Chapter 6: Conditional Rendering
Conditional Rendering kya hoti hai?

Condition ke hisaab se UI dikhana ya chhupana.

Jaise:

Login hai → Logout button dikhao.
Login nahi hai → Login button dikhao.
Password hide/show.
Dark/Light Theme.

Ye sab Conditional Rendering hai.
  ---------------------------------
  import { useState } from "react";
import "./App.css";

function App() {
  const [login, setLogin] = useState(false);

  return (
    <div className="container">
      <h1>{login ? "Welcome Shiv 👋" : "Please Login"}</h1>

      <button onClick={() => setLogin(!login)}>
        {login ? "Logout" : "Login"}
      </button>
    </div>
  );
}

export default App;
---------------------
  Output
Page Open
Please Login

[ Login ]

Button click

Welcome Shiv 👋

[ Logout ]

Dobara click

Please Login

[ Login ]
