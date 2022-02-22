import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Landing from './Components/Landing'
import UserPage from './Components/UserPage'
import Estate from './Components/Estate'
import Login from './Components/Login'
import EditEstate from './Components/EditEstate'
import Results from './Components/Results'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing/>} exact></Route>{/*****************Landing Page with links to Reg/Login*/}
              <Route path="/Login"  element={<Login registerpage = {false}/>}></Route>{/*****************Login to existing account*/}
              <Route path="/Register" element={<Login registerpage = {true}/>}></Route>{/*****************Create User to existing account*/}
              <Route path="/User" element={<UserPage />}></Route>{/*****************Edit Profile and Listings of existing account*/}
              <Route path="/Search" element={<Results/>}></Route>{/********************************View and search for listings*/}
              <Route path="/RegisterListing" element={<EditEstate/>}></Route>{/*****************Add New Listing */}
              <Route path="/AddListing" element={<EditEstate AddListing={true}/>}></Route>{/*****************Edit Existing Listing*/}
              <Route path="/EditListing" element={<EditEstate AddListing={false}/>}></Route>{/*****************Edit Existing Listing*/}
              <Route path="/View" element={<Estate/>}></Route>{/****************************View/Add an Existing Listing*/}
            </Routes>
        </BrowserRouter > 
      
      
    </div>
  );
}

export default App;
