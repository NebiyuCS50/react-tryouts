import "./App.css";

function Listitems(props) {
  return <li>{props.myFav}</li>;
}

function List(props) {
  return (
    <ul>
      {props.myFav.map((animal) => {
        return <Listitems key={animal} myFav={animal} />;
      })}
    </ul>
  );
}

function App() {
  const myFav = ["Lion", "Cow", "Snake", "Lizard"];
  return (
    <div>
      <h1>My Favorite Animals: </h1>
      <List myFav={myFav} />
    </div>
  );
}

export default App;
