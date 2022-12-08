import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import SeatPage from "./components/SeatPage";
import SessionsPage from "./components/SessionsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sessoes/:movieId" element={<SessionsPage />} />
        <Route path="/assentos/:sessionId" element={<SeatPage />} />
      </Routes>
    </BrowserRouter>
  );
}
