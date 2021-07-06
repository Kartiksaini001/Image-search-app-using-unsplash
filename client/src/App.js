import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import DisplayImages from "./components/DisplayImages";
import { Provider } from "react-redux";
import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header d-flex align-items-center justify-content-center">
          <SearchBar />
        </header>
        <main className="main-wrapper">
          <DisplayImages />
        </main>
      </div>
    </Provider>
  );
}

export default App;
