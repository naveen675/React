import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import image from "./Images/undraw_dev_productivity_umsq 1.png";

function Heading(props) {
  const content = props.content;
  const id = props.id;
  return <h3 id={id}>{content}</h3>;
}

function Image(props) {
  const src = props.src;
  const alt = props.alt;
  const id = props.id;
  return <img id={id} src={src} alt={alt} />;
}

function Input(props) {
  var id = props.id;
  var type = props.type;
  var placeholder = props.placeholder;

  return <input type={type} id={id} placeholder={placeholder} />;
}

function Search(props) {
  return (
    <div className="search">
      <Input id={props.id} type={props.type} placeholder={props.placeholder} />
    </div>
  );
}

const main = (
  <div className="content">
    <div className="head">
      <Heading id={"headtitle"} content={"The Developer Repository"} />
      <Image id={"developerImg"} src={image} alt={"developer"} />
    </div>
    <div className="subcontent">
      <div className="subhead">
        <Heading content={"Explore Developer Profiles"} />
      </div>
      <hr />
      <Search type="text" id="searchtext" placeholder="Search for username" />
    </div>
  </div>
);

ReactDOM.render(main, document.getElementById("root"));
