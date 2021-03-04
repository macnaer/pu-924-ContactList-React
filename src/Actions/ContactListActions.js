export const getContactList = (contactList) => {
    console.log("getContactList ", contactList);
    return {
      type: "LOAD_CONTACT_LIST",
      payload: contactList,
    };
  };