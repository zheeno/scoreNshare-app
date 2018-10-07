import React, { Component } from "react";
import { GetData } from "../../services/ApiCaller";

import { Alert, Loader, NetErr } from "../../components/Misc/Notifiables";
import { FooterPlayer } from "../../components/Misc/Media";
import GlassModal from "../../components/Misc/GlassModal";

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

  constructor(props, context) {
    super(props, context);

    this.handleModalShow = this.handleModalShow.bind(this);
    this.handleModalClose = this.handleModalClose.bind(this);

    this.state = {
      show: "",
      ajaxCallState: "",
      ajaxCallError: null,
      music: [],
      details: [],
      files: [],
      reviews: []
    };
  }

  handleModalClose() {
    this.setState({ show: "" });
    document.querySelectorAll(".blurable").forEach(function(e) {
      e.classList.remove("bg-blur");
    });
  }

  handleModalShow() {
    this.setState({ show: "show" });
    document.querySelectorAll(".blurable").forEach(function(e) {
      e.classList.add("bg-blur");
    });
  }

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
              <div className="blurable container-fluid">
                <div className="row">
                  <div className="col-3 mx-auto pad-0 card transparent no-shadow">
                    <div className="card-body pad-0">
                      <div className="music-icon" />
                    </div>
                  </div>
                  <div className="col-7 mx-auto">
                    <h5 className="h5-responsive grey-text">
                      {this.state.music.title}
                    </h5>
                    <UserProfilePic
                      type="inline"
                      user_id={this.state.details.owner.id}
                      user_name={this.state.details.owner.name}
                    />
                  </div>
                  <div className="col-2 mx-auto pad-top-25">
                    <a
                      className="btn btn-grey transparent pad-0 mar-0"
                      onClick={this.handleModalShow}
                    >
                      <span className="fa fa-ellipsis-v grey-text" />
                    </a>
                  </div>
                </div>
                {/* Likes, downloads summary */}
                <MusicInfoButtons
                  likes={this.state.details.likes}
                  downloads={this.state.details.downloads}
                  reviews={this.state.reviews.length}
                />
                {/* Reviews */}

                {this.state.reviews.length > 0 ? (
                  this.state.reviews.map(review => (
                    <MusicReviewListItem
                      key={review.id}
                      id={review.id}
                      user_id={review.user_id}
                      // user_name={review.user_name}
                      review={review.review}
                    />
                  ))
                ) : (
                  <div className="row">
                    <div className="pad-top-50 center-align">
                      <span className="fa fa-comments fa-4x grey-text" />
                      <h4 className="grey-text pad-top-50">
                        There are no reviews for this music piece
                      </h4>
                    </div>
                  </div>
                )}
              </div>
              <GlassModal
                title={this.state.music.title}
                showModal={this.state.show}
                hideModal={this.handleModalClose}
              />

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
