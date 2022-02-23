import 'bootstrap/dist/css/bootstrap.css';
import Nav from './components/Nav';
import Header from "./components/Header";
import About from "./components/About";
import Work from "./components/Work";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Header />
      <About path="/about" />
      <Work path="/work" />
      <Footer />
    </div>
  );
}

export default App;
