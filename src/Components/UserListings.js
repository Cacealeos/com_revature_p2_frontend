import {useState} from 'react'
import {GiHouse} from 'react-icons/gi'
import {BiLinkExternal } from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'

const UserListings = ({DeleteBtn, Listings}) => {

    return (
        Listings.map(estates => {
            return (
                <div>
                    <br/>
                <label className="estateLabel"><GiHouse></GiHouse>{estates.name}
                 
                <span className='ExternalLinkspan'><MdDelete onClick={()=> DeleteBtn(estates.name)}></MdDelete></span>
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