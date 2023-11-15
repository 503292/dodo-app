import React, { useEffect, useState } from 'react';

const CurrentYear = () => {
  const [currentYear, setCurrentYear] = useState(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);
  return <>{currentYear}</>;
};

export default CurrentYear;
