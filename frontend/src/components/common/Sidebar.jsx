import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../backend/context/Auth';
const Sidebar = () => {
    const { logout } = useContext(AuthContext);
    return (
        <div className="card shadow border-0">
            <div className="card-body p-4 sidebar">
                <h5>Sidebar</h5>
                <ul>
                    <li><Link to={'/admin/dashboard'}>Dashboard</Link></li>
                    <li><Link to={'/admin/services'}>Services</Link></li>
                    <li><a href="#">Projects</a></li>
                    <li><a href="#">Articles</a></li>
                    <li>
                        <button onClick={logout} className='btn btn-primary mt-4'>Logout</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Sidebar;