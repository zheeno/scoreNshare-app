import React from "react";
import "./MusicInfo.css";

const MusicInfoButtons = ({ downloads, reviews, likes }) => {
  return (
    <React.Fragment>
      <div className="music-info-btn container-fluid">
        <div className="row">
          <div className="col-4 center-align">
            <span id="fav_btn_1" className="fav-btn m-r-5">
              <span className="fa fa-heart grey-text" />
              &nbsp;&middot;&nbsp;
              <span className="grey-text">{likes}</span>
            </span>
          </div>
          <div className="col-4 center-align">
            <span className="grey-text m-r-5">
              <span className="fa fa-download" />
              &nbsp;&middot;&nbsp;
              {downloads}
            </span>
          </div>
          <div className="col-4 center-align">
            <span
              className="grey-text m-r-5"
            >
              <span className="fa fa-comment" />
              &nbsp;&middot;&nbsp;
              {reviews}
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MusicInfoButtons;
