import React from 'react';
import './App.css';
import Main from './containers/main'
import BlogDetail from './containers/blog-details'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  

  return (
    <div className="App">
      <Router>
        <Route path="/" exact component={Main}/>
        <Route path="/blog/id" exact component={BlogDetail}/>
      </Router>

    </div>
  );
}

export default App;
