 let person = {

    name:"Matej",
    lastName: "dislijeski",
    married: false,
    phones: ["07123812883", "07392919383", "07823712743"]

 };
 let ulTag = document.getElementById("listaTel")

 console.log("Name = " + person.name)
 
 for(let i = 0; i < person.phones.length; i++ ) {
  let phoneItem = document.createElement("li");
  ulTag.appendChild(phoneItem);
  phoneItem.innerHTML = person.phones[i];

 }

 

 