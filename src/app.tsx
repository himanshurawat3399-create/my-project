import "./app.css";
import Navbar  from "./components/Navbar";
import Home from "./pages/Home";

export function App() {

  return (
    <div>
      <Navbar />
        <Home/>
    </div>
  );
}
