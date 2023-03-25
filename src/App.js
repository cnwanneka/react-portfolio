import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Chidi Nwanneka Portfolio</h1>
        <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Chidi Nwanneka</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Projects</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </header>
      <main>
        <section id="about">
          <h2>Hi! I'm Chidi Nwanneka</h2>
          <p>Web Developer</p>
        </section>
        <section id="skills">
          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Bootstrap</li>
            <li>Node.js</li>
            <li>React</li>
          </ul>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <div className="project">
            <h3>Project 1</h3>
            <p>On that day</p>
          </div>
          <div className="project">
            <h3>Project 2</h3>
            <p>Actor Search</p>
          </div>
        </section>
        <section id="contact">
          <h2>Contact Me</h2>
          <p>07891108762</p>
    
        </section>
      </main>
      
    </div>
  );
}

export default App;
