import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`User signed up: ${formData.name}`);
  };

  return (
    <form onSubmit={handleSubmit} style={{ textAlign: 'center', padding: '50px' }}>
      <h2>Sign Up</h2>
      <div>
        <label>Name: </label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
      </div>
      <div>
        <label>Email: </label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
      </div>
      <div>
        <label>Password: </label>
        <input type="password" name="password" value={formData.password} onChange={handleChange} />
      </div>
      <button type="submit" style={buttonStyle}>Sign Up</button>
    </form>
  );
};

const buttonStyle = {
  backgroundColor: '#00A9E0',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default SignUp;
