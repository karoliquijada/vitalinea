import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/home.pages";

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
};

export default App;
