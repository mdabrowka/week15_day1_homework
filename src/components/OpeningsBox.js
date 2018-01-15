import React from 'react';
import OpeningsList from './OpeningsList.js';


class OpeningsBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      openings: [
          {id: 1, film: 'Sausage Party', showtimes: "18.01 at 13.00"},
          {id: 2, film: 'Cafe Society', showtimes: "19.01 at 14.00"},
          {id: 3, film: 'Morgan', showtimes: "21.01 at 14.00"},
          {id: 4, film: 'The 9th Life of Louis Drax', showtimes: "21.01 at 15.00"},
          {id: 5, film: 'Naam Hai Akira', showtimes: "22.01 at 16.00"},
          {id: 6, film: 'Equity', showtimes: "23.01 at 17.00"},
          {id: 7, film: 'Things to come', showtimes: "23.01 at 18.00"},
      ]
    };
  }


  render() {
    return(
      <div className="openings-box">
        <h1> {this.props.title} </h1>
        <OpeningsList openings={this.state.openings} />
      </div>
    );
  }

}


export default OpeningsBox;
