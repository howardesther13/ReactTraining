import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import { Home } from './components/Home';
import { About } from './components/About';
import { Contact } from './components/Contact';

function App() {
  return (
    <>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about/3">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about/:id" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </>
  );
}

export default App;
