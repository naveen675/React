import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";
import devimage from "./Images/undraw_dev_productivity_umsq 1.png";
import searchicon from "./Images/search-24px.svg";
import giticon from "./Images/iconfinder_github_317712.png";
import linkedicon from "./Images/iconfinder_2018_social_media_popular_app_logo_linkedin_3225190.png";
import codecheficon from "./Images/codechef-1324440139527402917_32.png";
import hackericon from "./Images/iconfinder_160_Hackerrank_logo_logos_4373234.png";
import twitericon from "./Images/iconfinder_2018_social_media_popular_app_logo_twitter_3225183.png";
import mediumicon from "./Images/iconfinder_Circled_Medium_svg5_5279113.png";

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
      <button id="searchbutton">
        <Image src={searchicon} id="searchicon" />
      </button>
    </div>
  );
}

function Footer() {
  return (
    <footer class="footer">
      <p>made with &#129293; by Naveen</p>
    </footer>
  );
}

function Form() {
  return (
    <form className="devAddform">
      <label>
        <Image src={giticon} alt={"github"} id={"giticon"} />
        Github
      </label>
      <Input type={"text"} id={"gitin"} />
      <label>
        <Image src={linkedicon} alt={"linkedin"} id={"linkedicon"} />
        Linkedin
      </label>
      <Input type={"text"} id={"linkedin"} />
      <label>
        <Image src={codecheficon} alt={"codechef"} id={"codecheficon"} />
        Codechef
      </label>
      <Input type={"text"} id={"codechefin"} />
      <label>
        <Image src={hackericon} alt={"hackerrank"} id={"hackericon"} />
        HackerRank
      </label>
      <Input type={"text"} id={"hackerin"} />
      <label>
        <Image src={twitericon} alt={"twitter"} id={"twitericon"} />
        Twitter
      </label>
      <Input type={"text"} id={"twiterin"} />
      <label>
        <Image src={mediumicon} alt={"medium"} id={"mediumicon"} />
        Medium
      </label>
      <Input type={"text"} id={"mediumin"} />
      <button id={"devformsubmit"}> Submit </button>
      <button id={"devformcancel"}> Cancel </button>
    </form>
  );
}

const main = (
  <div className="content">
    <div className="head">
      <Heading id={"headtitle"} content={"The Developer Repository"} />
      <Image id={"developerImg"} src={devimage} alt={"developer"} />
    </div>
    <div className="subcontent">
      <div className="subhead">
        <Heading content={"Explore Developer Profiles"} />
      </div>
      <hr />
      <Search type="text" id="searchtext" placeholder="Search for username" />
      <hr />
      <p>Could not find what you are looking for ?</p>
      <button id="addDev">Add developer Info</button>
    </div>
    <Form />
    <Footer />
  </div>
);

ReactDOM.render(main, document.getElementById("root"));
