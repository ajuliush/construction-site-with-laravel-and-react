import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from '../common/Hero';
import ServiceImg from "../../assets/images/construction1.jpg";

const Services = () => {
    return (
        <>
            <Header />
            <Hero
                preHeading='Welcome.Amazing .Construction'
                heading='Services'
                text='Lorem ipsum dolor sit amat consectetur adipisicing edit<br/>Dolores praesentium, aut accusantium quos, rerum.'
            />
            <section className="section-3 bg-light py-5">
                <div className="container py-5">
                    <div className="section-header text-center">
                        <span>Our Services</span>
                        <h2>Lorem ipsum dolor sit amet </h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore possimus vel porro recusandae, libero distinctio. Incidunt fugiat dolores, quasi inventore sed dignissimos neque, provident, libero tempora animi et laudantium!</p>
                    </div>
                    <div className="row pt-5">
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ServiceImg} alt="" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Specially Construction</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis possimus saepe commodi rem animi
                                        </p>
                                    </div>
                                    <a href="" className="btn btn-primary small">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ServiceImg} alt="" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Specially Construction</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis possimus saepe commodi rem animi
                                        </p>
                                    </div>
                                    <a href="" className="btn btn-primary small">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ServiceImg} alt="" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Specially Construction</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis possimus saepe commodi rem animi
                                        </p>
                                    </div>
                                    <a href="" className="btn btn-primary small">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ServiceImg} alt="" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Specially Construction</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis possimus saepe commodi rem animi
                                        </p>
                                    </div>
                                    <a href="" className="btn btn-primary small">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ServiceImg} alt="" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Specially Construction</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis possimus saepe commodi rem animi
                                        </p>
                                    </div>
                                    <a href="" className="btn btn-primary small">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4 col-lg-4">
                            <div className="item">
                                <div className="service-image">
                                    <img src={ServiceImg} alt="" className="w-100" />
                                </div>
                                <div className="service-body">
                                    <div className="service-title">
                                        <h3>Specially Construction</h3>
                                    </div>
                                    <div className="service-content">
                                        <p>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis possimus saepe commodi rem animi
                                        </p>
                                    </div>
                                    <a href="" className="btn btn-primary small">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}
export default Services