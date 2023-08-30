import React from "react";
import ReactDOM from "react-dom/client";
import AuthContextProvider from "./context/AuthContext";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </AuthContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
