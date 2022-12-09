import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import SeatPage from "./components/SeatPage";
import SessionsPage from "./components/SessionsPage";
import SucessPage from "./components/SucessPage";

export default function App() {
  const [movie, setMovie] = useState(null);
  const [session, setSession] = useState(null);
  const [info, setInfo] = useState(null);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage setMovie={setMovie} />} />
        <Route
          path="/sessoes/:movieId"
          element={<SessionsPage setSession={setSession} />}
        />
        <Route
          path="/assentos/:sessionId"
          element={<SeatPage setInfo={setInfo} />}
        />
        <Route
          path="/sucesso"
          element={<SucessPage {...{ movie, session, info }} />}
        />
      </Routes>
    </BrowserRouter>
  );
}
