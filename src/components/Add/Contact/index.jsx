import React, { useState } from "react";
import "./index.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // 🚀 stops page reload & URL change

    
    alert("✅ Your message has been sent!");

    
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <section className="contact-container">
      <header className="contact-header">
        <h1>Contact Us</h1>
        <p className="subtitle">
          Have questions, feedback, or recipe ideas? We'd love to hear from you!
        </p>
      </header>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Write your message here..."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="submit-btn">
          Send Message
        </button>
      </form>

      <footer className="contact-footer">
        <p>
          📧 You can also reach us at: <strong>support@flavorhub.com</strong>
        </p>
      </footer>
    </section>
  );
}

export default Contact;
