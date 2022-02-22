
import { useState } from "react"
import React from "react"
import ThumbnailUrlBlock from "./ThumbnailUrlBlock"
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
import { ImQuill } from "react-icons/im"
import { useLocation, Link, useNavigate } from "react-router-dom"
import { HiOutlineMailOpen } from "react-icons/hi"

const Estate = () => {

    const location = useLocation()

    const containerStyle = {
        width: '40%',
        height: '400px',
        borderStyle: "double",
        borderColor: "aqua"
      };

    const [showEstate, editEstate] = useState(location.state)
    // const [showEmail, addEmail] = useState("")
    // console.log(showEmail)
    let email = ""
    const API_KEY = ""
    const REQUEST_DESTINATION = "http://localhost:8080";
    const REALTOR_REQUEST_DESTINATION = "http://localhost:8080/listings/";

    //console.log(location.state)
    // showEstate.managedListings.forEach(element => {
    //     console.log( element.listingId)
    // })
    // const listing = showEstate.managedListings.filter(lst => lst.listingId == showEstate.ID)
    // console.log(listing)
    // //listing.forEach(list => console.log(list.listingId))
    // console.log(showEstate.ID)
    // showEstate.managedListings.forEach(element => {
    //     console.log(element)
    // });
    
    // console.log(showEstate)
    // console.log(showEstate.managedListings.filter(lst => lst.listingId == showEstate.ID))
    const [map, setMap] = useState(null)

    
    const {isLoaded, loadError} = useLoadScript({
        
        googleMapsApiKey: API_KEY
    })

    const onLoad = React.useCallback(async function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
    async function CreateAppointment() {
        
        const response = await fetch(REQUEST_DESTINATION ,{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'omit', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'// 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(showEstate) // body data type must match "Content-Type" header
        });     
    }

    async function DeleteAppointment() {
        
        const response = await fetch(REQUEST_DESTINATION.concat(showEstate.ID) ,{
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'omit', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'// 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(showEstate) // body data type must match "Content-Type" header
        });     
    }

    async function DeleteListing() {
        
        const response = await fetch(REQUEST_DESTINATION.concat(showEstate.ID) ,{
            method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'omit', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'// 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(showEstate) // body data type must match "Content-Type" header
        });     
    }

    async function getEmail() {
        
        const response = await fetch(REQUEST_DESTINATION + "/realtors/" + showEstate.savedListings.filter(lst => lst.listingId == showEstate.ID).map(list => (list.realtorId)) ,{
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'omit', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'// 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
           // body: JSON.stringify(showEstate) // body data type must match "Content-Type" header
        });     

        const body = await response.json()
        console.log(body.email)

        window.open('mailto:'+body.email);


        //document.getElementById()
        
    }


    if(!isLoaded) return "Loading Google Map"

    // var marker = new google.maps.Map.Marker({
    //     position: {lat: parseFloat(showEstate.lat), lng: parseFloat(showEstate.long)},
    //     map: map
    // })

    return (
        /* global google */
        <div className="EstateSelector">
            <div className="EditEstateHeader"></div>
            
            <div className="userBorder1"></div>
            <div  className="Estate">
                <div className="displayEstate">
                    
                    <span className='EstateFieldlabel'>Address</span>
                    <span  className="EstatefBar" >
                        {showEstate.realtorId && showEstate.managedListings.filter(lst => lst.listingId == showEstate.ID).map(list => (list.address))}
                        {showEstate.clientId && showEstate.savedListings.filter(lst => lst.listingId == showEstate.ID).map(list => (list.address))}
                    </span>
                    <br/>
                    <span className='EstateFieldlabel'>Year</span>
                    <span  className="EstatefBar" >
                        {showEstate.realtorId && showEstate.managedListings.filter(lst => lst.listingId == showEstate.ID).map(list => (list.yearBuilt))}
                        {showEstate.clientId && showEstate.savedListings.filter(lst => lst.listingId == showEstate.ID).map(list => (list.yearBuilt))}
                    </span>
                    <br/>
                    <span className='EstateFieldlabel'>Long</span>
                    <span className="EstatefBar" >
                        {showEstate.realtorId && showEstate.managedListings.filter(lst => lst.listingId == showEstate.ID).map(list => (list.longitude))}
                        {showEstate.clientId && showEstate.savedListings.filter(lst => lst.listingId == showEstate.ID).map(list => (list.longitude))}
                    </span>
                    <br/>
                    <span className='EstateFieldlabel'>Lat</span>
                    <span className="EstatefBar"  >
                        {showEstate.realtorId && showEstate.managedListings.filter(lst => lst.listingId == showEstate.ID).map(list => (list.latitude))}
                        {showEstate.clientId && showEstate.savedListings.filter(lst => lst.listingId == showEstate.ID).map(list => (list.latitude))}
                    </span>
                    <br/>
                    <span className='EstateFieldlabel'>Footage</span>
                    <span  className="EstatefBar" >
                        {showEstate.realtorId && showEstate.managedListings.filter(lst => lst.listingId == showEstate.ID).map(list => (list.squareFt))}
                        {showEstate.clientId && showEstate.savedListings.filter(lst => lst.listingId == showEstate.ID).map(list => (list.squareFt))}
                        sqr. ft.
                    </span>
                    <br/>
                    <span className='EstateFieldlabel'>Price</span>
                    <span  className="EstatefBar" >
                        ${showEstate.realtorId && showEstate.managedListings.filter(lst => lst.listingId == showEstate.ID).map(list => (list.price))}
                        {showEstate.clientId && showEstate.savedListings.filter(lst => lst.listingId == showEstate.ID).map(list => (list.price))}
                    </span>
                    <br/>
                    <span className='EstateFieldlabel'>Beds</span>
                    <span  className="EstatefBar" >
                        {showEstate.realtorId && showEstate.managedListings.filter(lst => lst.listingId == showEstate.ID).map(list => (list.bedrooms))} 
                        {showEstate.clientId && showEstate.savedListings.filter(lst => lst.listingId == showEstate.ID).map(list => (list.bedrooms))}
                    </span>
                    <br/>
                    <span className='EstateFieldlabel'>Baths</span>
                    <span  className="EstatefBar" >
                        {showEstate.realtorId && showEstate.managedListings.filter(lst => lst.listingId == showEstate.ID).map(list => (list.bathrooms))}
                        {showEstate.clientId && showEstate.savedListings.filter(lst => lst.listingId == showEstate.ID).map(list => (list.bathrooms))}
                    </span>
                    <br/>


                    {showEstate.clientId && <div className="createAppointBtn " onClick={() => CreateAppointment()}>
                        Make Appointment
                        <ImQuill></ImQuill>
                    </div>}
                    {showEstate.clientId && <div className="createAppointBtn " onClick={() => CreateAppointment()}>
                        Bookmark
                        <ImQuill></ImQuill>
                    </div>}
                    {showEstate.realtorId && <div className="createAppointBtn " onClick={() => DeleteAppointment(showEstate.ID)}>
                        Removing Listing
                        <ImQuill></ImQuill>
                    </div>}
                    {showEstate.clientId && <div className="createAppointBtn " onClick={() => getEmail()}>
                        
                        
                        <HiOutlineMailOpen></HiOutlineMailOpen>
                    </div>}
                    {showEstate.realtorId && <Link to="/EditListing" state={showEstate} className="createAppointBtn " onClick={() => CreateAppointment()}>
                        Edit Listing
                        <ImQuill></ImQuill>
                    </Link>}
                    <br/><br/><br/><br/>
                    <b>Browse Interior:</b><br/>
                    <div className="FormInlineFlex">
                        {showEstate.urls && showEstate.urls.map( url => {return <ThumbnailUrlBlock URL = {url} index={showEstate.urls.indexOf(url)}></ThumbnailUrlBlock>
                        })}
                    </div>

                </div>
                <GoogleMap  
                    center={{ lat: 39.629524, lng:  -79.955894 }}
                    mapContainerStyle={containerStyle} 
                    zoom={11} onLoad ={onLoad}>
                </GoogleMap>
            </div>
            
            
            <div className="userBorder2"></div>
        </div>
    )
}

export default Estate
