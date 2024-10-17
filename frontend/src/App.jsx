import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/frontend/Home';
import About from './components/frontend/About';
import Services from './components/frontend/Services';
import Blogs from './components/frontend/Blogs';
import Projects from './components/frontend/Projects';
import Contact from './components/frontend/Contact';
import NotFound from "./components/frontend/NotFound";
import Login from './components/backend/Login';
import Dashboard from './components/backend/Dashboard';
import './assets/css/style.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import RequireAuth from './components/common/RequireAuth';
import { AuthContext } from './components/backend/context/Auth';
import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { default as ShowServices } from './components/backend/services/Show';
import { default as CreateService } from './components/backend/services/Create';
import { default as EditService } from './components/backend/services/Edit';

function App() {
  const { user } = useContext(AuthContext); // Assuming you have user context
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/admin/login' element={user ? <Navigate to='/admin/dashboard' /> : <Login />} />

          <Route path='/admin/dashboard' element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          } />

          <Route path='/admin/services' element={
            <RequireAuth>
              <ShowServices />
            </RequireAuth>
          } />
          <Route path='/admin/service/create' element={
            <RequireAuth>
              <CreateService />
            </RequireAuth>
          } />
          <Route path='/admin/service/edit/:id' element={
            <RequireAuth>
              <EditService />
            </RequireAuth>
          } />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <ToastContainer />
    </>
  )
}

export default App
