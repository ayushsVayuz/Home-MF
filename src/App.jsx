import React, { Suspense } from 'react';
import "./index.css";
import CheckInternetConnection from './components/CheckInternetConnection';

const Listing = React.lazy(() => import('listing/App'));

const App = () => {
  return (
    <>   
      <CheckInternetConnection > 
          <Suspense fallback={<div>Loading...</div>}>
            <Listing />
          </Suspense>     
      </CheckInternetConnection>
    </>
  );
};

export default App; 