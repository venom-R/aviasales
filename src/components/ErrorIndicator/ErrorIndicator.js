import React from 'react';
import './ErrorIndicator.scss';

const ErrorIndicator = () => {
	return (
		<div className="error-indicator alert alert-danger">
			Что-то пошло не так :(
		</div>
	);
};

export default ErrorIndicator;
