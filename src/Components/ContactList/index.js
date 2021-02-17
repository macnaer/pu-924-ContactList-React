import React, {Fragment} from "react";

// Contact Item Component
import ContactItem from "./ContactItem";

const ContactList = ({List}) => {
    const contact = List.map(item => {
        return <ContactItem Name={item.Name} Surname={item.Surname} Address={item.Address} Avatar={item.Avatar}
         Position={item.Position} NickName={item.NickName} Phone={item.Phone} Email={item.Email} />;
    } )
    return(
        <Fragment>
            {contact}
        </Fragment>
        
    );
}

export default ContactList;