import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import { Link } from 'react-router-dom'
const HomePage = () => {

  const buttonStyle = {
    backgroundColor: 'black', // Green color, you can change this
    border: 'none',
    color: 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: 'pointer',
  };

  const taglineStyle = {
    fontSize: '1.2em',
    fontWeight: 'bold',
    color: '#333', // Dark grey color, you can change this
    marginBottom: '20px',
  };

  const headingStyle={
    fontSize: '1.5em',
    fontWeight: 'bold',
    color: '#333', // Dark grey color, you can change this
    marginBottom: '20px'
  }
  return (
    <>
    <Header/>
    <div style={{ textAlign: 'center' }}> <p style = {headingStyle}>  WELCOME TO OUR HOMEPAGE </p>
    </div>
      <div style={{ textAlign: 'center' }}>
        <p style={taglineStyle}>Uniting Communities for a Better Tomorrow—Together in Clothing, Food, Empowerment, and Care.</p>
      </div>

    <button style= {buttonStyle}>
    <Link to="/create-post">Create Post</Link>
    </button>

    <button style= {buttonStyle}>
      <Link to="/donate">Donate</Link>
    </button>
    <Footer/>
    </>
  )
}

export default HomePage