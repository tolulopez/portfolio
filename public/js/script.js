class TextArea extends React.Component{
  render() {
    return(React.createElement('textarea', this.props ));
  }
}

class Button extends React.Component {
  render() {
    return( React.createElement('button', this.props, 'Random'));
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.text = '';
     this.state = {selected: null};

    this._textChanged = this._textChanged.bind(this);
    this._buttonClicked = this._buttonClicked.bind(this);
  }
  _buttonClicked() {
    let names = this.text.split('\n');

    names.forEach((item, index) => {
      if(item.length == 0) {
        names.splice(index, 1);
      }

      if(index === names.length - 1) {
        this.setState( { selected: names[Math.floor(Math.random() * names.length)] });
      }
    });
  }

  _textChanged(event) {
    this.text = event.target.value;
    //log value to a prop
  }

  render() {
    return (
      React.createElement('div', {}, [
          React.createElement(TextArea, { onChange: this._textChanged }),
          React.createElement(Button, { onClick: this._buttonClicked }),
          React.createElement('h2', {}, this.state.selected)
        ]
      )
    );
  }
}

ReactDOM.render(
  React.createElement(App),
  document.querySelector('.container')
  //reference the class here
);
