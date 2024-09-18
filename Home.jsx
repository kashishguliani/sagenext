import React from 'react';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Unleash Your Potential: Discover, Learn, and Excel with SageNest</h1>
      <p>CONNECT . LEARN . GROW</p>
      <img 
        src="https://via.placeholder.com/600x300" 
        alt="Illustration of learners and experts" 
        style={{ width: '600px', height: '300px' }} 
      />
      <button onClick={() => alert('Get Started!')} style={buttonStyle}>
        Get Started Today
      </button>
    </div>
  );
};

const buttonStyle = {
  backgroundColor: '#00A9E0',
  color: 'white',
  padding: '15px 30px',
  border: 'none',
  borderRadius: '5px',
  fontSize: '16px',
  cursor: 'pointer',
};

export default Home;
