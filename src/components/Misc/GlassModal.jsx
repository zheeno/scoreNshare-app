import React, { Component } from "react";
// import { Button, Modal } from "react-bootstrap";

class GlassModal extends Component {
  render() {
    return (
      <div
        className={"modal fade glass-modal " + this.props.showModal}
        id="mainModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="mainModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-bottom transparent" role="document">
          <div className="modal-content">
            <div className="modal-header ellipsis">
              <h4 className="modal-title grey-text" id="mainModalLabel">
                {this.props.title}
              </h4>
              <a
                className="btn btn-sm transparent no-shadow white-text"
                onClick={this.props.hideModal}
                aria-label="Close"
              >
                <span
                  aria-hidden="true"
                  className="white-text fa fa-angle-down fa-2x"
                />
              </a>
            </div>
            <div className="modal-body  pad-bot-50" />
          </div>
        </div>
      </div>
    );
  }
}

export default GlassModal;
