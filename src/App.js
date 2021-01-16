import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./component/Home";
import Register from "./component/Register";
import Search from "./component/search";

const error = '';

const notFound = () => {
  return (
    <div>
      <div>
        <img src={error} alt="notFound" height={550} width={900} />
      </div>
      <div>
        <Link to="/">
          <button variant="outline-primary">Back To Home</button>
        </Link>
      </div>
    </div>
  );
};

function App() {
   
  return (
    <Router>
    <Switch>
      <Route path="/register" component={Register} />
      <Route exact path="/" component={Home} />
      <Route path="/search" component={Search} /> 
      <Route component={notFound} />
    </Switch>
  </Router>
  );
}

export default App;
