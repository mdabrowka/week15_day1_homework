import React from 'react';


class OpeningsBox extends React.Component {


  render() {
    return(
      <div className="openings-box">
        <OpeninggsList openings={this.state.openings} />
      </div>
    );
  }

}


export default OpeningsBox;
