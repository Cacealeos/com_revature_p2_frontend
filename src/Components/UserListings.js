import {useState} from 'react'
import {GiHouse} from 'react-icons/gi'
import {BiLinkExternal } from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import {Link} from 'react-router-dom'

const UserListings = ({DeleteBtn, Listings, User}) => {

    

    return (
        Listings.map(estates => {
            const state = Object.assign({}, User)
            
            state.ID = estates.listingId;
            return (
                <>
                    <br/>
                <label className="estateLabel"><GiHouse></GiHouse>{estates.address}
                 
                <span className='ExternalLinkspan'><MdDelete onClick={()=> DeleteBtn(estates.listingId)}></MdDelete></span>
                <Link to='/View' state={state} className='ExternalLinkspan'><BiLinkExternal></BiLinkExternal></Link></label>
                    <div className="sampleAppoints">
                        
                        <div className="estateFieldDisplay">Footage: {estates.squareFt} sqr. ft.</div>
                        <div className="estateFieldDisplay">Beds: {estates.bedrooms}</div>
                        <div className="estateFieldDisplay">Baths: {estates.bathrooms}</div>
                        <div className="estateFieldDisplay">Price Range: ${estates.price}</div>
                        
                    </div>
                </>
                
            )
        })
    )
        
}

export default UserListings