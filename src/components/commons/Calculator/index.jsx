import React, { useState } from 'react';
import Calculator from './Calculator';
import MyModal from '../MyModal/MyModal';
import BtnCalculator from '../BtnCalculator/BtnCalculator';

const MyCalculator = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <MyModal isOpen={isOpen} onClose={() => setIsOpen(!isOpen)}>
        <Calculator />
      </MyModal>
      <BtnCalculator onClick={() => setIsOpen(!isOpen)} />
    </>
  );
};

export default MyCalculator;
