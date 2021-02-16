import React from "react";
import ReactDOM  from "react-dom";

// Components
import Header from "./Components/Header";

const App = () => {
 
    return(
      <Header />
    );
}

ReactDOM.render(<App />, document.getElementById("root"));