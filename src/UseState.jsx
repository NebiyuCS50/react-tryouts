import { useState } from "react";

function Person() {
  const [person, setPerson] = useState({ name: "Nebiyu", age: 24 });
  const clicked = () => {
    const newAge = { ...person, age: person.age + 1 };
    setPerson(newAge);
  };
  return (
    <div>
      <h1>
        {person.name} is {person.age} years old.
      </h1>
      <button onClick={clicked}>Happy Birthday!</button>
    </div>
  );
}

export default Person;
