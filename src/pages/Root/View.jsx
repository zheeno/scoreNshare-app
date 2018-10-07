import React from "react";

const View = props => {
  return (
    <React.Fragment>
      <div className="App">
        <nav className="blurable navbar pad-0 bg-black-sheet bg-wine-filter fixed-top">
          <div className="row pad-0 w-100">
            <div className="col-2">
              <a
                onClick={props.goBack}
                className="btn btn-md pull-left btn-outline-white m-0 transparent no-border no-shadow"
              >
                <span className="fa fa-angle-left" />
              </a>
            </div>
            <div className="col-10 pad-0 left-align ellipsis">
              <h5 className="h5-responsive grey-text">{props.title}</h5>
            </div>
          </div>
        </nav>
        <main className="container pad-0 pad-top-50 overflow-y">
          {props.children}
        </main>
      </div>
    </React.Fragment>
  );
};

export default View;
