import "./App.css";

function Button({
  text = "Click me",
  color = "blue",
  fontSize = 12,
  marginTop = 20,
  handleButton,
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + "px",
    marginTop: marginTop + "px",
  };
  return (
    <button onClick={handleButton} style={buttonStyle}>
      {text}
    </button>
  );
}

function ButtonApp() {
  const handleButtonClick = (url) => {
    window.location.href =
      url == null || url == undefined ? "https://www.google.com" : url;
  };
  return (
    <div className="App">
      <Button
        text="Go to Google"
        color="red"
        fontSize={20}
        marginTop={30}
        handleButton={handleButtonClick()}
      />
    </div>
  );
}
export default ButtonApp;
