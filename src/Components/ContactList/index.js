import React, {Fragment} from "react";
import { connect } from "react-redux";
import { getContactList } from "../../Actions/ContactListActions";

// Contact Item Component
import ContactItem from "./ContactItem";

class ContactList extends React.Component {

    
  URL = "https://contactpu-f0afd-default-rtdb.firebaseio.com/list.json"
    
  componentDidMount(){
    this.updateContacts();
  }

  async updateContacts(){

    const { getContactList, loading } = this.props;
    console.log("this.props ", this.props);

   await fetch(this.URL)
    .then(responce => {
      return responce.json()
    })
    .then(data => {
      if (data == null) {
        loading
        console.log(loading);
        getContactList(data);
      } else {
       
      }
    })
    .catch(err => console.log(err));
  }
 

  onFavorite = (Id) =>{
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    const tmpList = this.state.List.slice();
    tmpList[index].Favorite = !tmpList[index].Favorite;
    this.setState(() => {
     return {
        Favorite: !this.tmpList
      }
    })
  }
  
  onDelete = (Id) => {
    const index = this.state.List.findIndex((elem) => elem.Id === Id);
    const partOne = this.state.List.slice(0, index);
    const partTwo = this.state.List.slice(index + 1);
    const newList = [...partOne, ...partTwo];
    this.setState(() => {
      return {
        List: newList,
      };
    });
  }

  onAddNewContact = (newContact) => {
    
    const newList = [...this.state.List, newContact];
    this.onSaveData(newList);
    this.setState((state) => {
      return {
        List: newList,
      };
    });
   
  }

  onSaveData = (newContact) => {
    fetch(this.URL, {
      "method": "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newContact)
    })
  }
   
  render(){
      console.log("ContactList => ", this.props);
        // const contact = List.map(item => {
    //     return <ContactItem key={item.Id} Id={item.Id} Name={item.Name} Surname={item.Surname} Address={item.Address} Avatar={item.Avatar}
    //      Position={item.Position} NickName={item.NickName} Phone={item.Phone} Email={item.Email}
    //     Favorite={item.Favorite} onFavorite={() => onFavorite(item.Id)} onDelete={() => onDelete(item.Id)} />;
    // } )
    return(
        <Fragment>
            <div className="list-group contact-group">
                {/* {contact.length !== 0 ? contact : <h2>Contacts not found</h2>} */}
            </div>
        </Fragment>
        
    );
  }
}

const mapStateToProps = ({ contactListReducer }) => {
    console.log("mapStateToProps ", contactListReducer);
    const { List, loading } = contactListReducer;
    return { List, loading };
  };

  const mapDispatchToProps = {
    getContactList,
  };

export default connect(mapStateToProps, mapDispatchToProps)(ContactList);