import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate();

  const handleregister = async (e) => {
    e.preventDefault();
    const user = {
      name: e.target.name.value,
      age: e.target.age.value
    };

    try {
      const res = await axios.post('https://user-registration1-5u2i.onrender.com/users', user);
      const { id, password } = res.data.data;

      alert(`Registration Successful!\nYour User ID:${id} and Password ${password} `);
      navigate('/'); // Navigate to login page
    } catch (error) {
      console.error(error);
      alert('Registration failed');
    }
  };

  return (
    <div>
      <h1>Register User</h1>
      <form onSubmit={handleregister}>
        <label>Name:</label>
        <input type="text" name="name" required />
        <label>Age:</label>
        <input type="text" name="age" required />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
