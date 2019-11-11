import React from "react";

import Display from "../display/Display";
import Controls from "../controls/Controls";

class Dashboard extends React.Component {
  state = {
    locked: false,
    closed: false
  };

  render() {
    const { closed, locked } = this.state;

    return (
      <>
        <h1>My Gate</h1>
        <img src={require("../imgs/gateproject.jpg")} className="stars" />
        <Display locked={locked} closed={closed} />
        <Controls
          locked={locked}
          closed={closed}
          toggleLocked={this.toggleLocked}
          toggleClosed={this.toggleClosed}
        />
        <img src={require("../imgs/gateprojectone.jpg")} className="garden" />
      </>
    );
  }

  toggleLocked = () => {
    this.setState(prev => ({ locked: !prev.locked }));
  };

  toggleClosed = () => {
    this.setState(prev => ({ closed: !prev.closed }));
  };
}

export default Dashboard;
