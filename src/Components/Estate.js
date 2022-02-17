
import { useState } from "react"
import React from "react"
import {GoogleMap, useJsApiLoader} from '@react-google-maps/api'

const Estate = () => {

    const estateSample = {
        long: "79.9559",
        lat: "39.6295",
        name: "hippo"
    }

    const [showEstate, editEstate] = useState(estateSample)
    const [map, setMap] = useState(null)

    const API_KEY = ""

    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY
    })

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
      }, [])
    
    const containerStyle = {
        width: '30%',
        height: '400px'
      };

    return (
        <div className="estateSelector">
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
            </div>
            
                <GoogleMap mapContainerStyle={containerStyle} center={showEstate.lat, showEstate.long} zoom={6} onLoad ={onLoad}></GoogleMap>
            
            
            <div className="userBorder2"></div>
        </div>
    )
}

export default Estate
