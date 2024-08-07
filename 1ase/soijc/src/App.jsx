import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Home from './Home'; // Import Home component
import About from './About'; // Import About component

function App() {
  return (

     // <UserProvider>
    //   <UserProfile />
    // </UserProvider>
    // <KptForm/>  

    
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path ="/about" component={About} />
      </Switch>
    </Router>
  );
}

export default App;
