import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import LogementPage from "./pages/LogementPage/LogementPage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import Header from "./layout/Header/Header.jsx";
import Footer from "./layout/Footer/Footer.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/logement" element={<LogementPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
