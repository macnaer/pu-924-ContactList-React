URL = "https://contactpu-f0afd-default-rtdb.firebaseio.com/list.json";

export async function  getAllContacts() {
    const List = await fetch(URL)
    .then((responce) => {
      return responce.json();
    })
    .then((data) => {
        console.log("data data data ", data)
      if (data == null) {
        return {
          List: [],
        };
      } else {
        return {
          List: data,
        };
      }
    })
    .catch((err) => console.log(err));
  console.log("getAllContacts ", List);
  return List;
}

export async function onAddNewContact(newContact){
    await fetch(URL, {
        method: "PUT",
        headers:{
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
    })
}