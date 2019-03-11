const getMonth = month => {
	const monthsArr = [
		'янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт',
		'ноя', 'дек',
	];
	return monthsArr[ month - 1 ];
};

const getDay = date => {
	const days = [ 'Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб' ];
	return days[ date.getDay() ];
};

export const parseDate = date => {
	const dateItems = date.split('.');
	const month = parseInt(dateItems[ 1 ]);
	const localDateStr = `${dateItems[ 1 ]}.${dateItems[ 0 ]}.20${dateItems[ 2 ]}`;
	const dateObj = new Date(localDateStr);
	return `${dateItems[ 0 ]} ${getMonth(month)} 20${dateItems[ 2 ]}, ${getDay(dateObj)}`;
};
