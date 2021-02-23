import React, {Fragment} from "react";
import uuidv4 from 'react-uuid';
import { Redirect } from "react-router-dom";


class AddNewContact extends React.Component {

    state ={
        "Name": "",
        "Surname": "",
        "Avatar": "",
        "Position": "",
        "NickName": "",
        "Address": "",
        "Phone": "",
        "Email": "", 
        "Favorite": false,
        "isRedirect": false
    }

    getName = (e) => {
        const value = e.target.value;
        this.setState({
            "Name": value
        })
    }

    getSurName = (e) => {
        const value = e.target.value;
        this.setState({
            "Surname": value
        })
    }
    getAvatar = (e) => {
        const value = e.target.value;
        this.setState({
            "Avatar": value
        })
    }
    getPosition = (e) => {
        const value = e.target.value;
        this.setState({
            "Position": value
        })
    }
    getNickName = (e) => {
        const value = e.target.value;
        this.setState({
            "NickName": value
        })
    }

    getPhone = (e) => {
        const value = e.target.value;
        this.setState({
            "Phone": value
        })
    }

    getAddress = (e) => {
        const value = e.target.value;
        this.setState({
            "Address": value
        })
    }
    getEmail = (e) => {
        const value = e.target.value;
        this.setState({
            "Email": value
        })
    }

    getFavorite = (e) => {
        const value = e.target.value;
        this.setState({
            "Favorite": value
        })
    }

    onSendForm = (e) =>{
        e.preventDefault();
        const newContact = {
            "Id": uuidv4(),
            "Name": this.state.Name,
            "Surname": this.state.Surname,
            "Avatar": this.state.Avatar,
            "Position": this.state.Position,
            "NickName": this.state.NickName,
            "Address": this.state.Address,
            "Phone": this.state.Phone,
            "Email": this.state.Email,
            "Favorite": this.state.Favorite
        }
        const { onAddNewContact } = this.props;
        onAddNewContact(newContact);
        this.setState({
            "isRedirect": true
        })
    }
    

    render(){
        if (this.state.isRedirect) {
            return <Redirect to="/" />;
          }
        return(
            <Fragment>
            <div className="container">
                   <div className="modal-dialog">
                       <div className="modal-content animated fadeOutRight">
                           <div className="modal-body">
                               <div className="row modal-close">
                                   <div className="col-md-12 padding-bottom-8 padding-top-8 bg-silver">
                                       <h4 className="pull-left"><b>Create New Contact</b></h4>
                                       <ul className="list-unstyled list-inline text-right">
                                           <li className="close-right-modal"><span className="fa fa-times fa-2x" data-dismiss="modal"></span></li>
                                       </ul>
                                   </div>
                               </div>
                               <div className="row">
                                   <div className="col-md-12">
                                       <div className="contact-add-content">
                                           <form onSubmit={this.onSendForm} className="form-horizontal tabular-form margin-top-10">
                                               <div className="form-group">
                                                   <label htmlFor="name" className="col-sm-2 control-label">Name</label>
                                                   <div className="col-sm-10 tabular-border">
                                                       <input type="text" className="form-control"  name="name" placeholder="Name" onChange={this.getName}/>
                                                   </div>
                                               </div>
                                               <div className="form-group">
                                                   <label htmlFor="name" className="col-sm-2 control-label">Surname</label>
                                                   <div className="col-sm-10 tabular-border">
                                                       <input type="text" className="form-control" name="surname" placeholder="Surname" onChange={this.getSurName}/>
                                                   </div>
                                               </div>
                                               <div className="form-group">
                                                   <label htmlFor="position" className="col-sm-2 control-label">Position</label>
                                                   <div className="col-sm-10 tabular-border">
                                                       <input type="text" className="form-control" name="position" placeholder="Position" onChange={this.getPosition}/>
                                                   </div>
                                               </div>
                                               <div className="form-group">
                                                   <label htmlFor="address" className="col-sm-2 control-label">Address</label>
                                                   <div className="col-sm-10 tabular-border">
                                                       <input type="text" className="form-control" id="address" name="address" placeholder="Address" onChange={this.getAddress}/>
                                                   </div>
                                               </div>
                                               <div className="form-group">
                                                   <label htmlFor="nickname" className="col-sm-2 control-label">NickName</label>
                                                   <div className="col-sm-10 tabular-border">
                                                       <input type="text" className="form-control" id="group" name="nick" placeholder="NickName" onChange={this.getNickName}/>
                                                   </div>
                                               </div>
                                               <div className="form-group">
                                                   <label htmlFor="avatar" className="col-sm-2 control-label">Avatar</label>
                                                   <div className="col-sm-10 tabular-border">
                                                       <input type="text" className="form-control" id="group" name="avatar" placeholder="Avatar" onChange={this.getAvatar}/>
                                                   </div>
                                               </div>
                                               <div className="form-group">
                                                   <label htmlFor="phone" className="col-sm-2 control-label">Phone</label>
                                                   <div className="col-sm-10 tabular-border">
                                                       <input type="text" className="form-control" id="phone" name="phone" placeholder="Phone" onChange={this.getPhone}/>
                                                   </div>
                                               </div>
                                               <div className="form-group">
                                                   <label htmlFor="email" className="col-sm-2 control-label">Email</label>
                                                   <div className="col-sm-10 tabular-border">
                                                       <input type="text" className="form-control"  name="email" onChange={this.getEmail} placeholder="Email"/>
                                                   </div>
                                               </div>
                                               <div className="form-actions">
                                                   <button type="button" className="btn btn-silver btn-flat">Cancel</button> 
                                                   <button type="submit" className="btn btn-green btn-flat">Save Changes</button>
                                               </div>
                                           </form>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
           </div>
       </Fragment>
            
        )
    }
}

export default AddNewContact;