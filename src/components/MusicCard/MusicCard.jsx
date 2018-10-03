import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Card.css";
class MusicCard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Link
          to={`/musicContent/${this.props.id}`}
          className="card transparent music-card pad-0 list-grid"
        >
          <div className="card-body">
            <div className="music-icon" />
          </div>
          <div className="card-footer left-align ellipsis">
            <h4 className="h4-responsive grey-text">{this.props.title}</h4>
            <p>{this.props.category}</p>
          </div>
        </Link>
      </React.Fragment>
    );
  }
}

export default MusicCard;
