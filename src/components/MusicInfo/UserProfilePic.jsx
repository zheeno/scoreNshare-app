import React from "react";
import "./MusicInfo.css";

const ComposerProfilePic = ({ type, user_id, user_name }) => {
  return renderProfileHandler({
    type: type,
    user_id: user_id,
    user_name: user_name
  });
};
const renderProfileHandler = attr => {
  let profilePic = null;
  switch (attr.type.toLowerCase()) {
    case "inline":
      profilePic = (
        <div className="row pad-0">
          <div className="col-12 pad-0">
            <a
              key={attr.key}
              id={"user_" + attr.id}
              className="btn grey darken-4 comp-pro-pic-sm"
            >
              {attr.user_name.substring(0, 1).toLocaleLowerCase()}
            </a>
            <span className="grey-text">{attr.user_name}</span>
          </div>
        </div>
      );
      break;

    default:
      profilePic = (
        <div className="card transparent music-card pad-0 list-grid">
          <div className="card-body">
            <div className="music-icon" />
          </div>
          <div className="card-footer left-align ellipsis">
            <h4 className="h4-responsive grey-text">{attr.user_name}</h4>
          </div>
        </div>
      );
      break;
  }
  return profilePic;
};
export default ComposerProfilePic;
