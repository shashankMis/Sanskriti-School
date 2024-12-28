import axios from 'axios';
import { Link } from "react-router-dom"; 
import { useState } from "react";
import { useNavigate } from "react-router-dom";  

export default function CreateAccount() {

  const initialFormData = {
    rollno: '',
    usernname: '',
    password: '',
    gender: '',
    number: '',
    city: ''
  };

  const [formData, setFormData] = useState(initialFormData);
  const navigate = useNavigate();  

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleCreate = (e) => {
    e.preventDefault();

    axios.post('http://localhost:8081/api/students/create', formData)
      .then(response => {
        console.log('User created successfully:', response.data);
        setFormData(initialFormData);
         navigate('/success');
      })
      .catch(error => {
        console.error('There was an error creating the user!', error);
        alert("Oh! Server Might Be Down....Try After Some Time!!");
        setFormData(initialFormData);
      });
  };

  return (
    <>
      <div>
        <form className="create-form" onSubmit={handleCreate}>
          <h1 className="login-row1">Create Account</h1>
          <hr />
          <label>RollNo:</label>
          <input
            type="text"
            name="rollno"
            value={formData.rollno}
            onChange={handleChange}
            required
          />
          <br /><br />

          <label>Name:</label>
          <input
            type="text"
            name="usernname"
            value={formData.usernname}
            onChange={handleChange}
            required
          />
          <br /><br />

          <label>Password:</label>
          <input
            type="password"
            placeholder="Enter Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <br /><br />

          <label>Gender:</label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={handleChange}
              checked={formData.gender === 'Male'}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={handleChange}
              checked={formData.gender === 'Female'}
            />
            Female
          </label>
          <br /><br />

          <label>Mobile Number:</label>
          <input
            type="text"
            name="number"
            placeholder="+91-2220152546"
            value={formData.number}
            onChange={handleChange}
            required
          />
          <br /><br />

          <label>City:</label>
          <input
            type="text"
            name="city"
            placeholder="Delhi"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <hr />
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </>
  );
}
