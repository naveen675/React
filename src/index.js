import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import './styles.css';
import Search from './search';
import AddDev from './adddev';
import Footer from './footer';
import Header from './heading';
import Form from './form';
import Index from './index';

const main = (
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
      <AddDev />
    </div>

    <Footer />
  </div>
);

const root = ReactDOM.render(main, document.getElementById('root'));

root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/adddev" element={<AddDev />} />
      <Route exact path="/form" element={<Form />} />
      <Route path="/" element={<Index />} />
      <Route path="/app" element={<App />} />
    </Routes>
  </BrowserRouter>
);
