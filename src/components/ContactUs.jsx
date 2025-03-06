import React, { useState } from "react";
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    alert("Thank you for contacting us!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container-fluid min-vh-100 d-flex align-items-center justify-content-center mt-5 pt-5">
      <div className="row w-100">
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center text-white" style={{ background: "linear-gradient(135deg, #333333, #1a1a1a)" }}>
          <h2 className="fw-bold text-white"><FaEnvelope /> Get in Touch</h2>
          <p className="text-center text-white">Have questions? Feel free to reach out to me!</p>
          <div className="d-flex align-items-center mb-3">
            <FaMapMarkerAlt className="fs-4 me-3" />
            <p className="mb-0 text-white">Myleripalayam, Coimbatore, India</p>
          </div>
          <div className="d-flex align-items-center mb-3">
            <FaPhone className="fs-4 me-3" />
            <p className="mb-0 text-white">+91 9360271462</p>
          </div>
          <div className="d-flex align-items-center">
            <FaEnvelope className="fs-4 me-3" />
            <p className="mb-0 text-white">mahendrenselva@gmail.com</p>
          </div>
        </div>
        <div className="col-md-6 d-flex align-items-center justify-content-center p-4" style={{ backgroundColor: "#f5f5f5" }}>
          <form className="w-75 shadow-lg p-4 rounded-3" style={{ backgroundColor: "#ffffff" }} onSubmit={handleSubmit}>
            <h3 className="mb-4 text-center">Send Us a Message</h3>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input type="email" className="form-control" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea className="form-control" name="message" rows="4" value={formData.message} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-dark w-100 shadow" style={{ backgroundColor: "#333333" }}>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;