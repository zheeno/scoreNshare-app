import React, { Component } from "react";

import { Link } from "react-router-dom";
import "../../components/MusicCard/Card.css";

class CatalogueCard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Link
          to={`/catalogueContent/${this.props.category}`}
          className="card transparent music-card pad-0 list-grid"
        >
          <div className="card-body">
            <div className="fa fa-folder fa-4x grey-text" />
          </div>
          <div className="card-footer left-align ellipsis">
            <h4 className="h4-responsive grey-text">{this.props.category}</h4>
            <p>{this.props.description}</p>
          </div>
        </Link>
      </React.Fragment>
    );
  }
}

export default CatalogueCard;
