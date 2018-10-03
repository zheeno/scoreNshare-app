import React from "react";
import UserProfilePic from "../../components/MusicInfo/UserProfilePic";

const MusicReviewListItem = ({ id, user_id, user_name, review }) => {
  return (
    <React.Fragment>
      <div className="row review-list" id={"rev_" + id}>
        <div className="col-12">
          <UserProfilePic
            key={user_id}
            type="inline"
            user_id={user_id}
            user_name={user_name}
          />
        </div>
        <div className="col-12">
          <p className="grey-text justify">{review}</p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default MusicReviewListItem;
