import {BsHouseFill} from 'react-icons/bs'
import {GiMushroomHouse} from 'react-icons/gi'
import LandingSearchBar from './LandingSearchBar'
import LoginButtons from './loginButton'

const LandingHeader = () => {
    return (
        <div className="lnd-header">

            <div className="HeaderLogo">
                <span className="grayLogo">REAL<GiMushroomHouse></GiMushroomHouse></span><span className="aquaLogo">ESTATE</span>
            </div>
            <LandingSearchBar></LandingSearchBar>
            <LoginButtons></LoginButtons>

        </div>
    )
}

export default LandingHeader

