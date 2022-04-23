import React from "react";
import ReactDOM from "react-dom";
import { Router, Routes, Route } from "react-router-dom";
import "./styles.css";
import Search from "./search";
import AddDev from "./adddev";
import Footer from "./footer";
import Header from "./heading";
import Form from "./form";

const main = (
  <div className="content">
    <div className="head">
      <Header id={"headtitle"} content={"The Developer Repository"} />
    </div>
    <div className="subcontent">
      <div className="subhead">
        <Header content={"Explore Developer Profiles"} />
      </div>
      <hr />
      <Search type="text" id="searchtext" placeholder="Search for username" />
      <hr />
      <p>Could not find what you are looking for ?</p>
      <AddDev />
      <Router>
        <Routes>
          <Route exact path="/adddev" element={<AddDev />} />
        </Routes>
      </Router>
    </div>

    <Footer />
  </div>
);

ReactDOM.render(main, document.getElementById("root"));
