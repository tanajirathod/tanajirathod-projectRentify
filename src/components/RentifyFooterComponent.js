// RentifyFooterComponent.js

import React from 'react';
import './RentifyIndexComponent.css';

const RentifyFooterComponent = () => {
  return (
    <footer className="bg-light p-4 mt-4">
      <div className="container d-flex justify-content-around">
        <div className="row">
          <div className="col text-center">
            <h5 className=''>Social Network</h5>
            <a href="https://github.com" className="text-dark m-2 p-2"><i className="bi bi-github"></i></a>
            <a href="https://instagram.com" className="text-dark m-2 v"><i className="bi bi-instagram"></i></a>
            <a href="https://twitter.com" className="text-dark m-2 p-2"><i className="bi bi-twitter"></i></a>
            <a href="https://linkedin.com" className="text-dark m-2 p-2"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
        <div className="row text-center mt-2">
          <div className="col">
            <p>Info: info@rentify.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Rentify St, Real Estate City</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RentifyFooterComponent;
