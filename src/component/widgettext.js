import React from "react";

function widgetText(props) {
  return (
    <div>
      <div className="widgetWrap">
        <div className="widgetTitle">{props.title}</div>
        <div className="widgetValue">
          <div className="value">{props.value}</div>
          <div className="text">{props.text}</div>
        </div>
      </div>
    </div>
  );
}

export default widgetText;
