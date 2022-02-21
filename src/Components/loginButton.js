import {ImQuill} from 'react-icons/im'
import {RiQuillPenLine} from 'react-icons/ri'
import {Link} from 'react-router-dom'
import Login from './Login'

const LoginButtons = () => {

    return (
        <div className="loginBtn">

            <Link to="/Login" className="signIn" >
                <div className="btnCircleFilled"></div>
                SIGN IN__
                <ImQuill></ImQuill>
            </Link>
                <Link to="/Register" className="signUp btnOverlap" >
                    <div className="btnCircleFilled"></div>
                    SIGN UP__
                    <ImQuill></ImQuill>
            </Link>
            <div className='QuillIcon'><RiQuillPenLine></RiQuillPenLine></div>
            
        </div>
    )
}

export default LoginButtons

{/* <Link to="/loginPage">
                <div className="signIn">
                    <div className="btnCircleFilled"></div>
                    SIGN IN__
                    <ImQuill></ImQuill>
                </div>
            </Link>
            <Link to="/loginPage">
                <div className="signUp btnOverlap">
                    <div className="btnCircleFilled"></div>
                    SIGN UP__
                    <ImQuill></ImQuill>
                </div>
            </Link>
            <div className='QuillIcon'><RiQuillPenLine></RiQuillPenLine></div> */}