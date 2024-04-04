import { Link,NavLink } from "react-router-dom";

export default function NavBar() {

  const navLinkStyles=({isActive})=>{
    return{
      textDecoration: isActive ? "none":"underline",
      color: isActive ? "red" :"blue"
    };
  };

  return (
    <>
      <div className="navbar-div" >
        <nav class="navbar bg-body-tertiary">
          <div className="btn-navbar">
            <NavLink style={navLinkStyles} to={'/'}>Home</NavLink> 
          </div>

          <div className="btn-navbar">
          <NavLink style={navLinkStyles} to={'/about'}>AboutUS</NavLink>  
          </div>

          <div className="btn-navbar">
          <NavLink style={navLinkStyles} to={'/admission'}>Admission</NavLink>  
          </div>

          <div className="btn-navbar">
          <NavLink style={navLinkStyles} to={'/facilities'}>Facilities</NavLink>          
          </div>

          <div className="btn-navbar">
          <NavLink style={navLinkStyles} to={'/feeStructure'}>Fee Structures</NavLink>    
          </div>

          <div className="btn-navbar">
          <NavLink style={navLinkStyles} to={'/contact'}>Contact</NavLink> 
          </div>
          
          <div class="dropdown">
            <a class="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Fee Payment
            </a>

            <ul class="dropdown-menu">
              <Link to="/login" className="link">Login</Link><br></br>
              <Link to="/account" className="link">Create Account</Link>       
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
}
