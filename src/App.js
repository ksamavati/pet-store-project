import './App.css';
import Home from './components/Home';

function App() {
    return ( 
			<div className = "App" >
				<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark p-1">
        	<a class="navbar-brand nav-logo p-0" href="./index.html">The Pet Stop</a>
        	<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
						<span class="navbar-toggler-icon"></span>
					</button>

        <div class="collapse navbar-collapse" id="navbarsExampleDefault">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="./index.html">Home</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="./shop.html" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dogs</a>
                    <div class="dropdown-menu" aria-labelledby="dropdown01">
                        <a class="dropdown-item" href="./shop.html">Retrievers</a>
                        <a class="dropdown-item" href="./shop.html">Bulldogs</a>
                        <a class="dropdown-item" href="./shop.html">Beagles</a>
                        <a class="dropdown-item" href="./shop.html">Poodles</a>
                        <a class="dropdown-item" href="./shop.html">Other</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./shop.html">Cats</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./shop.html">Other Pets</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="./about.html">About Us</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contact</a>
                </li>

            </ul>
        </div>
    </nav>

			<Home />

    <footer class="container">
        <p>&copy; The Barketplace 2022</p>
    </footer>
			</div>
    );
}

export default App;