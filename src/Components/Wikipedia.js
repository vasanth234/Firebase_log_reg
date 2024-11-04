import React, { useEffect } from 'react';

const Wikipedia = () => {
  useEffect(() => {
    // Redirect to Virat Kohli's Wikipedia page
    window.location.href = 'https://en.wikipedia.org/wiki/Virat_Kohli';
  }, []);

  // This component doesn't render anything directly
  return null;
};

export default Wikipedia;
