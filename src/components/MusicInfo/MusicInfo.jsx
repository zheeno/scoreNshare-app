import React from "react";

const MusicInfo = ({ downloads, category, likes }) => {
  return (
    <React.Fragment>
      <div>
        <span id="fav_btn_1" className="badge fav-btn m-r-5">
          <span className="fa fa-heart grey-text" />
          &nbsp;&middot;&nbsp;
          <span className="grey-text">{likes}</span>
        </span>
        <span className="badge grey-text m-r-5">
          <span className="fa fa-download" />
          &nbsp;&middot;&nbsp;
          {downloads}
        </span>
        <a href="/music/catalogue/category" className="badge grey-text m-r-5">
          <span className="fa fa-folder" />
          &nbsp;&middot;&nbsp;
          {category}
        </a>
      </div>
    </React.Fragment>
  );
};

export default MusicInfo;
