📘 Chapter 4: State (useState)

Ye React ka Heart ❤️ hai.

Ab tak hum sirf data dikha rahe the.

Ab hum data ko change bhi karenge.

State kya hoti hai?

State ek variable hota hai jiska value change ho sakta hai.

Example:

Counter App

Count : 0

Click

Count : 1

Click

Count : 2

Ye normal variable se possible nahi hai.

Iske liye React me State use hoti hai.

Step 1

App.jsx me ye code likho.

------------------------------------------
  import { useState } from "react";
import "./App.css";

function App() {

  const [count, setCount] = useState(0);

  return (
    <div>

      <h1>Count : {count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>

    </div>
  );
}

export default App;
--------------------------------------
  Count : 0

[ Increase ]
---------------------------------------
  ex-2
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1>Counter App</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        ➕ Increase
      </button>

      <button onClick={() => setCount(count - 1)}>
        ➖ Decrease
      </button>

      <button onClick={() => setCount(0)}>
        🔄 Reset
      </button>

      <button onClick={() => setCount(count * 2)}>
        ✖️ Double
      </button>
    </div>
  );
}

export default App;
