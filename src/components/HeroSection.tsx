import React from "react";

function HeroSection() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <p className="tag">Football Academy</p>
        <h1>धैर्यं सर्वत्र साधयति।</h1>
        <h1>Courage accomplishes everything everywhere</h1>
        <p>
          Welcome to Sanchi Warriors Football Academy. We shape young athletes with
          professional coaching, discipline, and team spirit.
        </p>
        <a className="btn-primary" href="#contact">
          Join the Academy
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
