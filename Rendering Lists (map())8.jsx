📘 Chapter 7 : Rendering Lists (map())
Problem

Maan lo tumhare paas 5 students hain.

Shiv
Rahul
Aman
Rohit
Amit

Kya tum aise likhoge? ❌

<h2>Shiv</h2>
<h2>Rahul</h2>
<h2>Aman</h2>
<h2>Rohit</h2>
<h2>Amit</h2>

Agar 100 students ho gaye to? 😅

Isliye React me map() use karte hain.
  --------------------------------------
  React me map() use karte waqt key dena hota hai.
  
  import "./App.css";

function App() {
  const students = [
    {
      id: 1,
      name: "Shiv Kumar",
      course: "B.Tech CSE",
      city: "Agra",
    },
    {
      id: 2,
      name: "Rahul Kumar",
      course: "BCA",
      city: "Delhi",
    },
    {
      id: 3,
      name: "Aman Singh",
      course: "MCA",
      city: "Jaipur",
    },
  ];

  return (
    <div className="container">
      <h1>Student List</h1>

      {students.map((student) => (
        <div className="card" key={student.id}>
          <h2>{student.name}</h2>
          <p>Course : {student.course}</p>
          <p>City : {student.city}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
