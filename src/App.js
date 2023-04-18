import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Header from "./components/Header";
import Footer from './components/Footer';
import Container from "./components/Container";
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CV from "./pages/CV";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/contact" element={<Contact/>} />
            <Route path="/cv" element={<CV/>} />
          </Routes>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
