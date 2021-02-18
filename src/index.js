import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import React, { Fragment, Component } from "react";
import ReactDOM  from "react-dom";
import uuidv4 from 'react-uuid'

// Components
import Header from "./Components/Header";
import ContactList from "./Components/ContactList";
import Search from "./Components/Search";
import Favorites from "./Components/Favorites";

class App extends Component {

  state = {
    List:[
      {
        "Id": uuidv4(),
        "Name": "John",
        "Surname": "Doe",
        "Avatar": "https://bootdey.com/img/Content/avatar/avatar1.png",
        "Position": ".NEt Software Engeneer",
        "NickName": "john.doe",
        "Address": "Rivne Soborna street",
        "Phone": "+63 87 789 123",
        "Email": "jd@gmail.com",
        "Favorite": false
      },
       {
        "Id": uuidv4(),
        "Name": "Richard",
        "Surname": "Sallivan",
        "Avatar": "https://bootdey.com/img/Content/avatar/avatar1.png",
        "Position": "JS Developer",
        "NickName": "js.rich",
        "Address": "Vinnuchya",
        "Phone": "+98 123 456 78",
        "Email": "jj@gmail.com",
        "Favorite": true
      }
    ]
  }

  onFavorite = (Id) =>{
    console.log("onFavorite ",Id);
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    const tmpList = this.state.List.slice();
    tmpList[index].Favorite = !tmpList[index].Favorite;
    this.setState(() => {
     return {
        Favorite: !this.tmpList
      }
    })
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
                   <div className="row">
                  <div className="col-md-6">
                      <h3>All Contacts</h3>
                  </div>
                  <div className="col-md-6">
                      <button type="button" className="btn btn-green btn-raised btn-add-new-contact"><span className="icon-plus" data-toggle="modal" data-target="#modal-pull-right-add"> Add New Contact</span></button>
                  </div>
            </div>
            <div className="list-group contact-group">
                  <ContactList List={this.state.List} onFavorite={this.onFavorite} />
                  </div>
                </div>
              </div>
          </div>
        </Fragment>
      );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));