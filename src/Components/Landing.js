import LandingFooter from "./LandingFooter";
import LandingHeader from "./LandingHeader";
import LandingSlider from "./LandingSlider";

const Landing = () => {
    return (
        <div className="Landing">
            <LandingHeader></LandingHeader>
            <LandingSlider></LandingSlider>
            <LandingFooter></LandingFooter>
        </div>
        
    )
}

export default Landing;