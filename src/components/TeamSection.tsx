import React from "react";

const teamMembers = [
  { avatar: "CY", name: "Chanakya Yadav", role: "UNKNOWN" },
];

function TeamSection() {
  return (
    <section id="team" className="section">
      <div className="container">
        <h2>Team</h2>
        <p className="section-lead">Meet the coaches who lead the Warriors.</p>
        <div className="team-grid">
          {teamMembers.map((member) => (
            <article className="card member" key={member.name}>
              <div className="avatar">{member.avatar}</div>
              <h3>{member.name}</h3>
              <p>{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
