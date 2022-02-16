import { useState } from 'react';
import {BiSave} from 'react-icons/bi'

const UserPage = () => {
//sample user could also be passed as arguement ideally when connected to a backend
//const UserPage = ({SampleUser}) => {...}

    const sampleUser = {
        name: "hippo",
        address: "123 street Blvd.",
        email: "hipposRBanned@gmail.com",
        ID: "57",
        Phone: "876-5309",
        Listings: ["45", "76","98","32"]
    }

    const [showUser, editUser] = useState(sampleUser);
    
    const REQUEST_DESTINATION = "http://localhost:8080";
    //"http://localhost:8080/WebApp2/dog/1";
    //"https://checkout-sandbox.gointerpay.net/v2.18"

    function ChangeHandler ({event}) {
        editUser({
            [event.target.name]: event.target.value
        });
    }

    async function UpdateUser() {
        // Default options are marked with *

        // const response = await fetch(REQUEST_DESTINATION)
        // .then(resp => resp.json())
        // .then(data => console.log(data))


        const response = await fetch(REQUEST_DESTINATION, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'omit', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            //body: JSON.stringify(showUser) // body data type must match "Content-Type" header
        });

        response.json()// parses JSON response into native JavaScript objects
        
    }

    return (
        <div className='UsrPage'>
            <div className="userBorder1"></div>
                <div className="userFields">

                <label className='Fieldlabel'>Name</label>
                    <input name="name" type="text" className="fBar" value={showUser.name} placeholder="Name" onChange={(e) => editUser(e.target.value)}></input>
                    <br/>
                    <label className='Fieldlabel'>Address</label>
                    <input name="address" type="text" className="fBar" value={showUser.address} placeholder="Address" onChange={(e) => editUser(e.target.value)}></input>
                    <br/>
                    <label className='Fieldlabel'>E-mail</label>
                    <input name="email" type="text" className="fBar" value={showUser.email} placeholder="E-mail" onChange={(e) => editUser(e.target.value)}></input>
                    <br/>
                    <label className='Fieldlabel'>Phone#</label> 
                    <input name="Phone" type="text" className="fBar" value={showUser.Phone} placeholder="Phone" onChange={(e) => editUser(e.target.value)}></input>
                    <br/>

                    <button className='SavePBtn' onClick={()=>UpdateUser()}><BiSave></BiSave>Save</button>
                </div>
                <div className="sampleAppoints"></div>
            <div className="userBorder2"></div>
        </div>
    )
}

export default UserPage