import React from 'react';
import ColorButton from './color-button';

class Greeting extends React.Component {
  render() {
    return (
      <div className="greeting">
        <h1>Hello, { this.props.name }!</h1>
        <ColorButton color="red" title="hehe"/>
      </div>
    );
  }
}

Greeting.propTypes = { name: React.PropTypes.string.isRequired };

export default Greeting;
