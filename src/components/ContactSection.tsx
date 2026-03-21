function ContactSection() {
  return (
    <section id="contact" className="section">
      <div className="container contact-wrap">
        <div>
          <h2>Contact</h2>
          <p className="section-lead">Interested in admissions or trials? Reach out to us.</p>
          <ul className="contact-list">
            <li>
              <strong>Phone:</strong> +91 79069 22616
            </li>
            <li>
              <strong>Email:</strong> sanchiwarriorsacademy@gmail.com
            </li>
            <li>
              <strong>Address:</strong> Behind D-Mart, Vindhyanchal School, Kolar Road, Bhopal, Madhya Pradesh (462042)
            </li>
          </ul>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Your Name" />
          <label htmlFor="email">Email</label>
          <input id="email" type="email" placeholder="Your Email" />
          <label htmlFor="message">Message</label>
          <textarea id="message" rows={4} placeholder="Tell us about your interest"></textarea>
          <button type="submit" className="btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactSection;
