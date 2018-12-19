import React, {Component} from "react";
import {hot} from 'react-hot-loader';
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
          <div className="Title">HydroBytes Dashboard</div>
          <div className="Body">Data</div>
      </div>
    );
  }
}

export default hot(module)(App);
