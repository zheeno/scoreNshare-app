import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./MusicList.css";

class MusicList extends Component {
  render() {
    return (
      <React.Fragment>
        <li className="music-list list-group-item col-12 left-align no-radius capitalize input-group transparent list-grid">
          <Link to={`/musicContent/${this.props.contents.music.id}`}>
            <div className="ellipsis mx-auto no-overflow mx-h-100">
              <h4 className="h4-responsive grey-text">
                {this.props.contents.music.title}
              </h4>
              <p>{this.props.contents.music.composer}</p>
              <div>
                <span id="fav_btn_1" className="grey-text fav-btn m-r-5">
                  <span className="fa fa-heart grey-text" />
                  &nbsp;&middot;&nbsp;
                  {this.props.contents.details.likes}
                </span>
                <span className="grey-text m-r-5">
                  <span className="fa fa-download" />
                  &nbsp;&middot;&nbsp;
                  {this.props.contents.details.downloads}
                </span>
                <span className="grey-text m-r-5">
                  <span className="fa fa-folder" />
                  &nbsp;&middot;&nbsp;
                  {this.props.contents.details.category}
                </span>
              </div>
            </div>
          </Link>
        </li>
      </React.Fragment>
    );
  }
}

export default MusicList;
