import React from 'react';
import TextArea from './TextArea';
import Button from './Button';

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
	}

	render() {
		return (
			<div>
				<TextArea onChange={ this._textChanged } />
				<Button onClick={ this._buttonClicked } />
				<h2>{ this.state.selected } </h2>
			</div>
		);
	}
}

export default App;
