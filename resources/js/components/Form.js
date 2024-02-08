import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
function DraggableComp({
  dataInputOptions = [],
  textInputLabel = '',
  dropdownOptions = [],
  selectedDropdownValue = '',
  onFormChange = () => {},
}) {
  const [dataInputValue, setDataInputValue] = useState('');
  const [textInputValue, setTextInputValue] = useState('');
  const [dropdownValue, setDropdownValue] = useState(selectedDropdownValue);

  const handleDataInputChange = (event) => {
    setDataInputValue(event.target.value);
    onFormChange({ dataInputValue, textInputValue, dropdownValue });
  };

  const handleTextInputChange = (event) => {
    setTextInputValue(event.target.value);
    onFormChange({ dataInputValue, textInputValue, dropdownValue });
  };

  const handleDropdownChange = (event) => {
    setDropdownValue(event.target.value);
    onFormChange({ dataInputValue, textInputValue, dropdownValue });
  };

  return (
    <Draggable>
      <div className="draggable">
        {/* Data input */}
        <div className="form-group">
          <label htmlFor="dataInput">Data Input:</label>
          <select
            id="dataInput"
            value={dataInputValue}
            onChange={handleDataInputChange}
          >
            {dataInputOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Text input */}
        <div className="form-group">
          <label htmlFor="textInput">{textInputLabel}</label>
          <input
            id="textInput"
            type="text"
            value={textInputValue}
            onChange={handleTextInputChange}
          />
        </div>

        {/* Dropdown */}
        <div className="form-group">
          <label htmlFor="dropdown">Dropdown:</label>
          <select id="dropdown" value={dropdownValue} onChange={handleDropdownChange}>
            {dropdownOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="handle">Drag from here</div>
      </div>
    </Draggable>
  );
}

export default DraggableComp;


if (document.getElementById('app')) {
  ReactDOM.render(<DraggableComp />,document.getElementById('app'));
}