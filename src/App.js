import { Route, Routes } from "react-router-dom";
import Home from "./containers/Home";
import Publisher from "./containers/Publisher";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path=":publisher" element={<Publisher />} />
        </Route>
      </Routes>
    </div>
  );
}
