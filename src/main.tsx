import { render } from "preact";
import "./index.css";
import { App } from "./app.tsx";
import { Provider } from "@/components/ui/provider";

render((
  <Provider>
    <App />
  </Provider>
), document.getElementById("app")!);

//useTransition - simulates loading states
//pagination