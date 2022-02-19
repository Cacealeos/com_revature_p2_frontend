
import { useState } from "react"
import React from "react"
import {GoogleMap, useLoadScript, Marker} from '@react-google-maps/api'

const Estate = () => {

    
    const containerStyle = {
        width: '30%',
        height: '400px'
      };

    const [showEstate, editEstate] = useState({
        long: "-79.955894",
        lat: "39.629524",
        name: "Hippo"
    })
    const [map, setMap] = useState(null)

    const API_KEY = ""

    const {isLoaded, loadError} = useLoadScript({
        
        googleMapsApiKey: API_KEY
    })

    const onLoad = React.useCallback(async function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
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
            <div className="displayEstate">
                    
                    <label className='Fieldlabel'>Name</label>
                    <input name="name" type="text" className="fBar" value={showEstate.name} placeholder="Name" onChange={(e) => editEstate(e.target.value)}></input>
                    <br/>
                    <label className='Fieldlabel'>Long</label>
                    <input name="long" type="text" className="fBar" value={showEstate.long} placeholder="LONG" onChange={(e) => editEstate(e.target.value)}></input>
                    <br/>
                    <label className='Fieldlabel'>Lat</label>
                    <input name="lat" type="text" className="fBar" value={showEstate.lat} placeholder="LAT" onChange={(e) => editEstate(e.target.value)}></input>
                    <br/>
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
