📘 Chapter 9 : Destructuring (⭐⭐⭐⭐⭐)
Destructuring kya hai?

Destructuring ka matlab hai object ya array se values ko alag-alag variables me nikalna.--------------

Example
App.jsx----------------------
import Student from "./Student";

function App() {
  return (
    <div>
      <Student
        name="Shiv"
        course="B.Tech CSE"
      />
    </div>
  );
}

export default App;
Student.jsx-------------------
function Student({ name, course }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>{course}</p>
    </div>
  );
}

export default Student;
Output--------------------------------
Shiv

B.Tech CSE
