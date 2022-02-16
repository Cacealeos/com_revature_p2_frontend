import {ImQuill} from 'react-icons/im'
import {RiQuillPenLine} from 'react-icons/ri'
import {Link} from 'react-router-dom'

const LoginButton = () => {
    return (
        <div className="loginBtn">
            
                <div className="signIn" onClick={null}>
                    <div className="btnCircleFilled"></div>
                    SIGN IN__
                    <ImQuill></ImQuill>
                </div>
            
                <div className="signUp btnOverlap" onClick={null}>
                    <div className="btnCircleFilled"></div>
                    SIGN UP__
                    <ImQuill></ImQuill>
                </div>
            
            <div className='QuillIcon'><RiQuillPenLine></RiQuillPenLine></div>
            
        </div>
    )
}

export default LoginButton

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