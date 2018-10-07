import React from "react";

export const FooterPlayer = props => {
  return (
    <div className="blurable navbar fixed-bottom grey darken-4 pad-0">
      <div className="row">
        <div className="col-12">
          <audio preload="auto" controls id="audio_player" data-state="stopped">
            <source src={props.source} />
          </audio>
        </div>
      </div>
    </div>
  );
};
