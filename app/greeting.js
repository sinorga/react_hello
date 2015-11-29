import React from "react";

export default React.createClass({
  render: function(argument) {
    return (
      <div className="greeting">
        <h1>Hello, {this.props.name}!</h1>
      </div>
    );
  }
});
