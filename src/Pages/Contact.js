import NavBar from "../Components/NavBar";
import {useNavigate} from 'react-router-dom';
import {useState} from "react";

export default function ContactPage() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");

    const setValue = (e) => {
        switch (e.target.name) {
            case "firstName":
                setFirstName(e.target.value);
                console.log("fistName",firstName);
                break;
            case "lastName":
                setLastName(e.target.value);
                console.log("lastName", lastName);
                break;
            case "email":
                setEmail(e.target.value);
                console.log("email", email);
                break;
        }
    }
    return (
        <div className={'contact'}>
            <NavBar/>
            <h1>Contact</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam at exercitationem nemo nulla provident
                suscipit voluptate. Excepturi inventore quas totam velit? Ducimus ea est nobis pariatur quam quasi quos
                voluptatibus.</p>
            <input type="text" name={"firstName" } onChange={(e)=>setValue(e)}/>
            <input type="text" name={"lastName"} onChange={(e)=>setValue(e)}/>
            <input type="text" name={"email"} onChange={(e)=>setValue(e)}/>
            <button onClick={() => navigate('/')}>Submit</button>
        </div>
    )
}