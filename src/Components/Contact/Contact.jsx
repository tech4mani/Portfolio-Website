import React, { useState } from 'react';
import './Contact.css';
import infinity from '../../assets/infity.png';
import gmail from '../../assets/gmail.png';
import location from '../../assets/location.png';
import phone from '../../assets/phone.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';

const Contact = () => {
  const [result, setResult] = useState("");
  const [showAlert, setShowAlert] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    setShowAlert(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "01214712-9539-4672-b3c1-d5b2c2041a88");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();
      console.log("Web3Forms response:", data);

      if (data.success) {
        setResult("Form Submitted Successfully!");
        event.target.reset();
      } else {
        setResult("Something went wrong: " + (data.message || "Try again!"));
      }

      setTimeout(() => setShowAlert(false), 3000);

    } catch (err) {
      console.error("Error sending form:", err);
      setResult("Error! Please try again later.");
      setTimeout(() => setShowAlert(false), 3000);
    }
  };

  return (
    <div id='Contact' className="contact">
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={infinity} alt="" />
      </div>

      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>
            Looking for an entry-level developer role where I can apply my skills and grow.
            Contact me for job opportunities or freelance projects.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={gmail} alt="Gmail" />
              <p>tech4manikandan@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={phone} alt="Phone" />
              <p>+91 6383573652</p>
            </div>
            <div className="contact-detail">
              <img src={location} alt="Location" />
              <p>Pudukkottai, Tamil Nadu</p>
            </div>
            <div className="contact-detail">
              <img src={linkedin} alt="LinkedIn" />
              <p><a href="https://www.linkedin.com/in/m-manikandan-tech4mani/" target="_blank" rel="noreferrer">LinkedIn</a></p>
            </div>
            <div className="contact-detail">
              <img src={github} alt="Github" />
              <p><a href="https://github.com/tech4mani" target="_blank" rel="noreferrer">Github</a></p>
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="contact-right">
          <input type="hidden" name="subject" value="New Contact Form Submission" />
          <label>Your Name</label>
          <input type="text" name="name" placeholder="Enter your name" required />

          <label>Your Email</label>
          <input type="email" name="email" placeholder="Enter your email" required />

          <label>Write your message here</label>
          <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>

          <button type="submit" className="contact-submit">Submit now</button>
        </form>
      </div>

      {showAlert && (
        <div className={`form-alert ${result.includes("Successfully") ? "success" : "error"}`}>
          {result}
        </div>
      )}
    </div>
  );
};

export default Contact;
