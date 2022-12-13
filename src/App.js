import Header from "./components/Header";
import MainPage from "./components/pages/MainPage";
import SessionsPage from "./components/pages/SessionsPage";
import SeatsPage from "./components/pages/SeatsPage";
import SucessPage from "./components/pages/SucessPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sessoes/:movieId" element={<SessionsPage />} />
        <Route path="/assentos/:sessionId" element={<SeatsPage />} />
        <Route path="/sucesso" element={<SucessPage />} />
      </Routes>
    </BrowserRouter>
  );
}
