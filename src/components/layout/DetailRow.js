import React from 'react';

const DetailRow = ({ title, types, val }) => {
  if (types) {
    return (
      <div>
        <div className='row-title'>{title}:</div>
        {types.map((type, index) => (
          <div key={index}>{type}</div>
        ))}
      </div>
    );
  }

  return (
    <div>
      <span className='row-title'>{title}:</span>
      <span>{val}</span>
    </div>
  );
};

export default DetailRow;
