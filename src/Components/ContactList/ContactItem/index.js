import React from "react";


class ContactItem extends React.Component {
  render(){
      const { Name, Surname, Avatar, Address, Position, NickName, Phone, Email } = this.props;
      return(
        <a href="#" className="list-group-item">
            <div className="media">
                <div className="pull-left">
                    <img className="img-circle" src={Avatar} alt="..." />
                </div>
                <div className="media-body">
                    <h4 className="media-heading"> {Name} {Surname} <small>{Position}</small></h4>
                    <div className="media-content"> 
                        <i className="fa fa-map-marker"></i> {Address}
                        <ul className="list-unstyled">
                            <li><i className="fa fa-skype"></i> {NickName}</li>
                            <li><i className="fa fa-mobile"></i> {Phone}</li>
                            <li><i className="fa fa-envelope-o"></i> {Email}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </a>
    )
  }
    
}
export default ContactItem;