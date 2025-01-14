import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = event => {
    this.setState({
      message: event.target.value
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.message}
        />
        <h3>
          {" "}
          Remaining Characters:{" "}
          {this.props.maxChars - this.state.message.length}
        </h3>
      </div>
    );
  }
}

export default TwitterMessage;
