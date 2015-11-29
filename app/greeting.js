import React from "react";

export default React.createClass({
  render: function(argument) {
    return (
      <div className="greeting">
        Hello, {this.props.name}!
      </div>
    );
  }
});
