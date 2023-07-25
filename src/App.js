import Avatar from "./components/avatar";
import Card from "./components/card";
import contacts from "./components/contacts";

function createCard(contact) {
  return <Card 
  key = {contact.id}
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
    </div>
  );
}

export default App;
