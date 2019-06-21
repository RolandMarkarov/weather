import React from 'react';
import Board from '../Board/Board';
import Navigation from '../Navigation/Navigation';
import Form from '../Form/form';
import History from '../History/History';

const Main = ({ getCity, city, onSubmit, form, apiInfo, searchHistory }) => {
	return (
		<div>
			<Form getCity={getCity} city={city} onSubmit={onSubmit} form={form} />
			<History searchHistory={searchHistory} />
			<Board apiInfo={apiInfo} />
			<Navigation prop={'See Details'} path={'/Detals'} />
		</div>
	);
};

export default Main;
