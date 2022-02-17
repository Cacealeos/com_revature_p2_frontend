import {BsHouseFill} from 'react-icons/bs';
import LandingSearchBar from './LandingSearchBar';
import LoginButtons from './loginButton';

const LandingHeader = () => {
    return (
        <div className="lnd-header">

            <div className="HeaderLogo">
                <BsHouseFill></BsHouseFill> 
            </div>
            <LandingSearchBar></LandingSearchBar>
            <LoginButtons></LoginButtons>

        </div>
    )
}

export default LandingHeader

