import { useState } from 'react'
import { ImQuill } from "react-icons/im"
import { GiMushroomHouse } from "react-icons/gi"
import { useNavigate, Link, useLocation } from "react-router-dom"

const Login = ({registerpage}) => {

    let client = {}
    const [realtor, changeRealtor] = useState(false)

    // const location = useLocation()
    // const LoggedUser = location.state
    // if(LoggedUser)
    // edit(LoggedUser)

    const [showUser, editUser] = useState({

    });
    const sampleUser = {
        name: "hippo",
        address: "123 street Blvd.",
        email: "hipposRBanned@gmail.com",
        realterID: "57",
        Phone: "876-5309",
        Listings: [
            {
                listingId: 1,
                address: "Estate 1",
                squareFt: 750,
                bedrooms: 2,
                bathrooms: 2,
                price: 190000
            },
            {
                listingId: 2,
                address: "Estate 2",
                squareFt: 1850,
                bedrooms: 4,
                bathrooms: 5,
                price: 430000
            },
            {
                listingId: 3,
                address: "Estate 3",
                squareFt: 1100,
                bedrooms: 3,
                bathrooms: 3,
                price: 265000
            }]
    }
    // UPDATED KEY NAMES TO MATCH BACKEND - DAVID
    const newUser = {
        firstName:  "",
        lastName:  "",
        email:  "",
        phoneNumber:  "",
        password: "",
        cfpasswd:   ""
    }
    const [REQ, EnableREQ] = useState(false)
    const nav = useNavigate();

    const REQUEST_DESTINATION = "http://localhost:8080/Register";

    const LOGIN_REQUEST_DESTINATION = "http://localhost:8080/Login"

    const REALTOR_LOGIN_REQUEST_DESTINATION = "http://localhost:8080/realtors/Login"

    async function CreateUser() {
        
        const response = await fetch(REQUEST_DESTINATION ,{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'omit', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'// 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(newUser) // body data type must match "Content-Type" header
        });
      
    }

    async function LoginUser() {
        console.log(realtor)
        var url ="";
        if(!realtor)
        url = LOGIN_REQUEST_DESTINATION
        else
        url = REALTOR_LOGIN_REQUEST_DESTINATION

        const response = await fetch(url ,{
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, *cors, same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'omit', // include, *same-origin, omit
            headers: {
            'Content-Type': 'application/json'// 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
            body: JSON.stringify(newUser) // body data type must match "Content-Type" header
        });

        const body = await response.json()// parses JSON response into native JavaScript objects
        console.log(body)
        client = body; //creates client
        console.log(client)

        if (client.clientId > 0 && client.clientId !== "") {
            
            nav("/User", {state: client} )
        } else if (client.realtorId > 0 && client.realtorId !== "")
            nav("/User", {state: client} )
        else {
            
            alert("Incorrect email or password!")
        }
    
        
    }

    // function changeRealtor () {
    //     realtor = !realtor
    //     console.log(realtor)
    // }


    function AlterUser (field, value) {
        //ListingUpdate = showListing;
        newUser[`${field}`] = value;
        console.log(newUser);
    }

    function checkFields () {
        // nav("/User", {state: sampleUser})//testing needs to be REMOVED 
        // return//testing needs to be REMOVED 
        let foo = false;
        if(registerpage){
            
            Object.keys(newUser).filter(element => element!="phoneNumber").forEach(key => {
                console.log(newUser[`${key}`])
                if(newUser[`${key}`] == "")
                {
                    foo = true
                    return
                }
            })

            if(foo)
            EnableREQ(true)
            else
            {
            console.log(newUser);
            editUser(newUser);
            CreateUser()
            nav("/")
            }
        } else 
        {
            Object.keys(newUser).filter(element => !element=="email" && !element=="password").forEach(key => {
                console.log(newUser[`${key}`])
                if(newUser[`${key}`] == "")
                {
                    foo = true
                    return
                }
            })

            if(foo)
            EnableREQ(true)
            else
            {
            console.log(newUser);
            editUser(newUser);
            LoginUser()
            }
        }
        
    }

    return (
        <div className="LoginPage">

            <div className="loginImg"></div>

            <div className="RegisterFields">
                <span className="grayLogo">REAL<GiMushroomHouse></GiMushroomHouse></span><span className="aquaLogo">ESTATE</span>

                {registerpage && <Link to="/User" state={sampleUser} className="signInRegister " >
                    <div className="btnCircleFilled">0</div>
                    SIGN IN__
                    <ImQuill></ImQuill>
                </Link>}
                
                <div className="loginPocket ">
                <br/>
                <br/>
                <br/>
                    <p>Welcome to REAL ESTATE... Please Create a profile</p>
                    <p>*Indicates REQUIRED field...</p>
                    <br/>
                    {registerpage && <div className='loginInline'>
                        <div className='loginBlock'>
                            <span>*</span><input className="loginField" name="firstName" type="text" onChange={(e) => AlterUser(e.target.name, e.target.value)} placeholder="First Name"></input><br/>
                            { <>{(!newUser.firstName && REQ) && <label className='RequiredText'>This field is required.</label>}</> }
                        </div>
                        <div className='loginBlock'>
                            <span>*</span><input className="loginField" name="lastName" type="text" onChange={(e) => AlterUser(e.target.name, e.target.value)} placeholder="Last Name"></input><br/>
                            { <>{(!newUser.lastName && REQ) && <label className='RequiredText'>This field is required.</label>}</> }
                        </div>
                    </div>}
                    <label>Realtor???</label><input type="checkbox" name="realtor"  onClick={()=> changeRealtor(!realtor)}></input>
                    <br/>

                    <div className='loginInline'>
                        <div className='loginBlock'>
                            <span>*</span><input className="loginField" name="email" type="text" onChange={(e) => AlterUser(e.target.name, e.target.value)} placeholder="Email"></input><br/>
                            { <>{(!newUser.email && REQ) && <label className='RequiredText'>This field is required.</label>}</> }
                        </div>
                    
                        {registerpage && <div className='loginBlock'>
                            <br/>
                            <input className="loginField" name="phoneNumber" type="text" onChange={(e) => AlterUser(e.target.name, e.target.value)} placeholder="Phone (Optional)"></input><br/>
                        </div>}
                    </div>
                    <div className='loginInline'>
                        <div className='loginBlock'>
                            <span>*</span><input className="loginField" name="password" type="text" onChange={(e) => AlterUser(e.target.name, e.target.value)} placeholder="Enter Password"></input><br/>
                            { <>{(!newUser.password && REQ) && <label className='RequiredText'>This field is required.</label>}</> }
                        </div>
                        { registerpage &&  <div className='loginBlock'>
                            <span>*</span><input className="loginField" name="cfpasswd" type="text" onChange={(e) => AlterUser(e.target.name, e.target.value)} placeholder="Confirm Password"></input><br/>
                            { <>{(!newUser.cfpasswd && REQ) && <label className='RequiredText'>This field is required.</label>}</> }
                            { <>{(REQ && (newUser.cfpasswd != newUser.passwd)) && <label className='RequiredText'>Passwords don't match.</label>}</> }
                        </div>}
                    </div>
                </div>

                {registerpage && <div className="createProfileBtn " onClick={() => checkFields()}>
                    <div className="btnCircleFilled">0</div>
                    CreateUser_
                    <ImQuill></ImQuill>
                </div>}

                {!registerpage && <div className="createProfileBtn " onClick={() => checkFields()}>
                    <div className="btnCircleFilled">0</div>
                    Login_
                    <ImQuill></ImQuill>
                </div>}
                
            </div>
            

        </div>
    )
}

export default Login