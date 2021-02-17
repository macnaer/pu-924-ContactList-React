import React, { Fragment } from "react";

const Favorites = () =>{
    return(
        <Fragment>
            <h5><b>My Favorites</b></h5>
            <div className="list-group people-group">
                <a href="#" className="list-group-item">
                    <div className="media">
                        <div className="pull-left">
                            <img className="img-circle" src="https://bootdey.com/img/Content/avatar/avatar1.png" alt="..." />
                        </div>
                        <div className="media-body">
                                <h4 className="media-heading">John Wayne</h4>
                                <small>Software Engineer</small>
                        </div>
                    </div>
                </a>
            </div>
        </Fragment>
    );
} 

export default Favorites