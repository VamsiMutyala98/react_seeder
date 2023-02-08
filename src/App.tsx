import React from "react";
import "./App.css";
import Dashboard from "./components/dashboard";
import { Login } from "./components/login/Loadable";

export const App = () => {
  return (
    <div className="App">
      <header className="App-header" data-testid="app-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a> */}
        <Login componentName="LoginPage" />
        <Dashboard />
      </header>
    </div>
  );
};
