import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import MainPage from "./components/MainPage";
import SessionsPage from "./components/SessionsPage";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sessoes/:sessionID" element={<SessionsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
