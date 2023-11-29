import React from 'react'
import Header from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <>
    <Header/>
    <div>HomePage</div>

    <button>
    <Link to="/createpost">Create Post</Link>
    </button>
    <Footer/>
    </>
  )
}

export default HomePage