import "./dist/style.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  return (
    <div className='App'>
      <Header />
      <Main />
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default App;
