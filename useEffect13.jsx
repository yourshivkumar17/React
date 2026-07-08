🚀 useEffect()

Ye React ka second most important Hook hai.

Iske bina API call, Timer, Page Load, Local Storage jaise kaam nahi hote.

useEffect kya hai?

Simple language me:

Component render hone ke baad jo code chalana ho, uske liye useEffect() use karte hain.

Example:

Page open hote hi "Welcome" print karna.
API se data lana.
Timer start karna.
Sabse Easy Example
import { useEffect } from "react";

function App() {

  useEffect(() => {
    alert("Welcome Shiv");
  }, []);

  return (
    <div>
      <h1>useEffect Demo</h1>
    </div>
  );
}

export default App;
------------------------------------------------------

[] kya hai?

Ye sabse important question hai.

useEffect(() => {

}, []);

Is [] ko Dependency Array kehte hain.

Matlab:

Sirf ek baar chalao (page load hone par).
