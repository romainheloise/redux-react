import "./App.css";
import CounterContainer from "./component/CounterContainer";
import ResultCounter from "./component/ResultCounter";

function App() {
  return (
    <div className="App">
      <ResultCounter />
      <CounterContainer />
    </div>
  );
}

export default App;
