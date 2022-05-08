import Home from "./Pages/Home";
import Cuisens from "./components/cuisens";
import Header from "./components/header";
import Searched from "./components/Searched";


function App() {
  return (
    <div className="App">
        <Header/>
        <Searched/>
        <Cuisens />
        <Home/>
    </div>
  );
}

export default App;
