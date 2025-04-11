import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import Router from "./Routes/Router";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
