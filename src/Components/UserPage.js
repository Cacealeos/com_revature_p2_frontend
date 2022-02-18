import { useState } from 'react';
import {BiSave, BiSearch} from 'react-icons/bi'
import { BsSearch } from "react-icons/bs"
import UserListings from './UserListings';

const UserPage = () => {
//sample user could also be passed as arguement ideally when connected to a backend
//const UserPage = ({SampleUser}) => {...}

    const sampleUser = {
        name: "hippo",
        address: "123 street Blvd.",
        email: "hipposRBanned@gmail.com",
        ID: "57",
        Phone: "876-5309",
        Listings: [
            {
                name: "Estate 1",
                footage: 750,
                Beds: 2,
                Baths: 2,
                Price: 190000
            },
            {
                name: "Estate 2",
                footage: 1850,
                Beds: 4,
                Baths: 5,
                Price: 430000
            },
            {
                name: "Estate 3",
                footage: 1100,
                Beds: 3,
                Baths: 3,
                Price: 265000
            }]
    }

    const [showUser, editUser] = useState(sampleUser);
    
    const REQUEST_DESTINATION = "http://localhost:8080";

    //"https://swapi.dev/api/people/1/?format=json"


    async function UpdateUser() {

        const response = await fetch(REQUEST_DESTINATION ,{
            method: 'PUT', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'omit', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(showUser) // body data type must match "Content-Type" header
        });

        const body = await response.json()// parses JSON response into native JavaScript objects
        
        console.log(body)
    }

    async function DeleteListing(listingID) {

        // const response = await fetch(REQUEST_DESTINATION ,{
        //     method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
        //     mode: 'cors', // no-cors, *cors, same-origin
        //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: 'omit', // include, *same-origin, omit
        //     headers: {
        //     'Content-Type': 'application/json'
        //     // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     redirect: 'follow', // manual, *follow, error
        //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //     body: JSON.stringify(listingID) // body data type must match "Content-Type" header
        // });

        // const body = await response.json()// parses JSON response into native JavaScript objects
        // console.log(body)

    
        const filteredListing = showUser.Listings.filter(element => !element.name==listingID)
        editUser(prevState => ({...prevState, Listings: filteredListing}))
        console.log(filteredListing)
    }

    return (
        <>
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
                    <br/><br/>
                    <label className='Fieldlabel'>Bookmarked Listings</label>
                    
                    <UserListings Listings={showUser.Listings} DeleteBtn={DeleteListing}></UserListings>
                    <br/>
                    <button className='SavePBtn' ><BiSearch></BiSearch>Add</button>
                    
                </div>
    
            <div className="userBorder2"></div>
            
        </div>
        </>
    )
}

export default UserPage