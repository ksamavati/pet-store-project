import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';

function App() {
    return ( 
			<div className = "App" >
			<Navbar />
			<Home />

    <footer class="container">
        <p>&copy; The Barketplace 2022</p>
    </footer>
			</div>
    );
}

export default App;