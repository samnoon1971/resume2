import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./Contact.css";
import Background from "./contactbg.jpg";
var sectionStyle = {
    width: "100%",
    height: "400px",
    backgroundImage: `url(${Background })`
};
function ContactForm() {
  const [state, handleSubmit] = useForm("mayaenan");
  if (state.succeeded) {
      return <p>Thanks. I got your response</p>;
  }
  return (
    <section id="contact" data-aos="zoom-in" data-aos-delay="300" style={sectionStyle}>
         <h1>CONTACT ME</h1>
        <hr />
        <p className="contact-subtitle">
          Let's work together

        </p>
      <form onSubmit={handleSubmit}>
      
      <div className="form-name">Which email should I contact you?</div>
      <input
        className="form-control"
        id="email"
        type="email" 
        name="email"
        required
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
       <div className="form-name">Your Message</div>
      <textarea
        className="form-control"
        id="message"
        name="message"
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <hr/>
      <button type="submit" disabled={state.submitting} className="submit-btn">Submit</button>
        
    </form>
    </section>
  );
}

function App() {
    return (
      <ContactForm />
    );
  }
  export default App;