import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {

  const boxStyle={
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/children.avif)`, // Replace with the actual path to your community image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: '#fff', // White text or any other light color
  };
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#000', // Black background
    color: '#fff', // White text
  };

  const buttonContainerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  };

  const buttonStyle = {
    backgroundColor: '#fff', // White background
    border: 'none',
    color: '#000', // Black text
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
  };

  return (

    <div style ={boxStyle}>
    <div style={containerStyle}>
      <div style={buttonContainerStyle}>
        {/* Placeholder for an image, replace with your actual image URL */}
        <img
          src={process.env.PUBLIC_URL + '/images/helping_hands.png'}
          alt="Background"
          style={{ width: '200px', height: '200px', marginBottom: '20px', borderRadius: '50%' }}
        />

        {/* Navigation buttons */}
        <button style={buttonStyle}>
          <div>FOR USER REGISTRATION</div>
          <Link to="/userregister" style={{ textDecoration: 'none', color: 'inherit' }}>
            REGISTER
          </Link>
        </button>
        <button style={buttonStyle}>
          <div>FOR NGO REGISTRATION</div>
          <Link to="/ngoregister" style={{ textDecoration: 'none', color: 'inherit' }}>
            REGISTER
          </Link>
        </button>
      </div>
    </div>
    </div>
  );
};

export default Register;
