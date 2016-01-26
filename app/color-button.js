import React from 'react';

class ColorButton extends React.Component {
  render() {
    const styleOpt = {
      backgroundColor: this.props.color,
    };
    return (
      <div>
        <button style={styleOpt}>
          {this.props.title}
        </button>
      </div>);
  }
}

ColorButton.propTypes = {
  title: React.PropTypes.string.isRequired,
  color: React.PropTypes.string.isRequired,
};

export default ColorButton;
