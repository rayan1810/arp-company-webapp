import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Sample, ModiNavbar, ModiDropdown } from "./components";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <ModiNavbar dropdown={<ModiDropdown dropdownItems={["Add new product", "Manage"]} />} />
          <Sample data="Actual Retail Price WEBSITE" />
      </header>
    </div>
  );
}

export default App;
