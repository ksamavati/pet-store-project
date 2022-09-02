import React from 'react'
import bg1 from '../assets/landingBackground/bg1.jpg'
import bg2 from '../assets/landingBackground/bg2.jpg'
import bg3 from '../assets/landingBackground/bg3.jpg'
import doggo from '../assets/dauchund.png'

function Home() {
	return (
		<main role="main">
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
            <div className="carousel-caption d-block display-3 landing-header logo">About Us</div>
        </div>

        <section className="section">
            <div className="container-fluid p-0">
                <div className="row justify-content-center">
                    <div className="col-md-7 align-self-center text-center text-md-left p-5">
                        <div className="content">
                            <h2 className="subheading font-weight-bold mb-10">A Place for All Your Pet Needs</h2>
                            <p>The Pet Stop is a pet store that has been serving the community for over 10 years. We offer a wide variety of pet supplies and services, and our friendly staff is always happy to help you find the perfect product for your pet. We believe in providing the best possible care for your pet, and our experienced team is always available to answer any questions you may have.</p>
                            <p>Come and visit us today!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="section gray-background">
            <div className="container-fluid p-0">
                <div className="row">
                    <div className="col-md-7 align-self-center text-center text-md-left p-5">
                        <div className="content">
                            <h1 className="subheading text-white font-weight-bold mb-10">Our History</h1>
                            <p className="text-white">The Pet Stop was founded in 1992 by husband and wife team, Steve and Mary. They had a shared love of animals, and they saw a need in their community for a pet store that offered quality products and services.</p>
														<p className="text-white">Since then, The Pet Stop has become a fixture in the community, and we're proud to say that we've helped thousands of pets and their owners over the years. We're constantly evolving to meet the needs of our customers, and we'll continue to be your go-to source for all things pet-related.</p>
                            <p className="text-white">Thank you for being a part of our story!</p>
                        </div>
                    </div>
                    <div className="col-md-5 d-none d-md-block text-center mb-5 mb-lg-0 justify-content-end">
                        <img className="img-fluid py-4" src={doggo} alt="Running dog photo" style={{maxHeight:"400px"}}/>
                    </div>
                </div>
            </div>
        </section>
    </main>
	)
}

export default Home