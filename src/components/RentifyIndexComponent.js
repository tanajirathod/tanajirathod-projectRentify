// RentifyIndexComponent.js
import React, { useState } from 'react';
import './RentifyIndexComponent.css';
import RentifyHeaderComponent from './RentifyHeaderComponent';
import RentifyMainComponent from './RentifyMainComponent';
import RentifyFooterComponent from './RentifyFooterComponent';
import AuthPage from './AuthPage';

const RentifyIndexComponent = () => {
  const [authPage, setAuthPage] = useState(null);

  return (
    <div>
      <div className='RentifyHeaderComponent'>
       <RentifyHeaderComponent />
      </div>
      {authPage ? (
        <AuthPage isLogin={authPage === 'login'} />
      ) : (
        <div>
          <RentifyMainComponent setAuthPage={setAuthPage} />
        </div>
      )}
        <div className='footerStyle'>
          <RentifyFooterComponent />
        </div>
    </div>
  );
};

export default RentifyIndexComponent;
