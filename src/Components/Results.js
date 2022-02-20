import { useState } from "react";
import { useNavigate } from "react-router";
import UserListings from "./UserListings";
import LandingSearchBar from "./LandingSearchBar";
import LandingHeader from "./LandingHeader";
import { GiMushroomHouse } from "react-icons/gi";

const Results = () => {

    const nav = useNavigate()

    function Search (event) {
        console.log(event.key)
        if(event.key === 'Enter')
            nav(`/Search/${event.target.value}`)

    }

    const [showUser, editUser] = useState({
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
            },
            {
                name: "Estate 4",
                footage: 750,
                Beds: 2,
                Baths: 2,
                Price: 130000
            },
            {
                name: "Estate 5",
                footage: 1850,
                Beds: 4,
                Baths: 5,
                Price: 388000
            },
            {
                name: "Estate 6",
                footage: 1100,
                Beds: 3,
                Baths: 3,
                Price: 400000
            }]
    });
    
    

    const REQUEST_DESTINATION = "http://localhost:8080";

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
                <LandingSearchBar></LandingSearchBar>
                <p>Advanced Search Options</p>
                
                <input id="price" name="range" type="radio"></input><label for="price">Under 200,000</label>
                <input id="price" name="range" type="radio"></input><label for="price">Under 300,000</label>
                <input id="price" name="range" type="radio"></input><label for="price">Under 400,000</label>
                <input id="price" name="range" type="radio" checked></input><label for="price">none</label>
                <br/>
                <label for="">State</label>
                <select name="State" onChange={null}>
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
                <label for="">Beds</label>
                <select name="Beds" onChange={null}>
                    <option>-</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <label for="">Baths</label>
                <select name="Baths" onChange={null}>
                    <option>-</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <label for="">Footage</label><input type="number"></input>
            </div>
            <br/>
            <div className="userBorder1"></div>
            <div className="SearchPocket">
                <UserListings Listings={showUser.Listings} ></UserListings>
            </div>
            
            <div className="userBorder2"></div>
        </div>
    )
}

export default Results