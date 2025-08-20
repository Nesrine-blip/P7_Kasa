import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header/Header.jsx";
import Footer from "./layout/Footer/Footer.jsx";
import MainContent from "./layout/MainContent/MainContent.jsx";
import HomePage from "./pages/HomePage/HomePage.jsx";
import AboutPage from "./pages/AboutPage/AboutPage.jsx";
import LogementPage from "./pages/LogementPage/LogementPage.jsx";
import Errorpage from "./pages/ErrorPage/ErrorPage.jsx";

const App = () => {
  return (
    <Router>
      <Header />
      <MainContent>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/logement" element={<LogementPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </MainContent>
      <Footer />
    </Router>
  );
};
export default App;
