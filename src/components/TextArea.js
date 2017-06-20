import React from 'react';

class TextArea extends React.Component{
  render() {
    return(
    	<textarea { ...this.props }>{ this.props.names }</textarea>
      
	);
  }
}

export default TextArea;
