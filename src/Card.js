import React from 'react';
import './Card.css';


class Card extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputCard: '',
            descCard: '',
        };
        this.handleChangeCard = this.handleChangeCard.bind(this);
    }

    handleChangeCard(event) {
        let first_number = event.target.value[0];

        switch (first_number){
            case '3':
                this.setState({descCard: 'american express' });
                break;
            case '4':
                this.setState({descCard: 'visa' });
                break;
            case '5':
                this.setState({descCard: 'mastercard' });
                break;
            case '6':
                this.setState({descCard: 'discover' });
                break;
            case undefined:
                this.setState({descCard: '' });
                break;
            default:
                this.setState({descCard: 'unregognizable card' });
        }
        this.setState({inputCard: event.target.value});
        }



    render() {
        return (
            <form className="credit-card card--animation">
            <div className="form-header">
                <h4 className="title">Credit card detail</h4>
                <div className="description-card">
                    <p className="input-card">{this.state.descCard}</p>
                </div>
            </div>

            <div className="form-body">
                {/* Card Number */}
                <input type="text" className="card-number" placeholder="Card Number" value={this.state.inputCard} onChange={this.handleChangeCard}/>


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
