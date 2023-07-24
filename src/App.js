import Avatar from "./components/avatar";
import Card from "./components/card";
import contacts from "./components/contacts";

function createCard(contact) {
  return <Card 
  name= {contact.name}
  imgURL = {contact.imgURL}
  phone = {contact.phone}
  email = {contact.email} />
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar imgURL = 'https://cdn.iset.io/assets/55268/produtos/966/adesivo-para-geladeira-homer-simpson-com-cerveja-3.jpg'/>
      {contacts.map(createCard)}
      {/* <Card 
        name={contacts[0].name}
        imgURL={contacts[0].imgURL}
        phone={contacts[0].phone}
        email={contacts[0].email}
      />
      <Card 
        name={contacts[1].name}
        imgURL={contacts[1].imgURL}
        phone={contacts[1].phone}
        email={contacts[1].email}
      />
      <Card 
        name={contacts[2].name}
        imgURL={contacts[2].imgURL}
        phone={contacts[2].phone}
        email={contacts[2].email}
      /> */}
    </div>
  );
}

export default App;
