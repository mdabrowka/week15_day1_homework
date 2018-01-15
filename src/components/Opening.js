import React from 'react';

class Opening extends React.Component {
  render() {
    return (
      <div className="opening">
          <h4>{this.props.film}</h4>
          <h5>{this.props.showtimes}</h5>
      </div>
    );
  }
}


export default Opening;
