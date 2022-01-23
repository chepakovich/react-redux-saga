import React, { useState } from 'react';
import Instrument from './Instrument';

const Company = ({ company }) => {
  const [showInstruments, setShowInstruments] = useState(false);

  const handleClick = () => {
    setShowInstruments(!showInstruments);
  };

  return (
    <>
      <div className="address" onClick={() => handleClick(company.id)}>
        {`${company.name}, ${company.address}`}
      </div>
      {showInstruments &&
        company.instruments.map((instrument) => (
          <Instrument key={instrument} instrument={instrument} />
        ))}
    </>
  );
};

export default Company;
