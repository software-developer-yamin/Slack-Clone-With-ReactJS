import { useAuthState } from "react-firebase-hooks/auth";
import { Route, Routes } from "react-router-dom";
import styled from "styled-components";
import './App.css';
import Chat from "./components/Chat";
import Header from "./components/Header";
import Loading from "./components/Loading";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import { auth } from "./firebase";


function App() {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loading />;

  return (
    <div className="app">
      {
        !user ? (
          <Login />
        ) : (
          <>
            <Header />
            <AppBody>
              <Sidebar />
              <Routes>
                <Route path="/" element={<Chat />} />
              </Routes>
            </AppBody>
          </>
        )
      }
    </div>
  );
};

export default App;

const AppBody = styled.main`
  display: flex;
  height: 100vh;
`;
