import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navigation-Bar/Navbar';
import Hero from './Components/Hero/Hero';
import Third from './Components/Third/Third';
import Forth from './Components/Forth/About';
import Pricing from './Components/Fifth/Pricing';
import Sixth from './Components/Sixth/Sixth';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Third/>
      <Forth/>
      <Pricing/>
      <Sixth/>
      <Footer/>
    </>
  );
}

export default App;
