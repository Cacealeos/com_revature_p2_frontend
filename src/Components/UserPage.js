import { useState } from 'react';
import {BiSave, BiSearch} from 'react-icons/bi'
import { BsSearch } from "react-icons/bs"
import { Link, useLocation } from 'react-router-dom';
import UserListings from './UserListings';

const UserPage = () => {
//sample user could also be passed as arguement ideally when connected to a backend
//const UserPage = ({sampleUser}) => {...}

    const location = useLocation()
    console.log(location.state)
    const [showUser, editUser] = useState(location.state);
    //const [input, setInput] = useState(5)

    const REQUEST_DESTINATION = "http://localhost:8080";

    //"https://swapi.dev/api/people/1/?format=json"

    function AlterUser (field, value) {
        //ListingUpdate = showListing;
        // let sampleUser = showUser;
        // sampleUser[`${field}`] = value;
        editUser({[field]: value})
        console.log(showUser)
    }

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
        
        const filteredListing = showUser.Listings.filter(element => element.name!=listingID)
        editUser(prevState => ({...prevState, Listings: filteredListing}))
        //console.log(filteredListing) //testing
    }

    return (
        <>
        <div className='UsrPage'>
            <div className="userBorder1"></div>
                <div className="userFields">

                    <label className='Fieldlabel'>Name</label>
                    <input name="name" type="text" className="fBar" value={showUser.name} placeholder="Name" onChange={e => AlterUser(e.target.name, e.target.value)}></input>
                    <br/>
                    <label className='Fieldlabel'>Address</label>
                    <input name="address" type="text" className="fBar" value={showUser.address} placeholder="Address" onChange={e => AlterUser(e.target.name, e.target.value)}></input>
                    <br/>
                    <label className='Fieldlabel'>E-mail</label>
                    <input name="email" type="text" className="fBar" value={showUser.email} placeholder="E-mail" onChange={e => AlterUser(e.target.name, e.target.value)}></input>
                    <br/>
                    <label className='Fieldlabel'>Phone#</label> 
                    <input name="Phone" type="text" className="fBar" value={showUser.Phone} placeholder="Phone" onChange={e => AlterUser(e.target.name, e.target.value)}></input>
                    <br/>

                    
                    {showUser.realterID && <Link className='SavePBtn' to='/EditListing' state={showUser}><BiSave></BiSave>Register Listing</Link>}
                    <button className='SavePBtn' onClick={()=>UpdateUser()}><BiSave></BiSave>Save</button>
                    <br/><br/>
                    <label className='Fieldlabel'>Bookmarked Listings</label>
                    
                    <UserListings Listings={showUser.Listings} DeleteBtn={DeleteListing} User={showUser}></UserListings>
                    <br/>
                    <Link to='/Search' state={showUser} className='SavePBtn' ><BiSearch></BiSearch>ADD</Link>
                    
                </div>
    
            <div className="userBorder2"></div>
            
        </div>
        </>
    )
}

export default UserPage