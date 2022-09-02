import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import {Routes, Route} from 'react-router-dom';
import Shop from './components/Shop';
import About from './components/About';
import Contact from './components/Contact';

function App() {
    return ( 
			<div className = "App" >
			<Navbar />
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/pet-store-project/" element={<Home />} />
				<Route path="/shop" element={<Shop />} />
				<Route path="/about" element={<About />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>

			<footer className="bg-light text-muted text-center text-lg-start">
  <div className="text-center p-3" style={{backgroundColor: "rgba(0, 0, 0, 0.2)"}}>
	&copy; The Pet Stop 2022<br /><br />
        Disclaimer: The Pet Stop is a fictional pet store, and this website was created for educational purposes only. This website does not provide any real goods or services.<br />No animals were harmed in the making of this website.
  </div>
</footer>
			</div>
    );
}

export default App;