import React from 'react'
import bg1 from '../assets/landingBackground/bg1.jpg'
import bg2 from '../assets/landingBackground/bg2.jpg'
import bg3 from '../assets/landingBackground/bg3.jpg'
import runningDog from '../assets/runningDogNoBG.png'
import { dogList } from '../assets/dogList.js'
import { Link } from 'react-router-dom'
import Dog1 from '../assets/petImages/dogs/Bulldog1.jpg'
import Dog2 from '../assets/petImages/dogs/Bulldog2.jpg'
import Dog3 from '../assets/petImages/dogs/Bulldog3.webp'
import Dog4 from '../assets/petImages/dogs/Bulldog4.jpg'
import Dog5 from '../assets/petImages/dogs/Bulldog5.webp'
import Dog6 from '../assets/petImages/dogs/Retriever1.jpg'
import Dog7 from '../assets/petImages/dogs/Retriever2.jpg'
import Dog8 from '../assets/petImages/dogs/Retriever3.jpeg'
import Dog9 from '../assets/petImages/dogs/Retriever4.jpg'
import Dog10 from '../assets/petImages/dogs/Retriever5.jpg'

function Home() {
	const dogs = dogList();

	const dogsArray = dogList();

	const photoArray = [Dog1,Dog2,Dog3,Dog4,Dog5,Dog6,Dog7,Dog8,Dog9,Dog10]

	const dogsJSX = dogsArray.map(dog => {
		return (
			<div key={dog.id} className='card my-3 mx-5' style={{ color: "inherit", textDecoration: "inherit" , maxWidth: "280px"}}>
				<img className="card-img-top" src={photoArray[Math.floor(Math.random() * photoArray.length)]} alt="Large Server Room" style={{overflow: "hidden", objectFit: "cover"}} />
				<div className="card-body">
					<h5 className="card-title">{dog.name}</h5>
					<p className="card-text">{dog.description}</p>
					{/* <button className="btn btn-primary">Read More &raquo;</button> */}
				</div>
			</div>
		)
	});


	return (
		<main role="main container d-flex justify-content-center py-3">
		<div id="landingCarousel" className="carousel slide" data-ride="carousel" style={{maxHeight: "14vw", overflow: "auto"}}>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img className="d-block w-100 carousel-image" src={bg1} alt="First slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 carousel-image" src={bg2} alt="Second slide" />
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100 carousel-image" src={bg3} alt="Third slide"/>
                </div>
            </div>
            <div className="carousel-caption d-block display-3 landing-header logo">Shop</div>
        </div>

				<h1 className='py-4' style={{fontSize: "60pt"}}>Our Pets</h1>
			<div className="row row-cols-2 row-cols-lg-5 row-cols-xl-6 g-4 justify-content-center">
				{dogsJSX}
			</div>

        <section className="section bg-success">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-md-7 align-self-center text-center text-md-left p-5">
                        <div className="content">
                            <h2 className="subheading text-white font-weight-bold mb-10">That's all fur now!</h2>
                            <p className="text-white">We hope you find what you're looking for! If you need any help, please feel free to <Link to="/contact" style={{color: "#aaf"}}>Contact Us</Link></p>
                        </div>
                    </div>
                    <div className="col-md-5 d-none d-md-block text-center mb-5 mb-lg-0 justify-content-end">
                        <img className="img-fluid" src={runningDog} alt="Running dog photo"/>
                    </div>
                </div>
            </div>
        </section>
    </main>
	)
}

export default Home