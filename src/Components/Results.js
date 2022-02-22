import { useState } from "react";
import { useNavigate } from "react-router";
import { BsSearch } from "react-icons/bs"
import UserListings from "./UserListings";
import LandingSearchBar from "./LandingSearchBar";
import LandingHeader from "./LandingHeader";
import { GiMushroomHouse, GiReturnArrow } from "react-icons/gi";
import { Link, useLocation } from "react-router-dom";

const Results = () => {

    const nav = useNavigate()
    const location = useLocation()
    const state = location.state

    const [results, buildResults] = useState([])
    const [visit, alterVisit] =useState(false)

    const LISTING_BYADDRESS_REQUEST_DESTINATION = "http://localhost:8080/listings/search/address";
    const LISTING_BYPRICE_REQUEST_DESTINATION = "http://localhost:8080/listings/search/price";
    const LISTING_BYBATHROOMS_REQUEST_DESTINATION = "http://localhost:8080/listings/search/bathrooms";
    const LISTING_BYBEDROOMS_REQUEST_DESTINATION = "http://localhost:8080/listings/search/bedrooms";

    const listingSearchParams = {
        address: "",
        price: "",
        bathrooms: "",
        bedrooms: ""
    }

    
    


    function Search (event) {
        console.log(event.key)
        if(event.key === 'Enter')
            nav(`/Search`)

    }

   

    if(!visit)
    {
        addressSearch("")
        alterVisit(!visit)
    }

    console.log(results)

    
    // const REALTOR_REQUEST_DESTINATION = "http://localhost:8080/realtors/search";

    function addressSearch(event) {
        //console.log(event.target.name)

        if (event.key === 'Enter') {
            listingSearchParams.address = event.target.value;
            
            listingSearch(LISTING_BYADDRESS_REQUEST_DESTINATION.concat("?address=", listingSearchParams.address))
        } else if (!visit)
        listingSearch(LISTING_BYADDRESS_REQUEST_DESTINATION.concat("?address=", listingSearchParams.address))
    }

    function priceSearch(event) {
        console.log(event.target)

        listingSearchParams.price = event.target.value;
            
        listingSearch(LISTING_BYPRICE_REQUEST_DESTINATION.concat("?price=", listingSearchParams.price))
    }

    function bathroomsSearch(event) {
        console.log(event.name)

        listingSearchParams.bathrooms = event.target.value;
            
        listingSearch(LISTING_BYBATHROOMS_REQUEST_DESTINATION.concat("?bathrooms=", listingSearchParams.bathrooms))
    }

    function bedroomsSearch(event) {
        console.log(event.target)

        if (event.target.name == "BedroomButton") {
            if (listingSearchParams.bedrooms == '') {
                return;
            }
            listingSearch(LISTING_BYBEDROOMS_REQUEST_DESTINATION.concat("?bedrooms=", listingSearchParams.bedrooms))
        } else {
            listingSearchParams.bedrooms = event.target.value;
        }
    }

    async function listingSearch(address) {

        const response = await fetch(address, {
            method: 'GET', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'omit', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'// 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            // body: JSON.stringify(listingSearchParams) // body data type must match "Content-Type" header
        });

        const body = await response.json()// parses JSON response into native JavaScript objects
        buildResults(body);
    }


    //"https://swapi.dev/api/people/1/?format=json"

    return (
        <div className="SearchPage">
            <div className="EditEstateHeader">
                <div className="EditLogoBubble">
                    <span className="grayLogo">REAL<GiMushroomHouse></GiMushroomHouse></span><span className="aquaLogo">ESTATE</span>
                </div>
            </div>
            
            <br/>
            <div className="SearchOptions">
                <div className='CreatListingBtn ProfileReturnBtn'><Link to="/User"  >Profile<GiReturnArrow></GiReturnArrow></Link></div>
                <div className="ResultsBar">
                    <BsSearch></BsSearch>
                    <input className="sBar" placeholder="Search Houses" onKeyDown={(e) => (addressSearch(e))}/>
                </div>
                <p>Advanced Search Options</p>
                
                <input id="price" name="price" type="radio" value="200000" onChange={(e) => priceSearch(e)}></input><label for="price">Under 200,000</label>
                <input id="price" name="price" type="radio" value="300000" onChange={(e) => priceSearch(e)}></input><label for="price">Under 300,000</label>
                <input id="price" name="price" type="radio" value="400000" onChange={(e) => priceSearch(e)}></input><label for="price">Under 400,000</label>
                <input id="price" name="price" type="radio" checked></input><label for="price">none</label>
                <br/>
                <label for="">Beds</label>
                <select name="bedrooms" onClick={(e) => bedroomsSearch(e)}>
                    <option>0</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <button name="BedroomButton" onClick={(e) => bedroomsSearch(e)}>FILTER</button>
                <label for="">Baths</label>
                <select name="bathrooms" onClick={(e) => bathroomsSearch(e)}>
                    <option>0</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
                <label for="">Footage</label><input type="number"></input>
            </div>
            <br/>

            {///////////////////Bottom half of the page///////////////////
            }
            <div className="userBorder1"></div>
            <div className="SearchPocket">
                <UserListings Listings={results} ></UserListings>
            </div>
            
            <div className="userBorder2"></div>
        </div>
    )
}

export default Results