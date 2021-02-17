import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import React, { Fragment } from "react";
import ReactDOM  from "react-dom";

// Components
import Header from "./Components/Header";
import ContactList from "./Components/ContactList";
import Search from "./Components/Search";
import Favorites from "./Components/Favorites";

const App = () => {
 
    return(
      <Fragment>
        <div className="container-fluid">
            <div className="row">
              <div className="col-md-12" ><Header/></div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <Favorites />
              </div>
              <div className="col-md-9">
                <Search />
                <ContactList />
              </div>
            </div>
        </div>
      </Fragment>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));