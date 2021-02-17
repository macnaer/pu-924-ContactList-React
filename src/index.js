import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import React, { Fragment, Component } from "react";
import ReactDOM  from "react-dom";

// Components
import Header from "./Components/Header";
import ContactList from "./Components/ContactList";
import Search from "./Components/Search";
import Favorites from "./Components/Favorites";

class App extends Component {


  state = {
    ContactList:[
      {
        "Name": "John",
        "Surname": "Doe",
        "Avatar": "https://bootdey.com/img/Content/avatar/avatar1.png",
        "Position": ".NEt Software Engeneer",
        "NickName": "john.doe",
        "Phone": "+63 87 789 123",
        "Email": "jd@gmail.com"
      }
    ]
  }
  
    render(){
      return(
        <Fragment>
          <div className="container-fluid page-people-directory">
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
}

ReactDOM.render(<App />, document.getElementById("root"));