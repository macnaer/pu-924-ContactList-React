import {Fragment} from "react";

// Contact Item Component
import ContactItem from "./ContactItem";

const ContactList = () => {
    return(
        <Fragment>
            <div className="row">
                <div className="col-md-6">
                    <h3>All Contacts</h3>
                 </div>
                <div className="col-md-6">
                    <button type="button" className="btn btn-green btn-raised btn-add-new-contact"><span className="icon-plus" data-toggle="modal" data-target="#modal-pull-right-add"> Add New Contact</span></button>
                </div>
            </div>
            <div className="list-group contact-group">
                 <ContactItem />
            </div>
           
        </Fragment>
        
    );
}

export default ContactList;