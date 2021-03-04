import React, {Fragment} from "react";
import { connect } from "react-redux";
import { getContactList } from "../../Actions/ContactListActions";

// Contact Item Component
import ContactItem from "./ContactItem";

// Include service
import { getAllContacts } from "./../../Services/api-service";

class ContactList extends React.Component {

    
  componentDidMount(){
    const { getContactList, loading } = this.props;
    console.log("this.props ", this.props);
    getAllContacts()
    .then(data => {
      console.log("componentDidMount data ", data)
      getContactList(data.List);
    
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
    this.setState(() => {
      return {
        List: newList,
      };
    });
   
  }

  onSaveData = (newContact) => {
    console.log("onSaveData ", newContact)
    fetch(this.URL, {
      "method": "PUT",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newContact)
    })
  }
   
  render(){
      const { List } =  this.props;
    
    return(
        <Fragment>
            <div className="list-group contact-group">
                {List.length !== 0 ? ( List.map(item => {
        return <ContactItem key={item.Id} Id={item.Id} Name={item.Name} Surname={item.Surname} Address={item.Address} Avatar={item.Avatar}
         Position={item.Position} NickName={item.NickName} Phone={item.Phone} Email={item.Email}
         />;
    } )) : <h2>Contacts not found</h2>}
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