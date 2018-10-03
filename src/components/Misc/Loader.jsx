import React from 'react';

const Loader = (props) => {
    return ( <div className="row pad-top-100 center-align">
    <div className="col-12">
      <span className="fa fa-spinner fa-spin fa-2x grey-text" />
      <div className="pad-top-25">
        <h5 className="grey-text">{props.text}</h5>
      </div>
    </div>
  </div> );
}
 
export default Loader;