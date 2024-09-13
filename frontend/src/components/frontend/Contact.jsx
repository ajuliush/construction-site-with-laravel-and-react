import React from 'react'
import Header from "../common/Header";
import Footer from "../common/Footer";
import Hero from '../common/Hero';

const Contact = () => {
  return (
    <>
      <Header />
      <main>
        {/*Hero Section */}
        <Hero
          preHeading='Welcome.Amazing .Construction'
          heading='contact us'
          text='Lorem ipsum dolor sit amat consectetur adipisicing edit<br/>Dolores praesentium, aut accusantium quos, rerum.'
        />
        <section className="section-9 bg-light py-5">
          <div className="section-header text-center">
            <h2>Contact Us</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est inventore possimus vel <br /> porro recusandae, libero distinctio. Incidunt fugiat dolores, quasi inventore sed dignissimos neque, provident, libero tempora animi et laudantium!</p>
          </div>
          <div className="container">
            <div className="row mt-5">
              <div className="col-md-3">
                <div className="card border shadow-0  mb-3">
                  <div className='card-body p-4'>
                    <h3>Call Us</h3>
                    <div>
                      <a href="">000-0000-000</a></div>
                    <div>
                      <a href="">000-0000-000</a></div>

                    <h3 className='mt-4'>You can write us</h3>
                    <div><a href="">example@mail.com</a></div>
                    <div><a href="">example@mail.com</a></div>


                    <h3 className='mt-4'>Address</h3>
                    <div>12/1, Mirpur <br /> Dhaka <br /> Bangladesh</div>
                  </div>
                </div>
              </div>
              <div className="col-md-9">
                <div className="card border shadow-0">
                  <div className="card-body p-5">
                    <form action="">
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label htmlFor="" className='form-label'>Name</label>
                          <input type="text" name='name' className='form-control form-control-lg' placeholder='Enter Name' />
                        </div>
                        <div className="col-md-6 mb-4">
                          <label htmlFor="" className='form-label'>Email</label>
                          <input type="email" name='email' className='form-control form-control-lg' placeholder='Enter Email' />
                        </div>
                      </div>
                      <div className="row">
                        <div className="col-md-6 mb-4">
                          <label htmlFor="" className='form-label'>Phone</label>
                          <input type="text" name='phone' className='form-control form-control-lg' placeholder='Enter Phone' />
                        </div>
                        <div className="col-md-6 mb-4">
                          <label htmlFor="" className='form-label'>Subject</label>
                          <input type="text" name='Subject' className='form-control form-control-lg' placeholder='Enter Subject' />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="" className='form-label'>Message</label>
                        <textarea name="" id="" rows={5} className='form-control form-control-lg' placeholder='Enter Message'></textarea>
                      </div>
                      <button className='btn btn-primary large mt-3'>Submit</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Contact