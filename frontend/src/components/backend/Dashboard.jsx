import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";

const Dashboard = () => {
    return (
        <>
            <Header />
            <main className="dashboard my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {/* Sidebar */}
                            <div className="card shadow border-0">
                                <div className="card-body">
                                    <h5>Sidebar</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-9 dashboard">
                            {/* Dashboard */}
                            <div className="card shadow border-0">
                                <div className="card-body d-flex justify-content-center align-items-center">
                                    <h5>Welcome to Dashboard</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}

export default Dashboard;