
import LandingHeader from './Components/LandingHeader'; 

import Login from './Components/Login';
import { BrowserRouter, Routes, Link, Route } from 'react-router-dom'

import './App.css';
import Landing from './Components/Landing';
import UserPage from './Components/UserPage';
//<Landing></Landing>
//<UserPage></UserPage>
function App() {
  return (
    <div className="App">
      
      <UserPage></UserPage>
      

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