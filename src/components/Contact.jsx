import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

function Contact() {
  const revealRef = useScrollReveal();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section ref={revealRef} id="contact" className="contact reveal-hidden">
      <div className="contact-paper-sheet">
        <div className="tape" style={{ top: '-10px', left: '20px', transform: 'rotate(-2deg)' }}></div>
        <div className="tape" style={{ top: '-10px', right: '20px', transform: 'rotate(1deg)' }}></div>
        
        <div className="contact-container">
          {/* Left Column */}
          <div className="contact-left">
            <span className="handwritten contact-label">Get in Touch</span>
            <h2 className="contact-heading typewriter-text">Let's make something.</h2>
            <p className="contact-desc">
              Have an idea, a project, an opportunity, or simply want to say hello? I'd love to hear from you.
            </p>
            
            <p className="contact-desc mt-4">
              I'm always open to interesting projects, collaborations, internships, hackathons, and conversations around AI, technology and creativity.
            </p>

            <div className="contact-links handwritten">
              <a href="#" className="contact-link" onClick={(e) => e.preventDefault()}>your-email@example.com</a>
              <a href="#" className="contact-link" onClick={(e) => e.preventDefault()}>GitHub</a>
              <a href="#" className="contact-link" onClick={(e) => e.preventDefault()}>LinkedIn</a>
              <a href="#" className="contact-link" onClick={(e) => e.preventDefault()}>Instagram</a>
            </div>
            
            <span className="handwritten contact-annotation">say hello :)</span>
          </div>

          {/* Right Column: Form */}
          <div className="contact-right">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="handwritten">Name</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="notebook-input" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="handwritten">Email</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="notebook-input" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="handwritten">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows="3" className="notebook-input"></textarea>
              </div>
              
              <div className="form-submit-wrapper">
                <button type="submit" className="submit-button typewriter-text">
                  Send Message &rarr;
                </button>
                <span className="handwritten contact-annotation-2">ideas welcome!</span>
              </div>

              {isSubmitted && (
                <div className="success-message handwritten">
                  Thanks! Your message is ready to be sent.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
