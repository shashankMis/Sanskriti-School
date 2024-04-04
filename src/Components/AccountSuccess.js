import { Link } from "react-router-dom";
import Success from './success.gif';
export default function AccountSuccess(){
    return(
        <>
        
            <img src={Success} alt="Succesfullt Photo" className="success-img"/>
            <h1 className="h1-success">Your Account Is Created Successfully!!</h1>
            <Link to="/login2"><button className="goto-login">GO TO LOGIN</button></Link>
            
        </>
    )
}