import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Homes";
import { About } from "./pages/About";
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";


function App() {
  return (
    <>
    <Navbar/>
    <Container className="mb-4">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Store />} />
        <Route path="/" element={<About />} />
      </Routes>
      </Container>
      </>
  );
}

export default App;
