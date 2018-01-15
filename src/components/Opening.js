import React from 'react';

class Opening extends React.Component {
  render() {
    return (
      <div className="opening">
          <h4>{this.props.film}</h4>
          {this.props.children}
      </div>
    );
  }
}


export default Opening;
