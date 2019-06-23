import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Detals from '../Detals/Detals';
import Main from '../Main/Main';

class App extends Component {
	state = {
		apiInfo: '',
		city: '',
		form: '',
		searchHistory: [],
		currentCity: '',
		error: {}
	};
	getCity = (e) => {
		e.preventDefault();
		let cityName = e.target.value;
		this.setState({
			city: cityName
		});
	};
	handleSubmit = (e) => {
		let searchedCity = this.state.city;
		e.preventDefault();
		// eslint-disable-next-line
		// const URL_Daily = `api.openweathermap.org/data/2.5/forecast?id=${this.state.cityID}`;

		const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.state
			.city}&appid=609234da9910e806cae17cef318a16ae`;
		fetch(URL)
			.then((res) => res.json())
			.then((data) =>
				this.setState({
					apiInfo: data
				})
			)
			.catch((err) => this.setState({ error: err }));

		if (this.state.searchHistory.length < 6) {
			this.setState((prev) => ({
				searchHistory: [ searchedCity, ...prev.searchHistory ],
				city: ''
			}));
		} else {
			let tempArr = this.state.searchHistory;
			tempArr.pop();
			tempArr.unshift(searchedCity);
			this.setState((prev) => ({
				searchHistory: tempArr,
				city: ''
			}));
		}
	};

	render() {
		const { city, form, searchHistory, apiInfo, error } = this.state;
		console.log(this.state.apiInfo);
		return (
			<div className="container">
				<Switch>
					<Route exact path="/Detals" render={(props) => <Detals {...props} />} />
					<Route
						exact
						path="/"
						render={(props) => (
							<Main
								{...props}
								getCity={this.getCity}
								city={city}
								onSubmit={this.handleSubmit}
								form={form}
								apiInfo={apiInfo}
								searchHistory={searchHistory}
								error={error}
							/>
						)}
					/>
				</Switch>
			</div>
		);
	}
}

export default App;
