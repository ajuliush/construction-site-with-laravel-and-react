import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const NotFound = () => {
    return (
        <>
            <Header />
            <section className="section-9 bg-light py-5">
                <div className="container py-5">
                    <h1>404 - Not Found</h1>
                    <p>The page you are looking for does not exist.</p>
                    <a href={'/'} className="btn btn-primary">Go To Home</a >
                </div>
                <Footer />
            </section>
        </>
    );
};

export default NotFound;