import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Sample, ModiNavbar, ModiDropdown, ModiCard, ModiAbout, ModiProductDetails } from "./components";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <ModiNavbar dropdown={<ModiDropdown dropdownItems={["Add new product", "Manage"]} />} />
      {/* <ModiAbout></ModiAbout> */}
      <div className="row w-100 mt-5 mb-3 pt-4">
        <div className="col-md-6 mx-auto">
          <ModiAbout></ModiAbout>
        </div>
      </div>

      <div className="row w-100">
        <div className="col-md-6">
          <ModiCard></ModiCard>
        </div>
        <div style={{height:"70vh"}} className="col-md-6 border px-0 ">
          <ModiProductDetails></ModiProductDetails>
        </div>
      </div>
      {/* </header> */}
    </div>
  );
}

export default App;
