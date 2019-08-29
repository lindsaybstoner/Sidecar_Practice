import React, { Component } from 'react';

class App extends Component {
  state = {
    clicked: false,
    textInfo: "click the button",
  }

  handleChange = () => {
    this.setState({
      clicked: true,
      textInfo: "you've clicked the button"
    });
  }

  render() {
    return (
      <>
        <div>
          <header>
            <p>Hello I am a boring react app trying to learn redux! Hi</p>
            <button onClick={this.handleChange}>Click ME!!</button>
            <p>{this.state.textInfo}</p>
          </header>
        </div>
      </>
    )
  }
};

export default App;
