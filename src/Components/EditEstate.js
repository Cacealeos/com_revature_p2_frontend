import { GiMushroomHouse, GiReturnArrow } from "react-icons/gi"
import { ImQrcode } from "react-icons/im"
import { VscSaveAs } from 'react-icons/vsc'
import { useState } from "react"
import { useLocation } from "react-router"
import ThumbnailUrlBlock from "./ThumbnailUrlBlock"
import { Link } from "react-router-dom"


const EditEstate = ({AddListing}) => {

    const location = useLocation()

    const [showListing, editListing] = useState(location.state);
    // console.log(showListing.managedListings.filter(lst => lst.listingId == showListing.ID).map(list => (list.address)))
    console.log(showListing)
    
    const ListingUpdate = {
        realtorId: showListing.managedListings.filter(lst => lst.listingId == showListing.ID).map(list => (list.realtorId)),
        Firm: "",
        Name: "",
        address: "",
        Owner: "",
        State: "",
        Title: "",
        bathrooms: "",
        bedrooms: "",
        Offices: "",
        squareFt: "",
        price: "",
        longitude: "",
        latitude: "",
        Zip: "",
        Urls: []
    }
    const REQUEST_DESTINATION = "http://localhost:8080";
    var newURL = ""

    function AlterListing (field, value) {
        //ListingUpdate = showListing;
        let sampleUser = Object.assign({}, showListing); 
        sampleUser[`${field}`] = value;

        editListing(sampleUser)


        // if(AddListing)
        //     ListingUpdate[`${field}`] = value;
        // else{
        //     let list = Object.assign({}, showListing)
            
        //     list.managedListings.filter(lst => lst.listingId == showListing.ID)
        //     list.field = value
    
        //     const newstate = showListing;
            
        //     newstate.managedListings.forEach(lst => {
        //         if(lst.listingId == showListing.ID)
        //             lst=list
                    
        //         })
    
        //     editListing(newstate)
            // console.log(ListingUpdate);
        // }
    }

    function AddUrl () {
        if(newURL="")
        return

        ListingUpdate.Urls = showListing.Urls;
        ListingUpdate.Urls.push(newURL);
        editListing(ListingUpdate);
        console.log(ListingUpdate.Urls);
    }

    async function CreateListing() {
        console.log("create")
        const response = await fetch(REQUEST_DESTINATION + "/listings" ,{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'omit', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(ListingUpdate) // body data type must match "Content-Type" header
        });

    }

    async function updateListing() {
        console.log("update")
        const response = await fetch(REQUEST_DESTINATION.concat("listings/" + showListing.ID) ,{
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
            body: JSON.stringify(showListing.managedListings.filter(lst => lst.listingId == showListing.ID)) // body data type must match "Content-Type" header
        });

    }
    
    return (
        <>
             
        <div className="EditEstatePage">
        
            <div className="EditEstateHeader">
                <div className="EditLogoBubble">
                    <span className="grayLogo">REAL<GiMushroomHouse></GiMushroomHouse></span><span className="aquaLogo">ESTATE</span>
                </div>
                
            </div>
            <br/>
            <div className="userBorder1"></div>
            <div className="EditEstatePocket">
            <div className='CreatListingBtn ProfileReturnBtn'><Link to="/User" state={location.state} >Profile<GiReturnArrow></GiReturnArrow></Link></div>
                <b><label>BROKER REGISTRATION FORM</label></b>
                <br/>
                <label>Please indicate below what Firm you represent...</label>
                <br/>
                <input className="EstateField" name="Firm" type="text" onChange={(e) => AlterListing(e.target.name, e.target.value)} placeholder="Firm"></input>
                <br/><br/>

                <div className="EstateForm">
                    <div className="EditLogoBubbleGray">
                        <span className="grayLogo">REAL<GiMushroomHouse></GiMushroomHouse></span><span className="grayLogo">ESTATE</span>
                    </div>
                    <div className="EditLogoBubbleGray2">
                        <ImQrcode></ImQrcode>
                    </div>
                    <br/><br/>
                    <b><label>ESTATE INFORMATION:</label></b>
                    <br/><br/>
                    <div className="FormInlineFlex">
                        <div className="EstateRegSlot">
                            <span className="RegSlotspan">NAME</span>
                            <input className="EstateField" 
                            name="Name" type="text" onChange={(e) => AlterListing(e.target.name, e.target.value)} placeholder="NAME"></input>
                        </div>
                        <div className="EstateRegSlot2">
                            <span className="RegSlotspan">ADDRESS</span>
                            <input className="EstateField" 
                            name="address" type="text" onChange={(e) => AlterListing(e.target.name, e.target.value)} placeholder="ADDRESS"></input>
                        </div>
                        <div className="EstateRegSlot">
                            <span className="RegSlotspan">OWNER</span>
                            <input className="EstateField" name="Owner" type="text" onChange={(e) => AlterListing(e.target.name, e.target.value)} placeholder="OWNER"></input>
                        </div>
                        <div className="EstateRegSlot">
                            <span className="RegSlotspan">STATE</span>
                            <select className="EstateField" name="State" onChange={(e) => AlterListing(e.target.name, e.target.value)}>
                                <option>-</option>
                                <option>TX</option>
                                <option>AR</option>
                                <option>AZ</option>
                                <option>CT</option>
                                <option>DW</option>
                                <option>NH</option>
                                <option>SD</option>
                                <option>CA</option>
                                <option>NY</option>
                            </select>
                        </div>
                        <div className="EstateRegSlot">
                            <span className="RegSlotspan">YEAR</span>
                            <input className="EstateField"
                            name="YEAR" type="text" onChange={(e) => AlterListing(e.target.name, e.target.value)} placeholder="TITLE"></input>
                        </div>
                    </div>
                    <div className="FormInlineFlex">
                        <div className="EstateRegSlot">
                            <span className="RegSlotspan">BATHS</span>
                            <input className="EstateField" 
                            name="Baths" type="text" onChange={(e) => AlterListing(e.target.name, e.target.value)} placeholder="BATHS"></input>
                        </div>
                        <div className="EstateRegSlot">
                            <span className="RegSlotspan">BEDS</span>
                            <input className="EstateField" 
                            name="Beds" type="text" onChange={(e) => AlterListing(e.target.name, e.target.value)} placeholder="BEDS"></input>
                        </div>
                        <div className="EstateRegSlot">
                            <span className="RegSlotspan">OFFICES</span>
                            <input className="EstateField" name="Offices" type="text" onChange={(e) => AlterListing(e.target.name, e.target.value)} placeholder="OFFICES"></input>
                        </div>
                        <div className="EstateRegSlot">
                            <span className="RegSlotspan">FOOTAGE</span>
                            <input className="EstateField" 
                             name="Footage" type="text" onChange={(e) => AlterListing(e.target.name, e.target.value)} placeholder="FOOTAGE"></input>
                        </div>
                        <div className="EstateRegSlot">
                            <span className="RegSlotspan">PRICE</span>
                            <input className="EstateField"  
                            name="Price" type="text" onChange={(e) => AlterListing(e.target.name, e.target.value)} placeholder="PRICE"></input>
                        </div>
                    </div>
                    <br/><br/>
                    <b><label>COORDINATES:</label></b>
                    
                    <br/><br/>
                    <div className="FormInlineFlex">
                        <div className="EstateRegSlot2">
                            <span className="RegSlotspan">LONGITUDE</span>
                            <input className="EstateField" 
                            name="Longitude" type="text" onChange={(e) => AlterListing(e.target.name, e.target.value)} placeholder="Longitude"></input>
                        </div>
                        <div className="EstateRegSlot2">
                            <span className="RegSlotspan">LATITUDE</span>
                            <input className="EstateField"  
                             name="Latitude" type="text" onChange={(e) => AlterListing(e.target.name, e.target.value)} placeholder="Latitude"></input>
                        </div>
                        <div className="EstateRegSlot">
                            <span className="RegSlotspan">ZIP CODE</span>
                            <input className="EstateField" name="Zip" type="text" onChange={(e) => AlterListing(e.target.name, e.target.value)} placeholder="ZIP CODE"></input>
                        </div>
                    </div>
                </div>
                
                <div>
                    <br/><br/>
                    <b><label>Upload Photo URLS:</label></b>
                    
                    <br/><br/>
                    <input className="" name="url" type="text" onChange={(e) => (newURL= e.target.value)} placeholder="Image URL"></input>
                    <button name="url" onClick={() => AddUrl()}>ADD Thumbnail</button>


                    <br/><br/>
                    <b><label>Previews:</label></b><br/><br/>
                    <div className="FormInlineFlex">
                        {showListing.Urls && showListing.Urls.map( url => {return <ThumbnailUrlBlock URL = {url} index={showListing.Urls.indexOf(url)}></ThumbnailUrlBlock>
                        })}
                    </div>
                    
                    
                </div>
                <br/><br/>
                <br/><br/>
                {AddListing &&
                <button className='CreatListingBtn' onClick={()=> CreateListing()} ><VscSaveAs></VscSaveAs>Submit Listing</button>}

                {!AddListing &&
                <button className='CreatListingBtn' onClick={()=> updateListing()} ><VscSaveAs></VscSaveAs>Submit Listing</button>}

            </div>

            <div className="userBorder2"></div>
        </div>
        </>
    )
}

export default EditEstate;