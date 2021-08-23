import "./App.css";
import React from "react";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div>
      <header className = "App-header">
        <h1>Abby Brannan</h1>
      </header>

      <body><NavBar/></body>

      <footer className = "App-footer">
        <p>  
          Connect With me: <a href="https://www.linkedin.com/in/abigail-brannan/"> https://www.linkedin.com/in/abigail-brannan/ </a>  |
          Email me: <a href="abigailbrannan1@gmail.com"> abigailbrannan1@gmail.com </a>  |   
          Call me: <a href="281-979-5003"> 281-979-5003 </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
