import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./Home";

export default function NavBar() {
  return (
    <Router>
      <div className="navBar">
        <nav>
          <ul>
              <Link to="/">Home</Link>
              <br />
              <Link to="/education">Education</Link>
              <br />
              <Link to="/skills">Skills</Link>
              <br />
              <Link to="/experience">Experience</Link>
              <br />
              <Link to="/projects">Projects</Link>
              <br />
              <Link to="/activities">Activities</Link>
          </ul>
        </nav>
      </div>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/education">
            {/* <Education /> */}
          </Route>
          <Route path="/skills">
            {/* <Skills /> */}
          </Route>
          <Route path="/experience">
            {/* <Experience /> */}
          </Route>
          <Route path="/projects">
            {/* <Projects /> */}
          </Route>
          <Route path="/activities">
            {/* <Activities /> */}
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      
    </Router>
  );
}