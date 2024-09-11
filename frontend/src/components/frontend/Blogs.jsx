import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from '../common/Hero';
import BlogImg from "../../assets/images/construction3.jpg";

const Blogs = () => {
    return (
        <>
            <Header />
            <main>
                <Hero
                    preHeading='Welcome.Amazing .Construction'
                    heading='blogs'
                    text='Lorem ipsum dolor sit amat consectetur adipisicing edit<br/>Dolores praesentium, aut accusantium quos, rerum.'
                />
                {/* Blogs & articales*/}
                <div className="section-6 bg-light py-5">
                    <div className="container">
                        <div className="section-header text-center">
                            <span>blogs & articales</span>
                            <h2>Lorem ipsum dolor sit amet </h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore possimus vel porro recusandae, libero distinctio. Incidunt fugiat dolores, quasi inventore sed dignissimos neque, provident, libero tempora animi et laudantium!</p>
                        </div>
                        <div className="row pt-3">
                            <div className="col-md-4 pb-3 pb-3">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="" className="w-100" />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="mb-3">
                                            <a href="#" className="title"> Dummy Title</a>
                                        </div>
                                        <a href="" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 pb-3 pb-3">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="" className="w-100" />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="mb-3">
                                            <a href="#" className="title"> Dummy Title</a>
                                        </div>
                                        <a href="" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 pb-3">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="" className="w-100" />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="mb-3">
                                            <a href="#" className="title"> Dummy Title</a>
                                        </div>
                                        <a href="" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 pb-3">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="" className="w-100" />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="mb-3">
                                            <a href="#" className="title"> Dummy Title</a>
                                        </div>
                                        <a href="" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 pb-3">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="" className="w-100" />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="mb-3">
                                            <a href="#" className="title"> Dummy Title</a>
                                        </div>
                                        <a href="" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 pb-3">
                                <div className="card shadow border-0">
                                    <div className="card-img-top">
                                        <img src={BlogImg} alt="" className="w-100" />
                                    </div>
                                    <div className="card-body p-4">
                                        <div className="mb-3">
                                            <a href="#" className="title"> Dummy Title</a>
                                        </div>
                                        <a href="" className="btn btn-primary small">Read More</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    )
}
export default Blogs