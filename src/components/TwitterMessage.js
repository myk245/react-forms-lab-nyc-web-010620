import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();
    this.state = {
      message: ''
    };
  }

  handleMessageChange = (event) => {
    this.setState({
      message: event.target.value
    })
  }

  render() {
    let charsRemaining = this.props.maxChars - this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" value={this.state.message} onChange={event => this.handleMessageChange(event)} />
        <br>
        </br>
        <strong>Characters Left: </strong>{charsRemaining}
      </div>
    );
  }
}

export default TwitterMessage;
