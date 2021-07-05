import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import DisplayImages from "./components/DisplayImages";

function App() {
  return (
    <div className="App">
      <header className="App-header d-flex align-items-center justify-content-center">
        <SearchBar />
      </header>
      <main className="main-wrapper">
        <DisplayImages />
      </main>
    </div>
  );
}

export default App;
