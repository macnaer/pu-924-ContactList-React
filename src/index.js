import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import React, { Fragment, Component } from "react";
import ReactDOM  from "react-dom";
import uuidv4 from 'react-uuid';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Components
import Header from "./Components/Header";
import ContactList from "./Components/ContactList";
import Search from "./Components/Search";
import Favorites from "./Components/Favorites";
import AddNewContact from "./Components/AddNewContact";
import NotFound from "./Components/NotFound";

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
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    const tmpList = this.state.List.slice();
    tmpList[index].Favorite = !tmpList[index].Favorite;
    this.setState(() => {
     return {
        Favorite: !this.tmpList
      }
    })
  }
  
  onDelete = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, ...partTwo];
    this.setState(() => {
      return {
        List: newList,
      };
    });
  }
  render(){
    return(
      <Fragment>
          <div className="container-fluid page-people-directory">
              <div className="row">
                <div className="col-md-12" ><Header/></div>
              </div>
                  <Favorites />
                 
                <Router>
                <Search />
                  <Switch>
                    <Route path="/"  exact render={() => <ContactList List={this.state.List} onFavorite={this.onFavorite} onDelete={this.onDelete} />}  />
                    <Route path="/add-new" exact component={AddNewContact} />
                    <Route component={NotFound} />
                  </Switch>
                </Router>
            </div>
        </Fragment>
      );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));