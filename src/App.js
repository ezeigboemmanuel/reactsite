import React from "react";
import Navbar from "./components/Navbar.js";
import Main from "./components/Main.js";
import Data from "./components/Data.js";


class App extends React.Component {
  render() {
    const data = Data.map(datum => <Main item = {datum} />)
    return (
      <div>
        <Navbar />
        {data}
      </div>
    )
  }
}

export default App;
