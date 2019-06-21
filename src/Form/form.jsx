import React from 'react';
import './form.css';

const Form = ({ getCity, city, onSubmit, form }) => {
	return (
		<form className="form" onSubmit={onSubmit}>
			<input className="form_input" type="text" name="city" id="" onChange={getCity} value={city} />

			<button className="form_button" type="submit">
				search
			</button>
		</form>
	);
};

export default Form;
