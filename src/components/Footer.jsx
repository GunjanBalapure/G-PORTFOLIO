import './Footer.css';

const currentYear = new Date().getFullYear();

function Footer() {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-scrapbook-edge">
        
        {/* Top section: Navigation Links */}
        <div className="footer-nav">
          <a href="#about" onClick={(e) => handleScroll(e, '#about')} className="handwritten">About</a>
          <a href="#projects" onClick={(e) => handleScroll(e, '#projects')} className="handwritten">Projects</a>
          <a href="#contact" onClick={(e) => handleScroll(e, '#contact')} className="handwritten">Contact</a>
        </div>
        
        {/* Bottom section: 3-column layout */}
        <div className="footer-content">
          <div className="footer-left">
            <span className="footer-logo handwritten">GB.</span>
          </div>
          
          <div className="footer-center">
            <p className="typewriter-text">Building with curiosity. Creating with purpose.</p>
          </div>
          
          <div className="footer-right">
            <p className="handwritten">&copy; {currentYear} Gunjan Balapure</p>
          </div>
        </div>

        {/* Tiny decorative marks */}
        <span className="footer-mark mark-1 handwritten">~</span>
        <span className="footer-mark mark-2 handwritten">*</span>
        
      </div>
    </footer>
  );
}

export default Footer;
