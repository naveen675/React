import React from "react";
import { Link, NavLink } from "react-router-dom";

function AddDev() {
  return (
    <React.Fragment>
      <button id="addDev">Add developer Info</button>
    </React.Fragment>
  );
}

export default AddDev;

// <React.Fragment>
//       <button id="addDev" onClick={() => navigate("/form")}>
//        <Link to="/form" >Add developer Info</Link>
//       </button>
//     </React.Fragment>
