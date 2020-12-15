import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Sample, ModiNavbar, ModiDropdown, ModiCard } from "./components";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <ModiNavbar dropdown={<ModiDropdown dropdownItems={["Add new product", "Manage"]} />} />
        <div className="row w-100 mt-5 pt-4">
          <div className="col-md-8">
            <ModiCard></ModiCard>
          </div>
          <div className="col-md-4 bg-primary">lol</div>
        </div>
      {/* </header> */}
    </div>
  );
}

export default App;
