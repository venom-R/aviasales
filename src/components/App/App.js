import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import logo from './logo.svg';

class App extends Component {

	render() {
		return (
			<div className="App">
				<header className="header">
					<Container>
						<a href="/" className="header__link">
							<img src={logo} alt="Logo"/>
						</a>
					</Container>
				</header>

				<main className="main">
					<Container>
						<Row>
							<Col md={4}>
								<Card className="sidebar mr-3">
									<Card.Body>
										<Card.Subtitle className="sidebar__subtitle mb-2">Валюта</Card.Subtitle>

										<div className="select-currency">
											<div className="select-currency__btn-group btn-group btn-group-toggle my-2">
												<label className="btn select-currency__btn select-currency__btn_active">
													<input type="radio"
													       name="currency"
													       value="rub"
													/>RUB
												</label>

												<label className="btn select-currency__btn">
													<input type="radio"
													       name="currency"
													       value="usd"
													/>USD
												</label>

												<label className="btn select-currency__btn">
													<input type="radio"
													       name="currency"
													       value="eur"
													/>EUR
												</label>
											</div>
										</div>
										{/* select currency end */}

										<Card.Subtitle className="sidebar__subtitle mt-4 mb-3">
											Количество пересадок
										</Card.Subtitle>

										<ul className="list-unstyled filter">
											<li className="filter__li">
												<input type="checkbox"
												       id="filter__checkbox_all"
												       name="filterByStops"
												       value={-1}
												       className="filter__checkbox"
												       onClick={e => console.log(e.target)}
												/>
												<label htmlFor="filter__checkbox_all" className="filter__item">
													Все
												</label>
											</li>

											<li className="filter__li">
												<input type="checkbox"
												       id="filter__checkbox_0"
												       name="filterByStops"
												       value={0}
												       className="filter__checkbox"
												       onClick={e => console.log(e.target)}
												/>
												<label htmlFor="filter__checkbox_0" className="filter__item">
													Без пересадок
												</label>
												<button type="button" className="filter__btn-only">
													Только
												</button>
											</li>

											<li className="filter__li">
												<input type="checkbox"
												       id="filter__checkbox_1"
												       name="filterByStops"
												       value={1}
												       className="filter__checkbox"
												       onClick={e => console.log(e.target)}
												/>
												<label htmlFor="filter__checkbox_1" className="filter__item">
													1 пересадка
												</label>
												<button type="button" className="filter__btn-only">
													Только
												</button>
											</li>

											<li className="filter__li">
												<input type="checkbox"
												       id="filter__checkbox_2"
												       name="filterByStops"
												       value={2}
												       className="filter__checkbox"
												       onClick={e => console.log(e.target)}
												/>
												<label htmlFor="filter__checkbox_2" className="filter__item">
													2 пересадки
												</label>
												<button type="button" className="filter__btn-only">
													Только
												</button>
											</li>

											<li className="filter__li">
												<input type="checkbox"
												       id="filter__checkbox_3"
												       name="filterByStops"
												       value={3}
												       className="filter__checkbox"
												       onClick={e => console.log(e.target)}
												/>
												<label htmlFor="filter__checkbox_3" className="filter__item">
													3 пересадки
												</label>
												<button type="button" className="filter__btn-only">
													Только
												</button>
											</li>
										</ul>
										{/*filter end*/}

									</Card.Body>
								</Card>
							</Col>

							<Col md={8}>
								Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, dolore, ducimus ea
								facilis labore necessitatibus officia pariatur praesentium quod repellendus, soluta sunt
								tenetur veniam. Aliquam aut expedita iusto magnam qui.
							</Col>
						</Row>
					</Container>
				</main>
			</div>
		);
	}
}

export default App;
