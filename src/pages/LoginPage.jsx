import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Replacing useHistory with useNavigate

  const handleLogin = async (e) => {
    e.preventDefault();
    // Your login logic here
    // After successful login, redirect the user
    navigate('/');  // Replaces history.push('/')
  };
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
  return (
    <div>
      <h2>Login</h2>
      <div className='Loginpage'>
     
      <form onSubmit={handleLogin}>
        <div>
          <label>Email:</label>
          
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <box-icon type='solid' name='user'></box-icon>
        </div>
        <div>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <box-icon type='solid' name='lock-alt'></box-icon>
        </div>
        <button type="submit">Login</button> 
      </form>
      </div>
    </div>

  );
};

export default LoginPage;
