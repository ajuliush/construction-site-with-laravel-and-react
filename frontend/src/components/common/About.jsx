import React from "react";
import AboutImg from "../../assets/images/about-us.jpg";

const About = () => {
    return (
        <section className="section-2 py-5">
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <img src={AboutImg} alt="" className="w-100" />
                    </div>
                    <div className="col-md-6">
                        <span>About Us</span>
                        <h2>
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolores, fuga. Minus sapiente fugit magnam quibusdam nam
                            nulla? Adipisci ad magni officiis saepe nihil excepturi ea,
                            voluptates doloribus fuga repudiandae facere!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Dolores, fuga. Minus sapiente fugit magnam quibusdam nam
                            nulla? Adipisci ad magni officiis saepe nihil excepturi ea,
                            voluptates doloribus fuga repudiandae facere!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;