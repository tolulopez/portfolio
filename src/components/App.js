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

  componentDidMount(){//if this is defined it will automatically be called for you this will be called automatically after the render function is triggered for the first time
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get('names')) {
        this.setState({text: urlParams.get('names')}
      );
    }
  }
  //just doing this caused the page to refresh with every keypress

	_buttonClicked() {
		let names = this.state.text.split(',');

		names.forEach((item, index) => {
			if(item.length == 0) {
				names.splice(index, 1);
			}

			if(index === names.length - 1) {
				this.setState( { selected: names[Math.floor(Math.random() * names.length)] });
			}
		});
	}
  //
  // _updateQueryStringParameter(uri, key, value) {
  //   var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
  //   var separator = uri.indexOf('?') !== -1 ? "&" : "?";
  //   if (uri.match(re)) {
  //     return uri.replace(re, '$1' + key + "=" + value + '$2');
  //   }
  //   else {
  //     return uri + separator + key + "=" + value;
  //   }
  // }

  _updateUrlQueryString() {
    let newStr;

    if (history.pushState) {//not every browser supports this so we have to check
      newStr = this.state.text;
      const newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?names=' + newStr;
      window.history.pushState({path:newurl},'',newurl);
    }
  }

	_textChanged(event) {
    // this._updateUrlQueryString();
    // window.location.search = '?names=' + this.state.text;
		// this.text = event.target.value;//(regular variable nothing is happening) this method gives it a new value when targetted
    this.setState({text: event.target.value}, function() {
      this._updateUrlQueryString();//need a callback
    }) //once the state(variable) is changed rerender happens */
	}

	render() {
    //location.search.substring(6, location.search.length).split(',')

        //simply calling this.setState({text: urlParams.get('names')}); in a render function triggers the render function which sends you into a loop

		return (
			<div className="box">
        <p>Please enter your team members names comma seperated, then hit the random genator button</p>
				<TextArea onChange={ this._textChanged } className={'textarea'} value = { this.state.text } />
        {
          //hook the value to a state //onchange is updating the state after every keypress
        }
        <br/>
				<Button onClick={ this._buttonClicked } className={'button'}/>
				<h2 className="result">{ this.state.selected } </h2>
			</div>
		);
	}
}

export default App;
