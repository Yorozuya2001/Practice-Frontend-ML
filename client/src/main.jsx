import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import { MyContextProvider } from "./context/context";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <MyContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </MyContextProvider>
);

export const backURL = "http://localhost:3000";
