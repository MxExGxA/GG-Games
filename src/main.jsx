import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import store from "./redux/store.js";
import { BrowserRouter } from "react-router-dom";
import { ReactLenis } from "@studio-freight/react-lenis";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Provider store={store}>
      <ReactLenis root>
        <App />
      </ReactLenis>
    </Provider>
  </BrowserRouter>
);
