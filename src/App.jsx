import React, { Suspense } from 'react';

const Listing = React.lazy(() => import('listing/App'));

const App = () => {
  return (
    <>   
      <div > 
          <Suspense fallback={<div>Loading...</div>}>
            <Listing />
          </Suspense>     
      </div>
    </>
  );
};

export default App; 