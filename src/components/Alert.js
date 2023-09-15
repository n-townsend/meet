import { Component } from 'react';

class Alert extends Component {
  constructor(props) {
    super(props);
    this.color = null;
    this.bgColor = null;
  }

  getStyle = () => {
    return {
      color: this.color,
      backgroundColor: this.bgColor,
      fontWeight: 'bolder',
      borderColor: this.color,
      textAlign: 'center',
      fontSize: '18px',
      margin: '10px 0',
      padding: '10px',
    };
  };

  render() {
    return (
      <div className="Alert">
        <p style={this.getStyle()}>{this.props.text}</p>
      </div>
    );
  }
}

class InfoAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(0, 0, 255)'; // blue
    this.bgColor = 'rgb(255,255,255)';
  }
}

class ErrorAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(255, 0, 0)'; // red
    this.bgColor = 'rgb(255,255,255)';
  }
}

class WarningAlert extends Alert {
  constructor(props) {
    super(props);
    this.color = 'rgb(255, 99, 77)'; // orange;
    this.bgColor = 'rgb(255,255,255)';
  }
}

export { InfoAlert, ErrorAlert, WarningAlert };