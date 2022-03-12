import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import './App.css';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div className="app">
      <Header />
      <AppBody>
        <Sidebar />
        <Routes>
          <Route path="/" element={""} />
        </Routes>
      </AppBody>
    </div>
  );
};

export default App;

const AppBody = styled.main`
  display: flex;
  height: 100vh;
`;
