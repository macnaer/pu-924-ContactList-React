URL = "https://contactpu-f0afd-default-rtdb.firebaseio.com/list.json";

export async function  getAllContacts() {
    const allContacts = await fetch(URL)
    .then(responce => {
      return responce.json()
    })
    .then(data => {
        console.log("DATA => ", data);
        return data;
    })
    .catch(err => {
        return err;
    });
    return allContacts;
}