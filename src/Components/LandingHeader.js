import {BsHouseFill} from 'react-icons/bs';
import LandingSearchBar from './LandingSearchBar';
import LoginButton from './loginButton';

const LandingHeader = () => {
    return (
        <div className="lnd-header">

            <div className="HeaderLogo">
                <BsHouseFill></BsHouseFill> 
            </div>
            <LandingSearchBar></LandingSearchBar>
            <LoginButton></LoginButton>

        </div>
    )
}

export default LandingHeader

