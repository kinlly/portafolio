import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
//import logo from './logo.svg'; 
import useThemeDark from './hooks/useThemeDark';
import "react-toggle/style.css";
import './css/App.css';
import Skills from './containers/Skills';
import SkillsDetail from './containers/SkillsDetails';
import Projects from './containers/Projects';
import Experience from './containers/Experience';
import Extras from './containers/Extras';
import Cover from './containers/Cover';
import Footer from './containers/Footer';
import ScrollToTop from './containers/ScrollToTop';
import { AnimatePresence } from "framer-motion";

function App() {
  const ThemeSwitcher = useThemeDark();

  return (
    <div className="App">
      <div className="app__body">
        <Router>
          <AnimatePresence>
            <Switch location={document.location} key={document.location.href}>
              <Route path="/skills" >
                <ScrollToTop />
                {ThemeSwitcher}
                <Cover />
                <SkillsDetail />
              </Route>
              <Route path="/" key={document.location.href} >
                <ScrollToTop />
                {ThemeSwitcher}
                <Cover />
                <Skills />
                <Projects />
                <Experience />
                <Extras />
                <Footer />
              </Route>
            </Switch>
          </AnimatePresence>
        </Router>
      </div>
    </div>
  );
}

export default App;
