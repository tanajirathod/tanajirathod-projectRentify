// PropertyListing.js
import React, { useState, useEffect } from 'react';

const PropertyListing = () => {
  const [properties, setProperties] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);

  const fetchProperties = async (page = 0, size = 10) => {
    const response = await fetch(`/api/properties?page=${page}&size=${size}`);
    const data = await response.json();
    setProperties(data.properties);
    setCurrentPage(data.currentPage);
    setTotalPages(data.totalPages);
  };

  const handlePageChange = (newPage) => {
    fetchProperties(newPage, 10);
  };

  const handleInterest = (propertyId) => {
    // Handle "I'm Interested" logic
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  return (
    <div>
      <h3>Available Properties</h3>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            {property.name}
            <button onClick={() => handleInterest(property.id)}>I'm Interested</button>
          </li>
        ))}
      </ul>
      <button 
        onClick={() => handlePageChange(currentPage - 1)} 
        disabled={currentPage === 0}
      >
        Previous
      </button>
      <button 
        onClick={() => handlePageChange(currentPage + 1)} 
        disabled={currentPage === totalPages - 1}
      >
        Next
      </button>
    </div>
  );
};

export default PropertyListing;
