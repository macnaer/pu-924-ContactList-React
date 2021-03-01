export const getContactList = (contactList) => {
    return {
      type: "LOAD_CONTACT_LIST",
      payload: contactList,
    };
  };