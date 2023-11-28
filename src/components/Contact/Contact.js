import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function Contact() {
  const [formStatus, setFormStatus] = React.useState('Send')
  function Submit(e) {
    const formEle = document.querySelector("form");
    e.preventDefault()
      setFormStatus('Submitting...')
      const { name, email, message } = e.target.elements
      let conFom = {
        name: name.value,
        email: email.value,
        message: message.value,
      }
      console.log(conFom)
    const formDatab = new FormData(formEle);
    fetch(
      "https://script.google.com/macros/s/AKfycbzjtYJ2aK2BducYeu3v6iqbPhk6taVOLi9RQdVVSRR0Gim1T79MLB8cM2t7oCBUnb2wbg/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
      
  }
    
  
    return (
      
      
      <Container fluid className="contact-section">
        <Container  className="home-content">
        
        <container fluid >
        <h2 className="mb-3">Contact Me</h2>
        <form onSubmit={(e)=>Submit(e)}name="form">
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <button className="btn btn-danger" type="submit">
            {formStatus}
          </button>
        </form>
        <Particle />
        </container>
      </Container>
      </Container>
      
     
    )
  }
  export default Contact;