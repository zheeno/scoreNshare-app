import React, { Component } from "react";
import { GetData } from "../../services/ApiCaller";

import View from "../Root/View";
import { Alert, Loader, NetErr } from "../../components/Misc/Notifiables";
import MusicList from "../../components/MusicList/MusicList";

class CatalogueContent extends Component {
  componentDidMount() {
    this.setState({ ajaxCallState: "fetching" });
    const { category } = this.props.match.params;
    GetData("music/catalogue/" + category + "?resType=json")
      .then(result => {
        let response = result;
        this.setState({ musics: response.musics });
        this.setState({ category: response.category });
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
                Fetching Catalogue Contents
                <p className="pad-top-25">Please Wait...</p>
              </span>
            }
          />
        );
        break;
      case "idle":
        if (this.state.musics.length === 0) {
          result = (
            <Alert
              type="info"
              icon={"fa fa-info-circle fa-4x grey-text"}
              text={
                <h4 className="grey-text">
                  There are currently no music content in this catalogue
                </h4>
              }
            />
          );
        } else {
          result = (
            <React.Fragment>
              <div className="card transparent no-shadow">
                <div className="row">
                  <div className="col-3 mx-auto pad-0 card transparent no-shadow">
                    <div className="card-body pad-0">
                      <div className="music-icon" />
                    </div>
                  </div>
                  <div className="col-9 mx-auto">
                    <h3 className="grey-text">
                      {this.state.category.category}
                    </h3>
                    <div>
                      <span className="lead-text grey-text">
                        <span className="fa fa-music" />
                        &nbsp;&middot;&nbsp;
                        {this.state.musics.length}
                        &nbsp;Song
                        {this.state.musics.length > 1 ? "s" : ""}
                      </span>
                    </div>
                  </div>
                  <div className="col-11 mx-auto">
                    <p className="grey-text lead-text">
                      {this.state.category.description}
                    </p>
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
        break;
      default:
        // nothing yet
        break;
    }
    return result;
  }
}

export default CatalogueContent;
