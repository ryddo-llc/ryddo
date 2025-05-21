import React from 'react';

export default function ProductsFilterDropdown() {
  const filterOptions = ['New', 'Bestseller', 'On Sale'];
  return (
    <div>
      <label htmlFor='search'>Popular</label>
      {filterOptions.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </div>
  );
}
