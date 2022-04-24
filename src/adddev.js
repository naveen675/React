import React from 'react';
import { Link } from 'react-router-dom';

function AddDev() {
  return (
    <React.Fragment>
      <button id="addDev">
        <Link to="/form">Add developer Info</Link>
      </button>
    </React.Fragment>
  );
}

export default AddDev;
