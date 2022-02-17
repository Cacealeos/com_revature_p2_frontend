

import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'

import './App.css';
import Landing from './Components/Landing';
import UserPage from './Components/UserPage';
import Estate from './Components/Estate';
import LandingHeader from './Components/LandingHeader'; 

import Login from './Components/Login';
//<Landing></Landing>
//<UserPage></UserPage>
//<Estate></Estate>
function App() {
  return (
    <div className="App">
      
      <Login></Login>
      

    </div>
  );
}

export default App;

{/* <BrowserRouter>
            <Routes>
              <Route path="/" component={LandingHeader} exact></Route>
              <Route path="/LoginPage" component={Login}></Route>

            </Routes>
        </BrowserRouter > */}