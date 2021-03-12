import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
//import logo from './logo.svg'; 
import useThemeDark from './hooks/useThemeDark';
import useSmoothScroll from './hooks/useSmoothScroll';
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


function App() {
  const ThemeSwitcher = useThemeDark();
  const ScrollBarSmooth = useSmoothScroll();

  
  return (
    <div className="App">
      {ScrollBarSmooth}
      <div className="app__body">
        <Router>
          <Switch>
            <Route path="/skills">
              <ScrollToTop />
              {ThemeSwitcher}
              <Cover />
              <SkillsDetail /> 
            </Route>
            <Route path="/">
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
        </Router>
      </div>
    </div>
  );
}

export default App;
