import React from "react";

class Header extends React.Component {
  render() {
    return (
      <nav>
        <img src = "my-app/src/logo.svg" />
      </nav>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
}

export default App;
