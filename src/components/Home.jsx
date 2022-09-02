import React from 'react'
import bg1 from '../assets/landingBackground/bg1.jpg'
import bg2 from '../assets/landingBackground/bg2.jpg'
import bg3 from '../assets/landingBackground/bg3.jpg'
import runningDog from '../assets/runningDogNoBG.png'
import { Link } from 'react-router-dom'

function Home() {
	return (
		<main role="main">
		<div id="landingCarousel" className="carousel slide" data-ride="carousel" data-bs-pause="false">
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
            <div className="carousel-caption d-block display-3 landing-header logo">The Pet Stop</div>
        </div>

        <section className="section gray-background">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-md-7 align-self-center text-center text-md-left p-5">
                        <div className="content">
                            <h2 className="subheading text-white font-weight-bold mb-10">A new friend is waiting to meet you!</h2>
                            <p className="text-white">If you're looking for a new pet, you've come to the right place! Welcome to The Pet Stop, your one-stop shop for all your pet needs. We offer a wide variety of cats, dogs, and other animals to choose from, all at the most competitive prices in town. Whether you're looking for a new furry friend to join your family, or simply need to restock on pet supplies, we've got you covered.</p>
                            <p className="text-white">Come and visit us today!</p>
                        </div>
                    </div>
                    <div className="col-md-5 d-none d-md-block text-center mb-5 mb-lg-0 justify-content-end">
                        <img className="img-fluid" src={runningDog} alt="Running dog photo"/>
                    </div>
                </div>
            </div>
        </section>

        <div className="container">
            <div className="row py-5">
                <div className="col-md-4">
                    <h2>How It Works</h2>
                    <p>If you're thinking about adding a furry friend to your family, you're probably wondering how the process of buying a pet works. Here's a quick overview of what you can expect when buying a pet from The Barketplace to help you navigate
                        the pet adoption process.
                    </p>
                    <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-md-4">
                    <h2>Pet Care Tips</h2>
                    <p>Are you looking to become new pet owner? Congratulations! Caring for a pet can be a rewarding experience. It can also be a lot of work. To help you get started, we've put together a list of tips for new pet owners. From choosing the
                        right pet to providing proper care and nutrition, we'll help you get off to a good start.
                    </p>
                    <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div className="col-md-4">
                    <h2>Shop</h2>
                    <p>Whether you're looking for a new best friend or just a furry companion, we have the perfect pet for you! We have a wide variety of animals to choose from, all of which are healthy and well-cared for. Our staff is passionate about animals
                        and will help you find the perfect match for your lifestyle and personality.</p>
                    <p><Link className="btn btn-secondary" to="/shop" role="button">Shop All Pets &raquo;</Link></p>
                </div>
            </div>
        </div>
    </main>
	)
}

export default Home