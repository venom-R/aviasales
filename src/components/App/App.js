import React from 'react';
import { Row } from 'react-bootstrap';
import Header from '../Header';
import Main from '../Main';
import Sidebar from '../Sidebar';
import TicketList from '../../containers/TicketListContainer';

const App = () => (
	<div className="App">
		<Header/>
		<Main>
			<Row>
				<Sidebar/>
				<TicketList/>
			</Row>
		</Main>
	</div>
);

export default App;
