import React, { useEffect, useState } from 'react';
import Header from '../../common/Header';
import Sidebar from '../../common/Sidebar';
import Footer from '../../common/Footer';
import { apiUrl, token } from '../../common/Http';
import { Link } from 'react-router-dom';

const Show = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        const fetchServices = async () => {
            const res = await fetch(apiUrl + 'services', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Authorization': `Bearer ${token()}`
                }
            });
            const result = await res.json();
            setServices(result.data);
            console.log(result);
        }
        fetchServices();
    }, []);

    return (
        <>
            <Header />
            <main className="dashboard my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            {/* Sidebar */}
                            <Sidebar />
                        </div>
                        <div className="col-md-9">
                            {/* SERVICES */}
                            <div className="card shadow border-0">
                                <div className="card-body P-4">
                                    <div className='d-flex justify-content-between'>
                                        <h5>Services</h5>
                                        <Link to="/admin/service/create" className="btn btn-primary">Create</Link>
                                    </div>
                                    <hr />
                                    <table className='table table-striped'>
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Name</th>
                                                <th>Slug</th>
                                                <th>Description</th>
                                                <th>Status</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                services && services.map((service, index) => {
                                                    return (
                                                        <tr key={service.id}>
                                                            <td>{index + 1}</td>
                                                            <td>{service.title}</td>
                                                            <td>{service.slug}</td>
                                                            <td>{service.short_description}</td>
                                                            <td>
                                                                {(service.status === 1) ? 'Active' : 'Block'}
                                                            </td>
                                                            <td>
                                                                <a href="" className='btn btn-sm btn-primary mr-2'>Edit</a>
                                                                <a href="" className='btn btn-sm btn-danger ms-2'>Delete</a>
                                                            </td>
                                                        </tr>
                                                    )
                                                })
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main >
            <Footer />
        </>
    )
}
export default Show;
