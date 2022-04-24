import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Header from "./heading";
import Search from "./search";
import Footer from "./footer";
import './styles.css';
import Adddev from "./adddev"
import Form from "./form";
import Index from "./index";


const element = (<React.Fragment>
  <div className="content">
    <div className="head">
      <Header id={'headtitle'} content={'The Developer Repository'} />
    </div>
    <div className="subcontent">
      <div className="subhead">
        <Header content={'Explore Developer Profiles'} />
      </div>
      <hr />
      <Search type="text" id="searchtext" placeholder="Search for username" />
      <hr />
      <p>Could not find what you are looking for ?</p>
      {/* <AddDev /> */}
    </div>
    <Adddev />
    <Footer />
  </div>
  </React.Fragment>
)
const root = ReactDOM.render(element,document.getElementById('root') );

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/adddev" element={<Adddev />} />
      <Route exact path="/form" element={<Form />} />
      <Route path="/" element={<Index />} />
      <Route path="/app" element={<App />} />
    </Routes>
  </BrowserRouter>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

export default element;