
import { useState } from "react"
import React from "react"
import ThumbnailUrlBlock from "./ThumbnailUrlBlock"
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'
import { ImQuill } from "react-icons/im"

const Estate = () => {

    
    const containerStyle = {
        width: '40%',
        height: '400px',
        borderStyle: "double",
        borderColor: "aqua"
      };

    const [showEstate, editEstate] = useState({
        ID: "",
        long: "-79.955894",
        lat: "39.629524",
        name: "Hippo",
        address: "123 hippo street",
        footage: "1500",
        price: "125000",
        beds: "4",
        baths: "3",
        urls: ["https://raw.githubusercontent.com/Cacealeos/com_revature_p2_frontend/main/src/imgs/Suburb.jpg"]
    })
    const [map, setMap] = useState(null)

    const API_KEY = "AIzaSyB3Zw6GbVBrm7Yas4y6AS2L56yOM15wKS0"
    const REQUEST_DESTINATION = "http://localhost:8080";

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

        const body = await response.json()// parses JSON response into native JavaScript objects
        
        console.log(body)
        
        
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
                        
                    <span className='EstateFieldlabel'>Name</span>
                    <span  className="EstatefBar" >
                        {showEstate.name}
                    </span>
                    <br/>
                    <span className='EstateFieldlabel'>Long</span>
                    <span className="EstatefBar" >
                        {showEstate.long}
                    </span>
                    <br/>
                    <span className='EstateFieldlabel'>Lat</span>
                    <span className="EstatefBar"  >
                        {showEstate.lat} 
                    </span>
                    <br/>
                    <span className='EstateFieldlabel'>Footage</span>
                    <span  className="EstatefBar" >
                        {showEstate.footage} sqr. ft.
                    </span>
                    <br/>
                    <span className='EstateFieldlabel'>Price</span>
                    <span  className="EstatefBar" >
                        ${showEstate.price} 
                    </span>
                    <br/>
                    <span className='EstateFieldlabel'>Beds</span>
                    <span  className="EstatefBar" >
                        {showEstate.beds} 
                    </span>
                    <br/>
                    <span className='EstateFieldlabel'>Baths</span>
                    <span  className="EstatefBar" >
                        {showEstate.baths} 
                    </span>
                    <br/>


                    <div className="createAppointBtn " onClick={() => CreateAppointment()}>
                        Make Appointment
                        <ImQuill></ImQuill>
                    </div>
                    <br/><br/><br/><br/>
                    <b>Browse Interior:</b><br/>
                    <div className="FormInlineFlex">
                        {showEstate.urls.map( url => {return <ThumbnailUrlBlock URL = {url} index={showEstate.urls.indexOf(url)}></ThumbnailUrlBlock>
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