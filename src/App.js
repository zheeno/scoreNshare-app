import React, { Component } from "react";
import NavBar from "./components/NavBar/NavBar";
import NavFooter from "./components/NavFooter/NavFooter";
import Root from "./pages/Root/Root";
import "./App.css";

class App extends Component {
  componentDidMount() {
    // music/discover?resType=json
    fetch("http://sheethub.cluster/music/catalogue?resType=json")
      .then(res => res.json())
      .then(Musics => {
        this.setState({ Musics });
      });
  }
  state = {
    logo: "./images/logo.png",
    Musics: []
  };

  render() {
    return (
      <Root
        Logo={this.state.logo}
        NavBar={NavBar}
        NavFooter={NavFooter}
        Musics={this.state.Musics}
      />
    );
  }
}

export default App;
