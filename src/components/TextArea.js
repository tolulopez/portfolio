import React from 'react';

class TextArea extends React.Component{
  render() {
    return(
    	<textarea { ...this.props } />
	);
  }
}

export default TextArea;
