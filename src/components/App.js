import React from 'react';
import TextArea from './TextArea';
import Button from './Button';

class App extends React.Component {// this is the root of the app
	constructor(props) {
		super(props);
//this varable will be used across this component
		this.text = '';
		this.state = {selected: null};//similar to a variable two differences can't change the state with an "=" instead you MUST "setState"
    //each time setState is called and the state is changed react rerenders the compenent(calls render function again)

		this._textChanged = this._textChanged.bind(this);
		this._buttonClicked = this._buttonClicked.bind(this);
	}
	_buttonClicked() {
		let names = this.text.split(',');

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
		this.text = event.target.value;// this method gives it a new value when targetted
	}

	render() {
    //location.search.substring(6, location.search.length).split(',')
    const urlParams = new URLSearchParams(window.location.search);

    if (urlParams.get('names')) {
        this.text = urlParams.get('names');
    }

		return (
			<div className="box">
        <p>Please enter your team members names comma seperated, then hit the random genator button</p>
				<TextArea onChange={ this._textChanged } className={'textarea'} value = { this.text } />
        <br/>
				<Button onClick={ this._buttonClicked } className={'button'}/>
				<h2 className="result">{ this.state.selected } </h2>
			</div>
		);
	}
}

export default App;
