import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import image from "./undraw_dev_productivity_umsq 1.png";

function Heading(props) {
  const content = props.content;
  const id = props.id;
  return <h1 id={id}>{content}</h1>;
}

function Image(props) {
  const src = props.src;
  const alt = props.alt;
  const id = props.id;
  return <img id={id} src="undraw_dev_productivity_umsq 1.png" alt={alt} />;
}

const main = (
  <div class="content">
    <div class="head">
      <Heading id={"headtitle"} content={"The Developer Repository"} />
      <Image id={"developerImg"} src={image} alt={"developer"} />
    </div>
  </div>
);

ReactDOM.render(main, document.getElementById("root"));
