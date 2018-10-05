import React, { Component } from "react";
import { GetData } from "../../services/ApiCaller";

import Loader from "../../components/Misc/Loader";
import Alert from "../../components/Misc/Alert";
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
      })
      .catch(error => {
        alert(
          `Error encountered while fetching content. Please check your
                internet connection and try again.` + error
        );
      });
  }

  state = {
    ajaxCallState: "",
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
    if (this.state.ajaxCallState === "fetching") {
      return <Loader text="Loading..." />;
    } else if (
      this.state.catalogues.length === 0 &&
      this.state.ajaxCallState === "idle"
    ) {
      return (
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
      //   else
      return (
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
  }
}

export default Catalogues;
