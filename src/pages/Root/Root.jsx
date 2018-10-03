import React from "react";
import Home from "../../components/home";

const Root = ({ Logo, NavBar, NavFooter, Musics }) => {
  return (
    <div className="App">
      <NavBar Logo={Logo} />
      <main className="container">
        <Home Musics={Musics} />
      </main>
      <NavFooter routeToHome={this.routeToHomeHelper} />
    </div>
  );
};

export default Root;
