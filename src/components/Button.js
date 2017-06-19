import React from 'react';

class Button extends React.Component {
  render() {
    return(
    	<button { ...this.props } >Random</button>
    );
  }
}

export default Button;
