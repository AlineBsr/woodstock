import './styles/App.css';
import Header from './components/Header';
import About from './components/About';
import Shop from './components/Shop';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
        <Header />
        <About />
        <Shop />
        <Team />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
