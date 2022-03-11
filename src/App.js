import { Route, Routes } from "react-router-dom";
import './App.css';
import Header from "./components/Header";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Header />} />
      </Routes>
    </div>
  );
}

export default App;
