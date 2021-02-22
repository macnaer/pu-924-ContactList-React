import React, {Fragment} from "react";

// Contact Item Component
import ContactItem from "./ContactItem";

const ContactList = ({List, onFavorite, onDelete}) => {
    const contact = List.map(item => {
        return <ContactItem key={item.Id} Id={item.Id} Name={item.Name} Surname={item.Surname} Address={item.Address} Avatar={item.Avatar}
         Position={item.Position} NickName={item.NickName} Phone={item.Phone} Email={item.Email}
        Favorite={item.Favorite} onFavorite={() => onFavorite(item.Id)} onDelete={() => onDelete(item.Id)} />;
    } )
    return(
        <Fragment>
            <div className="list-group contact-group">
                {contact.length !== 0 ? contact : <h2>Contacts not found</h2>}
            </div>
        </Fragment>
        
    );
}

export default ContactList;