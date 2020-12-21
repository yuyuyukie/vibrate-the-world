import React from "react";

class Vibrator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isVibrating: false,
      interval: null,
    };
  }
  toggleVibrate(e) {
    if (this.state.isVibrating) {
      window.navigator.vibrate(0);
      clearInterval(this.state.interval);
      this.setState(() => {
        return {
          isVibrating: false,
          interval: null,
        };
      });
      console.log("vibration stop");
    } else {
      this.setState(() => {
        return {
          isVibrating: true,
          interval: setInterval(window.navigator.vibrate, 1000),
        };
      });
      console.log("vibration start");
    }
  }
  render() {
    return (
      <div id="Vibrator">
        <button
          id="toggle"
          isVibrating={this.state.isVibrating}
          onClick={this.toggleVibrate.bind(this)}
        >
          {this.state.isVibrating ? "Stop" : "Start"}
        </button>
      </div>
    );
  }
}

export default Vibrator;
