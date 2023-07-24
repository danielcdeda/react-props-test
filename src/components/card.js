import Avatar from "./avatar";
import Info from "./details";


function Card(props) {
return (
    <div className="card">
        <div className="top">
            <p>{props.id}</p>
            <h2 className="name">{props.name}</h2>
            <Avatar imgURL={props.imgURL} />
        </div>
        <div className="bottom">
            <Info phone={props.phone} email={props.email}/>
        </div>
    </div>
)}

export default Card;