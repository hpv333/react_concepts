import React from "react";
import "./App.css";
import Youtube from './components/Youtube';

export default function App(props) {
  return (
    <div className='App'>
      <h1>Hello   React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <Youtube/>
    </div>
  );
}

// Log to console
console.log('Hello console')