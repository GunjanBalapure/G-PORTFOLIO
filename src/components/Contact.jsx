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
        
        {/* CONTACT MINION: Saying goodbye near left header */}
        <div className="minion-wrapper minion-contact-wrap minion-keep-mobile">
          <img 
            src="/assets/minions/minion-contact.png?v=2" 
            alt="Minion character" 
            className="minion minion-contact minion-float"
            onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='flex'; }}
          />
          <div className="minion-float minion-placeholder" style={{ display: 'none', width: '120px', height: '140px' }}>
            MINION IMAGE &rarr; ADD PNG
          </div>
        </div>

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
              <a href="mailto:gunjanbalapure04@gmail.com" className="contact-link" target="_blank" rel="noopener noreferrer">gunjanbalapure04@gmail.com</a>
              <a href="https://github.com/GunjanBalapure" className="contact-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/gunjan-balapure" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com/gunjanbalapure?utm_source=ig_web_button_share_sheet&stkn=ZDNlZDc0MzIxNw==" className="contact-link" target="_blank" rel="noopener noreferrer">Instagram</a>
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
