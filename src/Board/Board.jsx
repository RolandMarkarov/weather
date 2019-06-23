import React from 'react';
import './Board.css';

const Board = ({ apiInfo, error }) => {
	return (
		<div className="board">
			{apiInfo.main !== undefined ? (
				<div className="board_wrapper">
					<h2 className="board_title">{apiInfo ? apiInfo.name + ' Weather Forecast' : []} </h2>
					<div className="board_info">
						{apiInfo.main !== 'undefined' ? (
							<ul className="info">
								<li className="info_line">
									Humidity: <span className="info_line-span">{apiInfo.main.humidity}</span>
								</li>
								<li className="info_line">
									Pressure: <span className="info_line-span">{apiInfo.main.pressure}</span>
								</li>
								<li className="info_line">
									Weather: <span className="info_line-span">{apiInfo.weather[0].description}</span>
								</li>
								<li className="info_line">
									Wind: <span className="info_line-span">{apiInfo.wind.speed} km/h</span>
								</li>
								<li className="info_line">
									Temperature: <span className="info_line-span">{apiInfo.main.temp}C</span>
								</li>
							</ul>
						) : (
							[]
						)}
					</div>
				</div>
			) : (
				<h2 className="board_error">{apiInfo.message}</h2>
			)}
		</div>
	);
};

export default Board;
