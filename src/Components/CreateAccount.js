//   window.location.href = "/payment";import bgimage from "./bgimage.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
export default function CreateAccount() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleCreate = () => {
    if (!username || !password) {
      setError('Please enter both username and password.');
    } 
    <Link to="/success">else{
      alert("Created") }
    </Link>
  };

  // const handleCreate=()=>{
  //   (!username || !password)?setError("Please enter both username and password."):<Link to="/success"></Link>
  // }

  return (
    <>
      <div>
        <form className="create-form" >
          <h1 className="login-row1">Create Account</h1>
          <hr></hr>
          <label>Username:</label>
          <input type="text" id="username" name="username "  value={username} onChange={(e) => setUsername(e.target.value)}  />
          <br></br>
          <br></br>

          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            classid="password"
            name="password"
           
            value={password} onChange={(e) => setPassword(e.target.value)}
          />
          <br></br>
          <br></br>

          <label>Gender:</label>
          <label>
            <input type="radio" name="Gender" value="Male" />
            Male
          </label>
          <label>
            <input type="radio" name="Gender" value="Female" />
            Female
          </label>
          <br></br>
          <br></br>
          <label>Mobile Number:</label>
          <input
            type="text"
            placeholder="+91-2220152546"
            class="form-control"
            required
          />
          <br></br>
          <label>Country</label>
          <input
            type="text"
            name="country"
            placeholder="INDIA"
            class="form-control"
            required
          />
          <br></br>
          <label>City</label>
          <input
            type="text"
            name="country"
            placeholder="Delhi"
            class="form-control"
            required
          />
          <hr></hr>
          <button onClick={handleCreate}>SUBMIT</button>
        </form>
      </div>
      <h1>{setError}</h1>
    </>
  );
}
