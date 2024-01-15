import React from "react";
import ReactDOM from "react-dom";
import SwaggerUI from "swagger-ui-react";

import "swagger-ui-react/swagger-ui.css";
const spec = require("./swagger-config.yaml");
function App() {
  return (
    <div className="App">
      <SwaggerUI url={spec} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
