import React, { Component } from "react";
import View from "../Root/View";
import Loader from "../../components/Misc/Loader";
import Alert from "../../components/Misc/Alert";
import UserProfilePic from "../../components/MusicInfo/UserProfilePic";
import MusicInfoButtons from "../../components/MusicInfo/MusicInfoButtons";
import MusicReviewListItem from "../../components/MusicInfo/MusicReviewListItem";
class MusicContent extends Component {
  componentDidMount() {
    this.setState({ ajaxCallState: "fetching" });
    const { id } = this.props.match.params;
    fetch("http://sheethub.cluster/music/collection/" + id + "?resType=json")
      .then(res => res.json())
      .then(res => {
        // this.setState({ musics: res.musics });
        // this.setState({ reviews: res.reviews });
        this.setState({ ajaxCallState: "idle" });
      });
  }

  state = {
    ajaxCallState: "",
    musics: [],
    reviews: []
  };

  render() {
    return (
      <View
        title={"Music"}
        menu={false}
        goBack={() => {
          this.props.history.goBack();
        }}
      >
        {this.renderMusContent()}
      </View>
    );
  }

  renderMusContent() {
    if (this.state.ajaxCallState === "fetching") {
      return (
        <Loader
          text={
            <span>
              Fetching Music
              <p className="pad-top-25">Please Wait...</p>
            </span>
          }
        />
      );
    } else if (
      this.state.musics.length === 0 &&
      this.state.ajaxCallState === "idle"
    ) {
      return (
        <Alert
          type={"info"}
          icon={"fa fa-info-circle fa-4x grey-text"}
          text={
            <h4 className="grey-text">
              We were unable to find the selected music and its associated files
              on our server
            </h4>
          }
        />
      );
    } else {
      //   else
      return (
        <React.Fragment>
          <div className="row">
            <div className="col-3 mx-auto pad-0 card transparent no-shadow">
              <div className="card-body pad-0">
                <div className="music-icon" />
              </div>
            </div>
            <div className="col-9 mx-auto">
              <h5 className="h5-responsive grey-text">
                {this.props.match.params.title}
              </h5>
              <UserProfilePic
                type="inline"
                user_id={200}
                user_name={"user_name"}
              />
            </div>
          </div>
          {/* Likes, downloads summary */}
          <MusicInfoButtons downloads={"2,000"} category={"Hymns"} likes={20} />
          {/* Reviews */}
          {this.state.reviews.map(review => (
            <MusicReviewListItem
              key={review.id}
              id={review.id}
              user_id={review.user_id}
              user_name={review.user_name}
              review={review.review}
            />
          ))}
        </React.Fragment>
      );
    }
  }
}

export default MusicContent;
