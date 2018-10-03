import React, { Component } from "react";
import Loader from "../../components/Misc/Loader";
import Alert from "../../components/Misc/Alert";
import View from "../Root/View";
import CatalogueCards from "./CatalogueCards";

class Catalogues extends Component {
  componentDidMount() {
    this.setState({ ajaxCallState: "fetching" });
    fetch("http://sheethub.cluster/music/catalogue?resType=json")
      .then(res => res.json())
      .then(res => {
        this.setState({ catalogues: res });
        this.setState({ ajaxCallState: "idle" });
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
