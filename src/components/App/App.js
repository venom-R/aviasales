import React, { Component } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import logo from './logo.svg';
import airlineLogo from './turkish-airlines.png';

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
							<Col className="sidebar">
								<Card className="sidebar__card">
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

										<ul className="filter">
											<li className="filter__li">
												<input type="checkbox"
												       id="filter__checkbox_all"
												       name="filterByStops"
												       value={-1}
												       className="filter__checkbox"
												       onClick={e => console.log(e.target)}
												       defaultChecked
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

							<Col className="ticket-list">
								<Card className="ticket">
									<Row className="ticket__inner">

										<Col md={4} className="ticket__body_left ticket__body">
											<img src={airlineLogo} alt="Airline logo" className="img-fluid"/>
											<button className="btn btn-buy ticket__btn-buy">
												Купить <br/> за 21 032 ₽
											</button>
										</Col>

										<Col md={8} className="ticket__body_right ticket__body">
											<div className="ticket__stops">1 пересадка</div>
											<Row className="justify-content-between">
												<Col className="ticket__details">
													<div className="ticket__details_departure">
														<div className="ticket__time">09:25</div>
														<div className="ticket__city">VVO, Владивосток</div>
														<div className="ticket__date">9 окт 2018, Пт</div>
													</div>
												</Col>

												<Col className="ticket__details">
													<div className="ticket__details ticket__details_arrival">
														<div className="ticket__time">11:45</div>
														<div className="ticket__city">Тель-Авив, TLV</div>
														<div className="ticket__date">10 окт 2018, Пт</div>
													</div>
												</Col>
											</Row>
										</Col>
									</Row>
								</Card>


								<Card className="ticket">
									<Row className="ticket__inner">

										<Col md={4} className="ticket__body_left ticket__body">
											<img src={airlineLogo} alt="Airline logo" className="img-fluid"/>
											<button className="btn btn-buy ticket__btn-buy">
												Купить <br/> за 22 245 ₽
											</button>
										</Col>

										<Col md={8} className="ticket__body_right ticket__body">
											<div className="ticket__stops">2 пересадки</div>
											<Row className="justify-content-between">
												<Col className="ticket__details">
													<div className="ticket__details_departure">
														<div className="ticket__time">10:35</div>
														<div className="ticket__city">VVO, Владивосток</div>
														<div className="ticket__date">9 окт 2018, Пт</div>
													</div>
												</Col>

												<Col className="ticket__details">
													<div className="ticket__details ticket__details_arrival">
														<div className="ticket__time">12:34</div>
														<div className="ticket__city">Тель-Авив, TLV</div>
														<div className="ticket__date">10 окт 2018, Пт</div>
													</div>
												</Col>
											</Row>
										</Col>
									</Row>
								</Card>
							</Col>
						</Row>
					</Container>
				</main>
			</div>
		);
	}
}

export default App;
