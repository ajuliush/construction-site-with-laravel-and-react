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
        <section className="section-8 bg-light py-5">
          <div className="container">
            <form action="">
              <div className="row">
                <div className="col-md-6 col-lg-6">
                  <label htmlFor="name" className='pb-2'>Name</label>
                  <input type="text" className='form-control' placeholder='Enter Name' />
                </div>
                <div className="col-md-6 col-lg-6">
                  <label htmlFor="email" className='pb-2'>Email</label>
                  <input type="email" className='form-control' placeholder='Enter Email' />
                </div>
                <div className="col-md-12 col-lg-12">
                  <label htmlFor="subject" className='pt-2 pb-2'>Subject</label>
                  <input type="text" className='form-control' placeholder='Enter Subject' />
                </div>
                <div className="col-md-12 col-lg-12">
                  <label htmlFor="message" className='pt-2 pb-2'>Message</label>
                  <textarea name="" id="" cols="30" rows="10" className='form-control'></textarea>
                </div>
                <div className="col-md-12 col-lg-12 text-center pt-3">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Contact