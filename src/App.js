import React, { useRef, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Commands from './components/Commands';
import Footer from './components/Footer';
import Home from './components/Home';
import Info from './components/Info';
import Navbar from './components/Navbar';
import './styles/App.css';

function App() {

  const scrollHomeRef = useRef()
  const scrollInfoRef = useRef()
  const executeHomeScroll = () => window.scrollTo({ behavior: 'smooth', top: scrollHomeRef.current.offsetTop })
  const executeFeaturesScroll = () => window.scrollTo({ behavior: 'smooth', top: scrollInfoRef.current.offsetTop })

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Navbar scrollHome={executeHomeScroll} scrollInfo={executeFeaturesScroll} />
            <Home rf={scrollHomeRef} />
            <Info rf={scrollInfoRef} />
            <Footer />
          </Route>
          <Route path='/commands'>
            <Commands />
            <Footer />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
