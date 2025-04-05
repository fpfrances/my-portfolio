import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Quotes from "./pages/Quotes";
import Blog from "./pages/Blog";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/About" element={<About />} />
        <Route path="/pages/Projects" element={<Projects />} />
        <Route path="/pages/Blog" element={<Blog />} />
        <Route path="/pages/Quotes" element={<Quotes />} />
      </Routes>
    </Router>
  );
}
export default App;