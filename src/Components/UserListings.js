import {useState} from 'react'
import {GiHouse} from 'react-icons/gi'
import {BiLinkExternal } from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

const UserListings = () => {

    const [showListings, editListings] = useState([
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
        }])

    return (
        showListings.map(estates => {
            return (
                <div>
                    <br/>
                <label className="estateLabel"><GiHouse></GiHouse>{estates.name}
                 
                <span className='ExternalLinkspan'><MdDelete></MdDelete></span>
                <span className='ExternalLinkspan'><BiLinkExternal></BiLinkExternal></span></label>
                    <div className="sampleAppoints">
                        
                        <div className="estateFieldDisplay">Sq. Ft. {estates.footage}ft.</div>
                        <div className="estateFieldDisplay">Beds: {estates.Beds}</div>
                        <div className="estateFieldDisplay">Baths: {estates.Baths}</div>
                        <div className="estateFieldDisplay">Price Range: ${estates.Price}</div>
                        
                    </div>
                </div>
                
            )
        })
    )
        
}

export default UserListings