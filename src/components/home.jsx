import React, { Component } from "react";
import MusicCard from "./MusicCard/MusicCard";

class Home extends Component {
  render() {
    return (
      <div className="container-fluid pad-top-50">
        {/* <div class="row">
          <div class="red col-12 pad-top-25 pad-bot-25">
            <h3 class="h3-responsive">Welcome</h3>
          </div>
        </div> */}
        <div className="pad-top-25 row overflow-y">
          <div className="left-align col-12">
            <b className="h5-responsive red-text">
              Your <span className="grey-text">Collection</span>
            </b>
          </div>
          {this.props.Musics.map(music => (
            <MusicCard
              key={music.id}
              id={music.id}
              title={music.title}
              composer={music.composer}
              category={music.category}
              downloads={music.downloads}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
