// Импорты React
import React from "react";
import ReactDOM from "react-dom/client";

// Импорты для Redux
import { createStore } from "redux";
import { rootReducer } from "./redux/rootReducer";
import { Provider } from "react-redux";

// Импорты собств. файлов/компонентов
import App from "./components/app/app";

// ========================================
const root = ReactDOM.createRoot(document.getElementById("root"));

const store = createStore(rootReducer);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
