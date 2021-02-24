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

  URL = "https://contactpu-f0afd-default-rtdb.firebaseio.com/list.json"

  state = {
    List:[]
  }


  componentDidMount(){
    this.updateContacts();
  }

  async updateContacts(){
   await fetch(this.URL)
    .then(responce => {
      return responce.json()
    })
    .then(data => {
      if (data == null) {
        this.setState({
          List: [],
        });
      } else {
        this.setState({
          List: data,
        });
      }
    })
    .catch(err => console.log(err));
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

  onAddNewContact = (newContact) => {
    this.onSaveData(newContact);
    const newList = [...this.state.List, newContact];
    this.setState((state) => {
      return {
        List: newList,
      };
    });
  }

  onSaveData = (newContact) => {
    fetch(this.URL, {
      "method": "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newContact)
    })
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
                    <Route path="/add-new" exact component={() => <AddNewContact onAddNewContact={this.onAddNewContact} />} />
                    <Route component={NotFound} />
                  </Switch>
                </Router>
            </div>
        </Fragment>
      );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));