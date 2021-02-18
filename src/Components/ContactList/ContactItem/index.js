import React from "react";

class ContactItem extends React.Component {
  
  render(){
    const { Id, Name, Surname, Avatar, Address, Position, NickName, Phone, Email, Favorite } = this.props;
    console.log("component ID => ", Id);
    return(
        <div className="list-group-item">
            <div className="media">
                <div className="pull-left">
                    <img className="img-circle" src={Avatar} alt="..." />
                </div>
                <div className="media-body">
                    <h4 className="media-heading"> {Name} {Surname} <small>{Position}</small></h4>
                    <div className="media-content"> 
                        <i className="fa fa-map-marker"></i> {Address}
                        <ul className="list-unstyled">
                            <li><a href='tel:{Phone}'><i className="fa fa-skype"></i> {NickName}</a></li>
                            <li><a href='tel:{Phone}'><i className="fa fa-mobile"></i> {Phone}</a></li>
                            <li><a href='mailto:{Email}'><i className="fa fa-envelope-o"></i> {Email}</a></li>
                            {Favorite ?  <li><i className="fa fa-star"></i></li> :<li><i className="fa fa-star-o"></i></li>}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
  }
    
}
export default ContactItem;