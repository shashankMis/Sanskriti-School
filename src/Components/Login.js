import axios from 'axios';
import { useState } from "react";
import { useNavigate } from "react-router-dom";  

export default function Login() {

  const initialLoginData = {
    rollno: '',
    password: ''
  };

  const [loginData, setLoginData] = useState(initialLoginData);
  const [error, setError] = useState('');
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8081/api/students/login', loginData)
      .then(response => {
        if (response.data.success) {
          navigate('/payment');
        } else {
          setError('Wrong RollNo or Password');
          alert("Wrong RollNo or Password!");
          setLoginData({
            rollno: '',
            password: ''
          });
        }
      })
      .catch(error => {
        console.error('There was an error during login!', error);
        setError('Oh!! Server Wight be Down....Try Again After Some Time');
        setLoginData({
          rollno: '',
          password: ''
        });
      });
  };

  return (
    <>
      <div>
        <form className="login-form" onSubmit={handleLogin}>
          <h1 className="login-row1">Login</h1>
          <hr />
          <label>RollNo:</label>
          <input
            type="text"
            name="rollno"
            value={loginData.rollno}
            onChange={handleChange}
            required
          />
          <br /><br />

          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={loginData.password}
            onChange={handleChange}
            required
          />
          <br /><br />

          <button type="submit">Login</button>
        </form>

        {error && <h1>{error}</h1>}
      </div>
    </>
  );
}
