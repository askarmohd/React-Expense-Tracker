import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "./context/context";
import App from "./App";
import "./index.css";
import {SpeechProvider} from '@speechly/react-client';

ReactDOM.render(
  <SpeechProvider appId="558922bb-1a10-44e2-92c7-225f266a3d4d" language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,

  document.getElementById("root")
);
