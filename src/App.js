import "./App.css";
import Body from "./components/Body";
// import Footer from "./components/Footer";
import Imageslider from "./components/Imageslider";

function App() {
  const style = {
    textAlign: "center",
    backgroundColor: "rgb(194, 194, 232)",
  };
  return (
    <div className="App">
      <Body />
      <h1 style={style}>Our partnars</h1>
      <Imageslider />
    </div>
  );
}

export default App;
