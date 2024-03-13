import React, { useState } from 'react';

const MultiSelectDropdown = () => {
  const options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' },
    // Add more options as needed
  ];

  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (event) => {
    const selectedValues = Array.from(event.target.selectedOptions, (option) => option.value);
    setSelectedOptions(selectedValues);
  };

  return (
    <div>
      <label htmlFor="multiselect">Select options:</label>
      <select
        id="multiselect"
        multiple
        value={selectedOptions}
        onChange={handleSelectChange}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>

      <div>
        <p>Selected Options:</p>
        <ul>
          {selectedOptions.map((selectedValue) => (
            <li key={selectedValue}>{selectedValue}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MultiSelectDropdown;
