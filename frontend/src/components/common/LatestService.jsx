import React, { useState, useEffect } from "react";
import { apiUrl, fileUrl } from "../common/Http";

const LatestService = () => {
    const [services, setServices] = useState([]);

    const fetchLatestServices = async () => {
        const res = await fetch(apiUrl + 'get-latest-services?limit=4', {
            method: 'GET',
        });
        const result = await res.json();
        console.log(result);

        setServices(result.data);
    }
    useEffect(() => {
        fetchLatestServices();
    }, []);
    return (
        <section className="section-3 bg-light py-5">
            <div className="container-fluid py-5">
                <div className="section-header text-center">
                    <span>Our Services</span>
                    <h2>Lorem ipsum dolor sit amet </h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore possimus vel porro recusandae, libero distinctio. Incidunt fugiat dolores, quasi inventore sed dignissimos neque, provident, libero tempora animi et laudantium!</p>
                </div>
                <div className="row pt-5">
                    {
                        services && services.map((service, index) => {
                            return (
                                <div className="col-md-3 col-lg-3" key={service.id || index}>
                                    <div className="item">
                                        <div className="service-image">
                                            <img src={`${fileUrl}uploads/services/small/${service.image}`} alt="" className="w-100" />
                                        </div>
                                        <div className="service-body">
                                            <div className="service-title">
                                                <h3>{service.title}</h3>
                                            </div>
                                            <div className="service-content">
                                                <p>
                                                    {service.short_description}
                                                </p>
                                            </div>
                                            <a href="" className="btn btn-primary small">Read More</a>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }

                </div>
            </div>
        </section>
    )
};

export default LatestService;