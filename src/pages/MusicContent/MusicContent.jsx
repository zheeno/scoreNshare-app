import React, { Component } from "react";
import { GetData } from "../../services/ApiCaller";

import { Alert, Loader, NetErr } from "../../components/Misc/Notifiables";
import { FooterPlayer } from "../../components/Misc/Media";

import View from "../Root/View";
import UserProfilePic from "../../components/MusicInfo/UserProfilePic";
import MusicInfoButtons from "../../components/MusicInfo/MusicInfoButtons";
import MusicReviewListItem from "../../components/MusicInfo/MusicReviewListItem";
class MusicContent extends Component {
  componentDidMount() {
    this.setState({ ajaxCallState: "fetching" });
    const { id } = this.props.match.params;
    GetData("api/music/collection/" + id + "?resType=json")
      .then(result => {
        let response = result;
        console.log(response);
        this.setState({ music: response.music });
        this.setState({ details: response.details });
        this.setState({ files: response.files });
        this.setState({ reviews: response.reviews });
        this.setState({ ajaxCallState: "idle" });
        this.setState({ ajaxCallError: null });
      })
      .catch(error => {
        this.setState({ ajaxCallState: "NET_ERR" });
        this.setState({ ajaxCallError: error.message });
      });
  }

  state = {
    ajaxCallState: "",
    ajaxCallError: null,
    music: [],
    details: [],
    files: [],
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
    let result = null;
    switch (this.state.ajaxCallState) {
      case "NET_ERR":
        result = <NetErr error={this.state.ajaxCallError} />;
        break;
      case "fetching":
        result = (
          <Loader
            text={
              <span>
                Fetching Music
                <p className="pad-top-25">Please Wait...</p>
              </span>
            }
          />
        );
        break;
      case "idle":
        if (this.state.music.length === 0) {
          result = (
            <Alert
              type="info"
              icon={"fa fa-info-circle fa-4x grey-text"}
              text={
                <h4 className="grey-text">
                  We were unable to find the selected music and its associated
                  files on our server
                </h4>
              }
            />
          );
        } else {
          result = (
            <React.Fragment>
              <div className="row">
                <div className="col-3 mx-auto pad-0 card transparent no-shadow">
                  <div className="card-body pad-0">
                    <div className="music-icon" />
                  </div>
                </div>
                <div className="col-9 mx-auto">
                  <h5 className="h5-responsive grey-text">
                    {this.state.music.title}
                  </h5>
                  <UserProfilePic
                    type="inline"
                    user_id={this.state.details.owner.id}
                    user_name={this.state.details.owner.name}
                  />
                </div>
              </div>
              {/* Likes, downloads summary */}
              <MusicInfoButtons
                likes={this.state.details.likes}
                downloads={this.state.details.downloads}
                reviews={this.state.reviews.length}
              />
              {/* Reviews */}
              {this.state.reviews.map(review => (
                <MusicReviewListItem
                  key={review.id}
                  id={review.id}
                  user_id={review.user_id}
                  // user_name={review.user_name}
                  review={review.review}
                />
              ))}
              <FooterPlayer
                source={"http://sheethub.cluster/" + this.state.files[0].url}
              />
            </React.Fragment>
          );
        }
        break;
      default:
        // nothing yet
        break;
    }
    return result;
  }
}

export default MusicContent;
