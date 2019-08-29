import React, { Component } from 'react';

class App extends Component {
  state = {
    clicked: false,
  }
  render() {
    return (
      <>
        <div>
          <header>
            <p>Hello I am a boring react app trying to learn redux!</p>
          </header>
        </div>
      </>
    )
  }
};

export default App;
