import React from 'react';
import moment from 'moment';
import SingleDatePicker from 'react-dates/lib/components/SingleDatePicker';
import 'react-dates/lib/css/_datepicker.css';

class SingleDatePickerWrapper extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			focused: props.autoFocus,
			date: props.initialDate,
		};

		this.onDateChange = this.onDateChange.bind(this);
		this.onFocusChange = this.onFocusChange.bind(this);
	}

	onDateChange(date) {
		this.setState({ date });
	}

	onFocusChange({ focused }) {
		this.setState({ focused });
	}

	render() {
		const { focused, date } = this.state;

		return (
			<SingleDatePicker
				date={date}
				focused={focused}
				onDateChange={this.onDateChange}
				onFocusChange={this.onFocusChange}
			/>
		);
	}
}

export default SingleDatePickerWrapper;
