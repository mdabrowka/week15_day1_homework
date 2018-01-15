import React from 'react';
import Opening from './Opening.js';

class OpeningsList extends React.Component {

  render() {

    const openingNodes = this.props.openings.map(function(opening){
      return (
        <Opening key={opening.id} film={opening.film} showtimes={opening.showtimes}></Opening>
      )
    })

    return(
      <div className="openings-list">
        {openingNodes}
      </div>
    );
  }
}

export default OpeningsList;
