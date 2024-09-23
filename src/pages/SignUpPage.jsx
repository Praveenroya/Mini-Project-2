import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();  // Replacing useHistory with useNavigate

  const handleSignUp = async (e) => {
    e.preventDefault();
    // Your login logic here
    // After successful login, redirect the user
    navigate('/');  // Replaces history.push('/')
  };
<link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
  return (
    <div>
      <h2>SignUp</h2>
      <div className='SignUppage'>
      <form onSubmit={handleSignUp}>
      <div>
          <label>Username:</label>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          <box-icon type='solid' name='user-circle'></box-icon>
        </div>
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
        <button type="submit">SignUp</button> 
      </form>
      </div>
    </div>

  );
};

export default SignUpPage;
