import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import * as Icon from 'react-feather';

import './App.scss';

import Home from './components/home';
import Navbar from './components/navbar';
import Links from './components/links';
import FAQ from './components/faq';
import Banner from './components/banner';
/* import PatientDB from './components/patientdb';*/

const history = require('history').createBrowserHistory;

function App() {
  const pages = [
    {
      pageLink: '/',
      view: Home,
      displayName: 'Home',
      animationDelayForNavbar: 0.2,
    },
    /* {
      pageLink: '/database',
      view: PatientDB,
      displayName: 'Patients DB',
      animationDelayForNavbar: 0.3,
    },*/
    {
      pageLink: '/links',
      view: Links,
      displayName: 'Helpful Links',
      animationDelayForNavbar: 0.5,
    },
    {
      pageLink: '/faq',
      view: FAQ,
      displayName: 'FAQ',
      animationDelayForNavbar: 0.6,
    },
  ];

  return (
    <div className="App">
      <Router history={history}>
        <Route
          render={({location}) => (
            <div className="Almighty-Router">
              <Navbar pages={pages} />
              <Banner />
              <Route exact path="/" render={() => <Redirect to="/" />} />
              <Switch location={location}>
                {pages.map((page, i) => {
                  return (
                    <Route
                      exact
                      path={page.pageLink}
                      component={page.view}
                      key={i}
                    />
                  );
                })}
                <Redirect to="/" />
              </Switch>
            </div>
          )}
        />
      </Router>

      <footer className="fadeInUp" style={{animationDelay: '2s'}}>
        {/* <img
          src="/icon.png"
          alt="https://github.com/vighneshdeepweb/Covid-19 | Coronavirus cases live dashboard"
        />*/}

        <h3><b>India Covid-19 Tracker Developed By Vighnesh Deep Sharan & Siddharth Lal Deo of S.Y.B.C.A(Div-B).Hope everybody remains safe and healthy. This site is inspired from</b></h3>
        <div className="link">
          <a href="https://www.covid19india.org/"
          target="_blank"
          rel="noopener noreferrer">covid-19india</a>
        </div>
        <a
          href="https://github.com/vighneshdeepweb/Covid-19"
          className="button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.GitHub />
          <span>Open Sourced on GitHub</span>
        </a>
        <a
          className="button excel"
          href="https://api.covid19india.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon.Database />
          <span>Patient Database&nbsp;</span>
        </a>
        
       
      </footer>
    </div>
  );
}

export default App;
