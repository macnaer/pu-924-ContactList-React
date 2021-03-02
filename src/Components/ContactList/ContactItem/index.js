import React from "react";
import "./index.css";

class ContactItem extends React.Component {

    // shouldComponentUpdate(nextProps, nextState){
    //     console.log("shouldComponentUpdate");
    //     console.log("nextState ", nextState);
    //     console.log("nextProps ", nextProps);
    //     // if (nextProps.Avatar === nextState.Avatar){
    //     //     return true;
    //     // }
    //     // else{
    //     //     return false;
    //     // }
    //     return true;
    //   }

    //   componentDidUpdate(){
    //       console.log("componentDidUpdate");
    //   }
    //   componentWillUnmount(){
    //       console.log("componentWillUnmount")
    //   }
  
  render(){
    const { Id, Name, Surname, Avatar, Address, Position, NickName, Phone, Email,
         Favorite, onFavorite, onDelete } = this.props;
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
                            {Favorite ?  <li><i onClick={onFavorite} className="fa fa-star fa-lg favorite "></i></li> :<li><i onClick={onFavorite} className="fa fa-star-o fa-4x favorite"></i></li>}
                            <li><i className="fa fa-trash trash" aria-hidden="true"  onClick={onDelete}></i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
  }
    
}
export default ContactItem;