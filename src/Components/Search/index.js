import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Search = () => {
    return(
        <Fragment>
       
        <div className="row">
                  <div className="col-md-6">
                      <h3>All Contacts</h3>
                  </div>
                  <div className="col-md-6">
                      <Link to="/add-new" className="btn btn-green btn-raised btn-add-new-contact"><span className="icon-plus" data-toggle="modal" data-target="#modal-pull-right-add"> Add New Contact</span></Link>
                </div>
        </div>
        </Fragment>
    )
}

export default Search