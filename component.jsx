📘 Chapter 2: Components
Component kya hota hai?

Socho tum ek website bana rahe ho.

Website
│
├── Navbar
├── Hero Section
├── About
├── Services
├── Footer

React me in sab ko alag-alag Component banaya jata hai.

Isse code:

✅ Clean rehta hai.
✅ Reuse ho sakta hai.
✅ Samajhna aur maintain karna aasan hota hai.
Step 1: Naya Component banao

src folder ke andar ek nayi file banao.

Naam:

Welcome.jsx
Step 2: Welcome.jsx me ye code likho---
  
function Welcome() {
  return (
    <div>
      <h2>Welcome to My React App</h2>
    </div>
  );
}

export default Welcome;

Ye ek naya component hai.

Step 3: App.jsx me ye code likho----

import "./App.css";
import Welcome from "./Welcome";

function App() {
  return (
    <div>
      <h1>Hello Shiv 👋</h1>

      <Welcome />
    </div>
  );
}

export default App;
Output-------

Browser me dikhega:
-----------------------
Hello Shiv 👋

Welcome to My React App
