// SellerDashboard.js
import React, { useState, useEffect } from 'react';

const SellerDashboard = () => {
  const [properties, setProperties] = useState([]);

  const fetchProperties = async (page, size) => {
    const response = await fetch(`/api/properties?page=${page}&size=${size}`);
    const data = await response.json();
    setProperties(data);
  };

  const handleDelete = async (id) => {
    await fetch(`/api/properties/${id}`, { method: 'DELETE' });
    fetchProperties(0, 10);
  };

  useEffect(() => {
    fetchProperties(0, 10);
  }, []);

  return (
    <div>
      <h3>Your Properties</h3>
      <ul>
        {properties.map((property) => (
          <li key={property.id}>
            {property.name}
            <button onClick={() => handleDelete(property.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SellerDashboard;
