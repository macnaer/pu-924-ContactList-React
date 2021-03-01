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

// Store
import store from "./store";
import { Provider } from "react-redux";

class App extends Component {

  render(){
    return(
      <Fragment>
         <Provider store={store}>
          <div className="container-fluid page-people-directory">
              <div className="row">
                <div className="col-md-12" ><Header/></div>
              </div>
                  <Favorites />
                 
                <Router>
                <Search />
                  <Switch>
                    <Route path="/"  exact render={() => <ContactList  />}  />
                    <Route path="/add-new" exact component={() => <AddNewContact onAddNewContact={this.onAddNewContact} />} />
                    <Route component={NotFound} />
                  </Switch>
                </Router>
            </div>
            </Provider>
        </Fragment>
      );
    }
}

ReactDOM.render(<App />, document.getElementById("root"));