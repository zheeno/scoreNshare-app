import React from 'react';

const Alert = (props) => {
    return ( 
        <div className="row pad-top-100 center-align">
            <div className="col-12">
              <span className={props.icon} />
              <div className="pad-top-25">
                {props.text}
              </div>
            </div>
          </div> );
}
 
export default Alert;