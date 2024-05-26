// RentifyMainComponent.js
import React from 'react';

const RentifyMainComponent = ({ setAuthPage }) => {
  return (
    <div className="container-fluid mb-4">
      <div className="d-flex justify-content-center mb-4 ">
        <a href="#" onClick={() => setAuthPage('login')} className="btn btn-link">Selling</a>
        <a href="#" onClick={() => setAuthPage('login')} className="btn btn-link">Buying</a>
        <a href="#" onClick={() => setAuthPage('login')} className="btn btn-link">Property</a>
      </div>
      <h1 className="text-center">Where Renting Meets Simplicity</h1>
      <div className="d-flex justify-content-center mt-4">
        <button className="btn btn-primary m-2 pe-4" onClick={() => setAuthPage('login')}>Login</button>
        <button className="btn btn-secondary m-2" onClick={() => setAuthPage('register')}>Register</button>
      </div>
    </div>
  );
};

export default RentifyMainComponent;
