import React from 'react'
import { useState,useEffect } from 'react'
import axios from 'axios';
import Header from '../../components/Layout/Header';
import Footer from '../../components/Layout/Footer';
const DisplayPost = () => {
    const[posts,setPosts]=useState();
    const getAllPosts = async () => {
        try {
          const { data } = await axios.get(`/api/v1/post1/displayAll`);
          console.log(data);
          setPosts(data.posts);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(()=>{
        getAllPosts();
      },[])
  return (
    <>
        <Header/>
          <div className="row dashboard">
          <div className="col-md-9 ">
          <h1 className="text-center">All Posts</h1>
          <div className="d-flex flex-wrap">
            {posts?.map((p) => (
              <div className="card m-2" key={p._id}>
                <img
                  src={`/api/v1/post1/postphoto/${p._id}`}
                  className="card-img-top"
                  alt="imageset"
                  width="50px"
                  height="100px"
                />

                    <p className="card-text ">
                    {p.description.substring(0, 60)}...
                  </p>
                <div className="card-body">
                  <div className="card-name-price">
                    <h5 className="card-title">Post added by {p.name}</h5>
                    <h5 className="card-title card-address">
                    Locality: {p.address}
                    City: {p.city}
                    </h5>
                    <h5 className='card-title card-contact'>
                        Phone: {p.phone}
                 </h5>
                 <h5 className='card-title card-category'>
                    Category: {p.category}
                 </h5>
                  </div>
                 
                  <div className="card-name-price">
                    <button
                      className="btn btn-info ms-1"
                      >
                        HELP NOW!
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
      </div>
      </div>
      <Footer/>
    </>
  )
}

export default DisplayPost