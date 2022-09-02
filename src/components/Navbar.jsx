import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
	return (
		<nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark p-1">
		<Link className="navbar-brand nav-logo p-0" to="/">The Pet Stop</Link>
		<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
			<span className="navbar-toggler-icon"></span>
		</button>

	<div className="collapse navbar-collapse" id="navbarsExampleDefault">
			<ul className="navbar-nav mr-auto">
					<li className="nav-item active">
							<Link className="nav-link" to="/">Home</Link>
					</li>
					<li className="nav-item dropdown">
							<Link className="nav-link dropdown-toggle" to="./shop" id="dropdown01" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dogs</Link>
							<div className="dropdown-menu" aria-labelledby="dropdown01">
									<Link className="dropdown-item" to="/shop">Retrievers</Link>
									<Link className="dropdown-item" to="/shop">Bulldogs</Link>
									<Link className="dropdown-item" to="/shop">Beagles</Link>
									<Link className="dropdown-item" to="/shop">Poodles</Link>
									<Link className="dropdown-item" to="/shop">Other</Link>
							</div>
					</li>
					<li className="nav-item">
							<Link className="nav-link" to="/shop">Cats</Link>
					</li>
					<li className="nav-item">
							<Link className="nav-link" to="/shop">Other Pets</Link>
					</li>
					<li className="nav-item">
							<Link className="nav-link" to="/about">About Us</Link>
					</li>
					<li className="nav-item">
							<Link className="nav-link" to="/contact">Contact</Link>
					</li>

			</ul>
	</div>
</nav>
	)
}

export default Navbar