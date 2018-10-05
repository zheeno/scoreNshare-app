import React, { Component } from "react";
import { GetData } from "../../services/ApiCaller";

import { Alert, Loader, NetErr } from "../../components/Misc/Notifiables";
import View from "../Root/View";
import CatalogueCards from "./CatalogueCards";

class Catalogues extends Component {
  componentDidMount() {
    this.setState({ ajaxCallState: "fetching" });
    GetData("music/catalogue?resType=json")
      .then(result => {
        let response = result;
        this.setState({ catalogues: response });
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
    catalogues: []
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
        {this.renderCatalogue()}
      </View>
    );
  }

  renderCatalogue() {
    let result = null;
    switch (this.state.ajaxCallState) {
      case "NET_ERR":
        result = <NetErr error={this.state.ajaxCallError} />;
        break;
      case "fetching":
        result = <Loader text="Loading..." />;
        break;
      case "idle":
        if (this.state.catalogues.length === 0) {
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
              {/* Catalogues */}
              {this.state.catalogues.map(catalogue => (
                <CatalogueCards
                  key={catalogue.id}
                  id={catalogue.id}
                  category={catalogue.category}
                  description={catalogue.description}
                  created_at={catalogue.created_at}
                  updated_at={catalogue.updated_at}
                />
              ))}
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

export default Catalogues;
