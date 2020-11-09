import Header from "Components/Header";
import Router from "./Components/Router";
import React , { Component } from "react";;



class App extends Component {
  render() {
    return (
      <>
      <Header />
      <Router />
      </>
    );
  }  
}

export default App;