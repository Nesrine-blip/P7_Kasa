import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- Pages ---
import HomePage from "./pages/HomePage/HomePage.jsx";
import LogementPage from "./pages/LogementPage/LogementPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";

// --- Layout ---
import Header from "./layout/Header/Header.jsx";
import Footer from "./layout/Footer/Footer.jsx";
import MainContent from "./layout/MainContent/MainContent.jsx";

const App = () => {
  return (
    <Router>
      {/* --- Header --- */}
      <Header />

      {/* --- Main content area --- */}
      <MainContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/logement/:id" element={<LogementPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MainContent>

      {/* --- Footer --- */}
      <Footer />
    </Router>
  );
};

export default App;
