import { Link } from "react-router-dom"

const LandingSlider = () => {
    return (
        <div className="bodySlider">
            <div className="bodySegement bSeg1">
                <Link to="/View" className="bodySliderLink"></Link>
            </div>
            <div className="bodySegement bSeg2">
                <Link to="/View" className="bodySliderLink"></Link>
            </div>
            <div className="bodySegement bSeg3">
                <Link to="/View" className="bodySliderLink"></Link>
            </div>
            <div className="bodySegement bSeg4">
                <Link to="/View" className="bodySliderLink"></Link>
            </div>
            <div className="bodySegement bSeg5">
                <Link to="/View" className="bodySliderLink"></Link>
            </div>
        </div>
    )
}

export default LandingSlider