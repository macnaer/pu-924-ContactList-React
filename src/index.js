import { Fragment } from "react";
import ReactDOM  from "react-dom";

// Components
import Header from "./Components/Header";
import ContactList from "./Components/ContactList";

const App = () => {
 
    return(
      <Fragment>
        <Header />
        <ContactList />
      </Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));