import React from 'react'
import bg1 from '../assets/landingBackground/bg1.jpg'
import bg2 from '../assets/landingBackground/bg2.jpg'
import bg3 from '../assets/landingBackground/bg3.jpg'
import runningDog from '../assets/runningDogNoBG.png'

function Home() {
	return (
		<main role="main">
		<div id="landingCarousel" class="carousel slide" data-ride="carousel" data-bs-pause="false">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="d-block w-100 carousel-image" src={bg1} alt="First slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 carousel-image" src={bg2} alt="Second slide" />
                </div>
                <div class="carousel-item">
                    <img class="d-block w-100 carousel-image" src={bg3} alt="Third slide"/>
                </div>
            </div>
            <div class="carousel-caption d-block display-3 landing-header logo">The Pet Stop</div>
        </div>

        <section class="section gray-background">
            <div class="container-fluid p-0">
                <div class="row">
                    <div class="col-md-7 align-self-center text-center text-md-left p-5">
                        <div class="content">
                            <h2 class="subheading text-white font-weight-bold mb-10">A new friend is waiting to meet you!</h2>
                            <p class="text-white">If you're looking for a new pet, you've come to the right place! At The Barketplace, we have a wide variety of animals to choose from. Whether you're looking for a furry friend or a scaly companion, we have the perfect pet
                                for you.</p>
                            <p class="text-white">Come and visit us today!</p>
                        </div>
                    </div>
                    <div class="col-md-5 d-none d-md-block text-center mb-5 mb-lg-0 justify-content-end">
                        <img class="img-fluid" src={runningDog} alt="Running dog photo"/>
                    </div>
                </div>
            </div>
        </section>

        <div class="container">
            <div class="row py-5">
                <div class="col-md-4">
                    <h2>How It Works</h2>
                    <p>If you're thinking about adding a furry friend to your family, you're probably wondering how the process of buying a pet works. Here's a quick overview of what you can expect when buying a pet from The Barketplace to help you navigate
                        the pet adoption process.
                    </p>
                    <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div class="col-md-4">
                    <h2>Pet Care Tips</h2>
                    <p>Are you looking to become new pet owner? Congratulations! Caring for a pet can be a rewarding experience. It can also be a lot of work. To help you get started, we've put together a list of tips for new pet owners. From choosing the
                        right pet to providing proper care and nutrition, we'll help you get off to a good start.
                    </p>
                    <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                </div>
                <div class="col-md-4">
                    <h2>Shop</h2>
                    <p>Whether you're looking for a new best friend or just a furry companion, we have the perfect pet for you! We have a wide variety of animals to choose from, all of which are healthy and well-cared for. Our staff is passionate about animals
                        and will help you find the perfect match for your lifestyle and personality.</p>
                    <p><a class="btn btn-secondary" href="#" role="button">Shop All Pets &raquo;</a></p>
                </div>
            </div>
        </div>
    </main>
	)
}

export default Home