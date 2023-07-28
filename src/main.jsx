import React from "react";
import ReactDOM from "react-dom/client";
import AuthContextProvider from "./context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthContextProvider>
  </React.StrictMode>
);
