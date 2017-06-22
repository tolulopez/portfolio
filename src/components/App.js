import React from 'react';
import TextArea from './TextArea';
import Button from './Button';

class App extends React.Component {// this is the root of the app
	constructor(props) {
		super(props);
//this varable will be used across this component
		// this.text = '';
    //empty string this is not a state so the render function will not change
		this.state = {
      selected: null,
      text: ''
    };
    //similar to a variable two differences can't change the state with an "=" instead you MUST "setState"
    //each time setState is called and the state is changed react rerenders the compenent(calls render function again)

		this._textChanged = this._textChanged.bind(this);
		this._buttonClicked = this._buttonClicked.bind(this);
	}

  componentWillMount(){//if this is defined it will automatically be called for you this will be called automatically after the render function is triggered for the first time
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get('names')) {
        this.setState({text: urlParams.get('names')}
      );
    }
  }

  render() {
    //location.search.substring(6, location.search.length).split(',')

    //simply calling this.setState({text: urlParams.get('names')}); in a render function triggers the render function which sends you into a loop

    return (
      <div className="box">
        <p>Please enter your team members names comma seperated, then hit the random genator button</p>
        <TextArea onChange={ this._textChanged } className={'textarea'} value = { this.state.text } />
        <br/>
        <Button onClick={ this._buttonClicked } className={'button'}/>
        <h2 className="result">{ this.state.selected } </h2>
      </div>
    );
  }

  _textChanged(event) {
    // this._updateUrlQueryString();
    // window.location.search = '?names=' + this.state.text;
    // this.text = event.target.value;//(regular variable nothing is happening) this method gives it a new value when targetted
    this.setState({text: event.target.value}) //once the state(variable) is changed rerender happens */
  }
  //just doing this caused the page to refresh with every keypress

	_buttonClicked() {
		let names = this.state.text.split(',');

		names.forEach((item, index) => {
			if(item.length == 0) {
				names.splice(index, 1);
			}

			if(index === names.length - 1) {
				this.setState( { selected: names[Math.floor(Math.random() * names.length)] }, this._updateUrlQueryString);
			}
		});
	}

  _updateUrlQueryString() {
    window.location.search = '?names=' + this.state.text;
  }
}

export default App;
