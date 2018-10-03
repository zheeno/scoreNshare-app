import React, { Component } from "react";
import View from "../Root/View";
import Loader from "../../components/Misc/Loader";
import Alert from "../../components/Misc/Alert";
import MusicList from "../../components/MusicList/MusicList";

class CatalogueContent extends Component {
  componentDidMount() {
    this.setState({ ajaxCallState: "fetching" });
    const { category } = this.props.match.params;
    fetch(
      "http://sheethub.cluster/music/catalogue/" + category + "?resType=json"
    )
      .then(res => res.json())
      .then(res => {
        this.setState({ musics: res.musics });
        this.setState({ category: res.category });
        this.setState({ ajaxCallState: "idle" });
      });
  }

  state = {
    ajaxCallState: "",
    musics: [],
    category: []
  };

  render() {
    return (
      <View
        title={"Catalogues"}
        menu={false}
        goBack={() => {
          this.props.history.goBack();
        }}
      >
        <React.Fragment>{this.renderCatContent()}</React.Fragment>
      </View>
    );
  }

  renderCatContent() {
    if (this.state.ajaxCallState === "fetching") {
      return (
        <Loader
          text={
            <span>
              Fetching Catalogue Contents
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
              There are currently no music content in this catalogue
            </h4>
          }
        />
      );
    } else {
      //   else
      return (
        <React.Fragment>
          <div className="card transparent">
            <div className="row">
              <div className="col-3 mx-auto pad-0 card transparent no-shadow">
                <div className="card-body pad-0">
                  <div className="music-icon" />
                </div>
              </div>
              <div className="col-9 mx-auto">
                <h4 className="h4-responsive grey-text">
                  {this.state.category.category}
                </h4>
                <div>
                  <span className="badge black grey-text">
                    <span className="fa fa-music" />
                    &nbsp;&middot;&nbsp;
                    {this.state.musics.length}
                  </span>
                </div>
              </div>
              <div className="col-11 mx-auto">
                <p class="grey-text">{this.state.category.description}</p>
              </div>
            </div>
          </div>
          <ul className="list-group">
            {this.state.musics.map(musicItem => (
              <MusicList key={musicItem.music.id} contents={musicItem} />
            ))}
          </ul>
        </React.Fragment>
      );
    }
  }
}

export default CatalogueContent;
