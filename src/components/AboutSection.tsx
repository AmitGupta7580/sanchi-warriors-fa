import React from "react";

const aboutItems = [
  {
    title: "Our Mission",
    text: "To create confident players who excel on and off the field through modern coaching and strong values.",
  },
  {
    title: "Our Vision",
    text: "To become one of the top football academies known for producing skilled, disciplined, and fearless athletes.",
  },
  {
    title: "Why Choose Us",
    text: "Certified coaches, age-group programs, tactical sessions, and a strong focus on fitness and sportsmanship.",
  },
];

function AboutSection() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2>About</h2>
        <p className="section-lead">
          Sanchi Warriors Football Academy is dedicated to developing football talent
          through structured training, fitness, and match exposure.
        </p>
        <div className="about-grid">
          {aboutItems.map((item) => (
            <article className="card" key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
