import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider,theme } from "@chakra-ui/react";
// import ColorModeSwitcher from "./components/ColorModeSwitcher.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      {/* <ColorModeSwitcher /> */}
      <App />
    </ChakraProvider>
  </React.StrictMode>
);