📘 Chapter 3: Props
Props kya hote hain?

Props ka matlab hota hai Properties.

Iski help se hum ek component ko alag-alag data bhejte hain.

Example:

Socho ek Student Card hai.

Tumhare class me 100 students hain.

Kya 100 alag components banaoge? ❌

Nahi.

Ek hi component banaoge aur har student ka data props se bhejoge. ✅
Step 1: Student.jsx banao

src folder me ek file banao.
Student.jsx
Usme ye code likho.---

Destructuring (Industry Standard)

Ab industry me aise nahi likhte

props.name

Hum aise likhte hain.

function Student({ name, age, city }) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Age : {age}</p>
      <p>City : {city}</p>
    </div>
  );
}

export default Student;

Ye zyada clean code hai.

  Step 2: App.jsx
import "./App.css";
import Student from "./Student";

function App() {
  return (
    <div>
      <Student
        name="Shiv Kumar"
        age={22}
        city="Agra"
      />
    </div>
  );
}

export default App;
Output-----
  ------------------
Shiv Kumar

Age: 22

City: Agra
