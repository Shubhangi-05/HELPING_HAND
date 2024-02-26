import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";
const NgoRegister = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [organization, setOrganization] = useState("");
  const [pan, setPan] = useState("");
  const [city, setCity] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth1/ngoregister", {
        organization,
        email,
        password,
        phone,
        address,
        city,
        pan,
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Register - Ecommer App">
      <div className="form-container" 
      style={{
        backgroundImage: `linear-gradient(rgba(255, 222, 233, 0.5), rgba(181, 255, 252, 0.5)), url('/images/vvvv.avif')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        marginTop: "-70px",
      }}
      >
        <form onSubmit={handleSubmit}
         style={{
          boxShadow: "rgba(248, 194, 194, 0.35) 0px 5px 15px",
          padding: "45px",
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          backdropFilter: "blur(80px)",
          width: "400px",
        }}
        >
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={organization}
              onChange={(e) => setOrganization(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Organization's Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Email "
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your Address"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your City"
              required
            />
          </div>

          <div className="mb-3">
            <input
              type="text"
              value={pan}
              onChange={(e) => setPan(e.target.value)}
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Enter Your PAN"
              required
            />
          </div>
         
          <button type="submit" className="btn btn-primary" style={{ width: "100%" }}>
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default NgoRegister