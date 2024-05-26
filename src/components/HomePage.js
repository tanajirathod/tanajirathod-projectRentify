// HomePage.js
import React from 'react';
import SellerDashboard from './SellerDashboard';
import PropertyListing from './PropertyListing';

const HomePage = ({ userType }) => {
  return (
    <div className="container">
      <h2>Welcome to Rentify</h2>
      {userType === 'seller' ? (
        <SellerDashboard />
      ) : (
        <PropertyListing />
      )}
    </div>
  );
};

export default HomePage;
