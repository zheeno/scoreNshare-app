import React from "react";

export const Alert = props => {
  return (
    <div className="row pad-top-100 center-align">
      <div className="col-12">
        <span className={props.icon} />
        <div className="pad-top-25">{props.text}</div>
      </div>
    </div>
  );
};

export const Loader = props => {
  return (
    <div className="loader-icon-container row pad-top-100 center-align">
      <div className="col-12 pad-top-100">
        <div className="loader-icon animated pulse infinite" />
        {/* <div className="pad-top-25">
          <h5 className="grey-text">{props.text}</h5>
        </div> */}
      </div>
    </div>
  );
};

export const NetErr = props => {
  return (
    <div className="row pad-top-100 center-align">
      <div className="col-12">
        <span className={"fa fa-globe fa-4x grey-text"} />
        <div className="pad-top-25">
          {
            <React.Fragment>
              <h4 className="grey-text">
                <b>Network error!</b>
              </h4>
              <h4 className="grey-text pad-top-25">
                Please check your internet connection
                <p>{props.error}</p>
              </h4>
            </React.Fragment>
          }
        </div>
      </div>
    </div>
  );
};
