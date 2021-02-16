import {Fragment} from "react";

// Contact Item Component
import ContactItem from "./ContactItem";

const ContactList = () => {
    return(
        <Fragment>
            <h2>Contact List</h2>
            <ContactItem />
            <ContactItem />
            <ContactItem />
        </Fragment>
        
    );
}

export default ContactList;