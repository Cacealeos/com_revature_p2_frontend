import {useState} from 'react'
import {GiHouse} from 'react-icons/gi'
import {BiLinkExternal } from 'react-icons/bi'
import {MdDelete} from 'react-icons/md'
import {Link} from 'react-router-dom'

const UserListings = ({DeleteBtn, Listings}) => {

    return (
        Listings.map(estates => {
            return (
                <div>
                    <br/>
                <label className="estateLabel"><GiHouse></GiHouse>{estates.name}
                 
                <span className='ExternalLinkspan'><MdDelete onClick={()=> DeleteBtn(estates.name)}></MdDelete></span>
                <Link to='/View' className='ExternalLinkspan'><BiLinkExternal></BiLinkExternal></Link></label>
                    <div className="sampleAppoints">
                        
                        <div className="estateFieldDisplay">Footage: {estates.footage}sq.ft.</div>
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