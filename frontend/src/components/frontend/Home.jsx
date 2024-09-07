import React from "react";
import AboutImg from "../../assets/images/about-us.jpg";
import Header from "../common/Header";
import Footer from "../common/Footer";
import ServiceImg from "../../assets/images/construction1.jpg";
import ProjectImg from "../../assets/images/construction2.jpg";
import Icon1 from "../../assets/images/icon-1.svg";
import Icon2 from "../../assets/images/icon-2.svg";
import Icon3 from "../../assets/images/icon-3.svg";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        {/*Hero Section */}
        <section className="section-1">
          <div className="hero d-flex align-items-center">
            <div className="container-fluid">
              <div className="text-center">
                <span>Welcome Amazing Construction</span>
                <h1>
                  Crafting dreams with <br />
                  prescience and excellence.
                </h1>
                <p>
                  Lorem ipsum dolor sit amat consectetur adipisicing edit.
                  <br />
                  Dolores praesentium, aut accusantium quos, rerum.
                </p>
                <div className="mt-4">
                  <a className="btn btn-primary">Contact Now</a>
                  <a className="btn btn-secondary ms-2">View Projects</a>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*About Section */}
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
        {/*Our Services */}
        <section className="section-3 bg-light py-5">
          <div className="container-fluid py-5">
            <div className="section-header text-center">
              <span>Our Services</span>
              <h2>Lorem ipsum dolor sit amet </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore possimus vel porro recusandae, libero distinctio. Incidunt fugiat dolores, quasi inventore sed dignissimos neque, provident, libero tempora animi et laudantium!</p>
            </div>
            <div className="row pt-5">
              <div className="col-md-3 col-lg-3">
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
                    <a href="" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
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
                    <a href="" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
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
                    <a href="" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
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
                    <a href="" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*Why choose us */}
        <div className="section-4 py-5">
          <div className="container py-5">
            <div className="section-header text-center">
              <span>Why choose us</span>
              <h2>Lorem ipsum dolor sit amet </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore possimus vel porro recusandae,<br /> libero distinctio. Incidunt fugiat dolores, quasi inventore sed dignissimos neque, provident, libero tempora animi et laudantium!</p>
            </div>
            <div className="row pt-4">
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon1} alt="" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting-edg solutions</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, impedit? Enim ipsum quod eligendi, voluptas distinctio incidunt excepturi illo nemo optio ex amet placeat, aspernatur, necessitatibus ipsa officia quaerat reiciendis!</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon2} alt="" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting-edg solutions</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, impedit? Enim ipsum quod eligendi, voluptas distinctio incidunt excepturi illo nemo optio ex amet placeat, aspernatur, necessitatibus ipsa officia quaerat reiciendis!</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card shadow border-0 p-4">
                  <div className="card-icon">
                    <img src={Icon3} alt="" />
                  </div>
                  <div className="card-title mt-3">
                    <h3>Cutting-edg solutions</h3>
                  </div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, impedit? Enim ipsum quod eligendi, voluptas distinctio incidunt excepturi illo nemo optio ex amet placeat, aspernatur, necessitatibus ipsa officia quaerat reiciendis!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Our Projects */}
        <section className="section-3 bg-light py-5">
          <div className="container-fluid py-5">
            <div className="section-header text-center">
              <span>Our Projects</span>
              <h2>Lorem ipsum dolor sit amet </h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore possimus vel porro recusandae, libero distinctio. Incidunt fugiat dolores, quasi inventore sed dignissimos neque, provident, libero tempora animi et laudantium!</p>
            </div>
            <div className="row pt-5">
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ProjectImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Project Dhaka</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis possimus saepe commodi rem animi
                      </p>
                    </div>
                    <a href="" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ProjectImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Project Dhaka</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis possimus saepe commodi rem animi
                      </p>
                    </div>
                    <a href="" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ProjectImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Project Dhaka</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis possimus saepe commodi rem animi
                      </p>
                    </div>
                    <a href="" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3 col-lg-3">
                <div className="item">
                  <div className="service-image">
                    <img src={ProjectImg} alt="" className="w-100" />
                  </div>
                  <div className="service-body">
                    <div className="service-title">
                      <h3>Project Dhaka</h3>
                    </div>
                    <div className="service-content">
                      <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum blanditiis possimus saepe commodi rem animi
                      </p>
                    </div>
                    <a href="" className="btn btn-primary">Read More</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};
export default Home;
