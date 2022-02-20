import { BsSearch } from "react-icons/bs"
import { useNavigate } from "react-router"

const LandingSearchBar = () => {
    const nav = useNavigate()

    function Search (event) {
        console.log(event.key)
        if(event.key === 'Enter')
            nav(`/Search/${event.target.value}`)

    }


    return (
        <div className="searchBar">
            <BsSearch></BsSearch>
            <input className="sBar" placeholder="Search Houses" onKeyDown={(e) => Search(e)}/>
        </div>
    )
}

export default LandingSearchBar