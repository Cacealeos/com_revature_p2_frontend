import { useState } from 'react';
import {BiSave, BiSearch} from 'react-icons/bi'
import { BsSearch } from "react-icons/bs"
import { Link, useLocation } from 'react-router-dom';
import UserListings from './UserListings';

const UserPage = () => {
//sample user could also be passed as arguement ideally when connected to a backend
//const UserPage = ({sampleUser}) => {...}

    const location = useLocation()
    // console.log(location.state)
    const [showUser, editUser] = useState(location.state);
    console.log(showUser)

    const REQUEST_DESTINATION = "http://localhost:8080/profile/";

    //"https://swapi.dev/api/people/1/?format=json"

    function AlterUser (field, value) {

        let sampleUser = Object.assign({}, showUser); 
        sampleUser[`${field}`] = value;

        editUser(sampleUser)
        
        console.log(showUser)
    }

    async function UpdateUser() {

        const response = await fetch(showUser.clientId ? REQUEST_DESTINATION.concat(showUser.clientId) : REQUEST_DESTINATION.concat(showUser.realtorId),{
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
            
    }

    async function DeleteListing(listingID) {

        const response = await fetch(REQUEST_DESTINATION ,{
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'omit', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(listingID) // body data type must match "Content-Type" header
        });

        //editUser(prevState => ({...prevState, Listings: filteredListing}))
        //console.log(filteredListing) //testing
    }

    return (
        <>
        <div className='UsrPage'>
            <div className="userBorder1"></div>
                <div className="userFields">

                    <label className='Fieldlabel'>First Name</label>
                    <input name="firstName" type="text" className="fBar" value={showUser.firstName} placeholder="First Name" onChange={e => AlterUser(e.target.name, e.target.value)}></input>
                    <br/>
                    <label className='Fieldlabel'>Last Name</label>
                    <input name="lastName" type="text" className="fBar" value={showUser.lastName} placeholder="Last Name" onChange={e => AlterUser(e.target.name, e.target.value)}></input>
                    <br/>
                    <label className='Fieldlabel'>E-mail</label>
                    <input name="email" type="text" className="fBar" value={showUser.email} placeholder="E-mail" onChange={e => AlterUser(e.target.name, e.target.value)}></input>
                    <br/>
                    <label className='Fieldlabel'>Phone#</label> 
                    <input name="phoneNumber" type="text" className="fBar" value={showUser.phoneNumber} placeholder="Phone" onChange={e => AlterUser(e.target.name, e.target.value)}></input>
                    <br/>

                    
                    {showUser.realtorId && <Link className='SavePBtn' to='/AddListing' state={showUser}><BiSave></BiSave>Register Listing</Link>}

                    <button className='SavePBtn' onClick={()=>UpdateUser()}><BiSave></BiSave>Save</button>
                    <br/><br/>
                    <label className='Fieldlabel'>Bookmarked Listings</label>

                    {showUser.clientId && <> <UserListings Listings={showUser.savedListings} DeleteBtn={DeleteListing} User={showUser}></UserListings>
                    <br/>
                    <Link to='/Search' state={showUser} className='SavePBtn' ><BiSearch></BiSearch>ADD</Link>
                    </> }

                    {showUser.realtorId && <> <UserListings Listings={showUser.managedListings} DeleteBtn={DeleteListing} User={showUser}></UserListings>
                    <br/>
                    <Link to='/Search' state={showUser} className='SavePBtn' ><BiSearch></BiSearch>ADD</Link>
                    </> }
                    
                </div>
    
            <div className="userBorder2"></div>
            
        </div>
        </>
    )
}

export default UserPage