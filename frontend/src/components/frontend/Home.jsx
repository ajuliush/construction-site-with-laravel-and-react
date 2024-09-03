import React from "react";
import AboutImg from "../../assets/images/about-us.jpg";
import Header from "../common/Header";
import Footer from "../common/Footer";
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
                  {" "}
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
      </main>
      <Footer />
    </>
  );
};
export default Home;
