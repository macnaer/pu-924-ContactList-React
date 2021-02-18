import React, {Fragment} from "react";

// Contact Item Component
import ContactItem from "./ContactItem";

const ContactList = ({List}) => {
    const contact = List.map(item => {
        return <ContactItem key={item.Id} Id={item.Id} Name={item.Name} Surname={item.Surname} Address={item.Address} Avatar={item.Avatar}
         Position={item.Position} NickName={item.NickName} Phone={item.Phone} Email={item.Email} Favorite={item.Favorite} />;
    } )
    return(
        <Fragment>
            {contact}
        </Fragment>
        
    );
}

export default ContactList;