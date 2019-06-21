import React from 'react';
import './History.css';
import HistoryItem from '../HistoryItem/HistoryItem';

const History = ({ searchHistory }) => {
	return (
		<ul className="list">
			{searchHistory ? searchHistory.map((el, idx) => <HistoryItem key={idx} element={el} />) : []}
		</ul>
	);
};

export default History;
