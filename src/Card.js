import React from 'react';
import './Card.css';


const JSON_DATA = [
    {"name":"visa", "first_number":"4", "limit": "13"},
    {"name":"mastercard", "first_number":"5", "limit": " 16"},
    {"name":"discover","first_number":"6", "limit": "16"},
    {"name":"american express","first_number":"3", "limit": "15"},
    {"name":"error","first_number":"0", "limit": "0"},
]


const logofooter = require('./img/img-card/Visa.png');


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {valueCard: '', valueError: ''};

        this.handleChangeCard = this.handleChangeCard.bind(this);
    }

    handleChangeCard(event) {
        var first_number = event.target.value[0];

        this.setState({valueCard: event.target.value});
    }


    ParseCardJson(number){

    }


    render() {
        return (
            <form className="credit-card">
            <div className="form-header">
                <h4 className="title">Credit card detail</h4>
                <img className='credit-card-logo' alt='credit-card' src={logofooter}/>
                <div className="error-number">
                    <p>{this.state.valueCard}</p>
                </div>
            </div>

            <div className="form-body">
                {/* Card Number */}
                <input type="text" className="card-number" placeholder="Card Number" value={this.state.valueCard} onChange={this.handleChangeCard}/>


                    {/* Date Field */}
                    <div className="date-field">
                        <div className="month">
                            <select name="Month">
                                <option value="january">January</option>
                                <option value="february">February</option>
                                <option value="march">March</option>
                                <option value="april">April</option>
                                <option value="may">May</option>
                                <option value="june">June</option>
                                <option value="july">July</option>
                                <option value="august">August</option>
                                <option value="september">September</option>
                                <option value="october">October</option>
                                <option value="november">November</option>
                                <option value="december">December</option>
                            </select>
                        </div>
                        <div className="year">
                            <select name="Year">
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                                <option value="2018">2018</option>
                                <option value="2019">2019</option>
                                <option value="2020">2020</option>
                                <option value="2021">2021</option>
                                <option value="2022">2022</option>
                                <option value="2023">2023</option>
                                <option value="2024">2024</option>
                            </select>
                        </div>
                    </div>

                    {/* Card Verification Field */}
                    <div className="card-verification">
                        <div className="cvv-input">
                            <input type="text" placeholder="CVV"/>
                        </div>
                        <div className="cvv-details">
                            <p>3 or 4 digits usually found <br/> on the signature strip</p>
                        </div>
                    </div>

            </div>
        </form>

        );
    }
}

export default Card;
