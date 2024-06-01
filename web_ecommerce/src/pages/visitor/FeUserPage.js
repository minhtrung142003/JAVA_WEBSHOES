import React, { useEffect, useState } from 'react';
import axios from 'axios';

const FeUserPage = () => {

    useEffect(() => {
        axios.post('http://localhost:8080/api/visitors/increment')
          .catch(error => {
            console.error('Error incrementing visitors count:', error);
          });
      }, []);

  return (
    <div>
      <h1>Welcome to Fe User Page</h1>
      {/* <p>Number of visitors: {visitorsCount}</p> */}
    </div>
  );
};

export default FeUserPage;
