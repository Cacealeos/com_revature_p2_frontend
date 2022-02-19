import { useState } from 'react'
import { ImQuill } from "react-icons/im"
import { GiMushroomHouse } from "react-icons/gi"
import { Redirect, Link } from "react-router-dom"

const Login = () => {

    const [showUser, editUser] = useState({
        FName:  "",
        LName:  "",
        Email:  "",
        Phone:  "",
        passwd: "",
        cfpasswd:   ""

    });
    const [REQ, EnableREQ] = useState(false)

    const REQUEST_DESTINATION = "http://localhost:8080";

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
            body: JSON.stringify(showUser) // body data type must match "Content-Type" header
        });

        const body = await response.json()// parses JSON response into native JavaScript objects
        
        console.log(body)
    }

    function checkFields () {
        console.log(REQ)
        const foo = false;

        Object.keys(showUser).filter(element => element!="Phone").forEach(key => {
            if(showUser.key === "")
            {
                foo = true
                return
            }
        })

        if(foo)
        EnableREQ(true)
        else
        CreateUser()
        
    }

    if(false)
    return (
        <Redirect from="/" to="/home" />
    )
    else
    return (
        <div className="LoginPage">

            

            <div className="loginImg"></div>

            <div className="RegisterFields">
                <span className="grayLogo">REAL<GiMushroomHouse></GiMushroomHouse></span><span className="aquaLogo">ESTATE</span>

                <Link to="/Login" className="signInRegister " >
                    <div className="btnCircleFilled">0</div>
                    SIGN IN__
                    <ImQuill></ImQuill>
                </Link>
                
                <div className="loginPocket ">
                <br/>
                <br/>
                <br/>
                    <p>Welcome to REAL ESTATE... Please Create a profile</p>
                    <p>*Indicates REQUIRED field...</p>
                    <br/>
                    <div className='loginInline'>
                        <div className='loginBlock'>
                            <span>*</span><input className="loginField" name="FName" type="text" onChange={(e) => editUser(e.target.value)} placeholder="First Name"></input><br/>
                            { <>{(!showUser.FName && REQ) && <label className='RequiredText'>This field is required.</label>}</> }
                        </div>
                        <div className='loginBlock'>
                            <span>*</span><input className="loginField" name="LName" type="text" onChange={(e) => editUser(e.target.value)} placeholder="Last Name"></input><br/>
                            { <>{(!showUser.LName && REQ) && <label className='RequiredText'>This field is required.</label>}</> }
                        </div>
                    </div>
                   
                    <br/>

                    <div className='loginInline'>
                        <div className='loginBlock'>
                            <span>*</span><input className="loginField" name="Email" type="text" onChange={(e) => editUser(e.target.value)} placeholder="Email"></input><br/>
                            { <>{(!showUser.Email && REQ) && <label className='RequiredText'>This field is required.</label>}</> }
                        </div>
                    
                        <div className='loginBlock'>
                            <br/>
                            <input className="loginField" name="Phone" type="text" onChange={(e) => editUser(e.target.value)} placeholder="Phone (Optional)"></input><br/>
                        </div>
                    </div>
                    <div className='loginInline'>
                        <div className='loginBlock'>
                            <span>*</span><input className="loginField" name="passwd" type="text" onChange={(e) => editUser(e.target.value)} placeholder="Enter Password"></input><br/>
                            { <>{(!showUser.passwd && REQ) && <label className='RequiredText'>This field is required.</label>}</> }
                        </div>
                        <div className='loginBlock'>
                            <span>*</span><input className="loginField" name="cfpasswd" type="text" onChange={(e) => editUser(e.target.value)} placeholder="Confirm Password"></input><br/>
                            { <>{(!showUser.cfpasswd && REQ) && <label className='RequiredText'>This field is required.</label>}</> }
                            { <>{(REQ && (showUser.cfpasswd != showUser.passwd)) && <label className='RequiredText'>Passwords don't match.</label>}</> }
                        </div>
                    </div>
                </div>

                <div className="createProfileBtn " onClick={() => checkFields()}>
                    <div className="btnCircleFilled">0</div>
                    Create Profile__
                    <ImQuill></ImQuill>
                </div>
            </div>
            

        </div>
    )
}

export default Login