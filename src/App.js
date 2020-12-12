import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Sample, ModiNavbar } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ModiNavbar />
        <Sample data="Actual Retail Price WEBSITE" />
      </header>
    </div>
  );
}

export default App;
