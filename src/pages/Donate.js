import React from 'react'
import { useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import "../styles/DonateStyles.css"
const Donate = () => {

    const [ngodetails, setNgodetails]=useState([]);
    const [page, setPage]=useState(1);
    const [citySearch,setCitySearch]=useState("");
    const navigate=useNavigate();
    const getDetails=async()=>{
      try{
        const res=await axios.get(`/api/v1/ngo1/ngodetails/${page}`);
        if(res.data.success && res.data.ngo){
          setNgodetails(res.data.ngo);
        }
      }
      catch(error){
        toast.error("Could not display the list of NGOs");
        console.log(error);
        navigate('/');
      }
    }
    const handleDonate=async(ngoid)=>{
      try{
        const res=await axios.post(`/api/v1/ngo1/donate/${ngoid}`);
        if(res.data.success){
          toast.success("DONATION SUCCESSFUL, THANK YOU!");
        }
      }
      catch(error){
        toast.error("Could not donate");
        console.log(error);
        //navigate('/');
      }
    }

    const handleSearch=async()=>{
      try{
        const res=await axios.get(`/api/v1/ngo1/searchcity/${citySearch}`);
        if(res.data.success && res.data.ngo){
          setNgodetails(res.data.ngo);
        }
      }
      catch(error){
        toast.error("Could not find any ngo");
        console.log(error);
      }
    }

    useEffect(()=>{
      getDetails();
    },[page])


  return (
    
    <>
    <div className="Searchngo">
        <label htmlFor="citySearch">Search NGOs by City: </label>
        <input
          type="text"
          id="citySearch"
          value={citySearch}
          onChange={(e) => setCitySearch(e.target.value)}
        />
        <button className="Search-button"onClick={handleSearch}>Search</button>
      </div>
    <table className='ngo-table'>
        <thead>
          <tr>
            <th>Organization</th>
            <th>City</th>
            <th>Phone</th>
            <th> EMAIL</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {ngodetails.map((ngo) => (
            <tr key={ngo._id}>
              <td>{ngo.organization}</td>
              <td>{ngo.city}</td>
              <td>{ngo.phone}</td>
              <td>{ngo.email}</td>
              <td>{ngo.address}</td>
              <td><button className="donate-button" onClick={() => handleDonate(ngo._id)}>Donate</button></td>
            </tr>
          ))}
        </tbody>
      </table>

    
    
    </>
  )
}

export default Donate