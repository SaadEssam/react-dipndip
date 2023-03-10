import './App.css';
import Navbar from './components/Navbar/Navbar';
import Header from './container/Header/Header';
import AboutUs from './container/AboutUs/AboutUs';
import SpecialMenu from './container/Menu/SpecialMenu';
import Blog from './container/Blog/Blog';
import Intro from './container/Intro/Intro';
import Gallery from './container/Gallery/Gallery';
import Footer from './container/Footer/Footer';

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <AboutUs />
      <SpecialMenu />
      <Blog />
      <Intro />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
