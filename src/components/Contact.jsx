import React from 'react'
import bg1 from '../assets/landingBackground/bg1.jpg'
import bg2 from '../assets/landingBackground/bg2.jpg'
import bg3 from '../assets/landingBackground/bg3.jpg'
import runningDog from '../assets/runningDogNoBG.png'

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
            <div className="carousel-caption d-block display-3 landing-header logo">Contact Us</div>
        </div>

<section className="mb-4 container">

    <h2 className="h1-responsive font-weight-bold text-center my-4">Get in touch</h2>
    <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.</p>

    <div className="row">

        <div className="col-md-9 mb-md-0 mb-5">
            <form id="contact-form" name="contact-form" action="mail.php" method="POST">

                <div className="row">

                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="name" name="name" className="form-control" />
                            <label for="name" className="">Your name</label>
                        </div>
                    </div>

                    <div className="col-md-6">
                        <div className="md-form mb-0">
                            <input type="text" id="email" name="email" className="form-control" />
                            <label for="email" className="">Your email</label>
                        </div>
                    </div>

                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="md-form mb-0">
                            <input type="text" id="subject" name="subject" className="form-control" />
                            <label for="subject" className="">Subject</label>
                        </div>
                    </div>
                </div>

                <div className="row">

                    <div className="col-md-12">

                        <div className="md-form">
                            <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                            <label for="message">Your message</label>
                        </div>

                    </div>
                </div>

            </form>

            <div className="text-center text-md-left">
                <a className="btn btn-primary" onclick="document.getElementById('contact-form').submit();">Send</a>
            </div>
            <div className="status"></div>
        </div>

        <div className="col-md-3 text-center">
            <ul className="list-unstyled mb-0">
                <li><i className="fas fa-map-marker-alt fa-2x"></i>
                    <p>Cincinnati, OH, 45016</p>
                </li>

                <li><i className="fas fa-phone mt-4 fa-2x"></i>
                    <p>+1 234 567 8901</p>
                </li>

                <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                    <a href='mailto:contact@thepetstop.com'>contact@thepetstop.com</a>
                </li>
            </ul>
        </div>

				</div>

</section>
    </main>
	)
}

export default Home