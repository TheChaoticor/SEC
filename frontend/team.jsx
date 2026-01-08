import "./team.css";

function Team() {
  return (
    <section className="team">
      <h2>Our Team</h2>

      <div className="team-cards">
        <div className="team-card">
          <div className="avatar"></div>
          <h3>Member Name</h3>
          <p>Position</p>
        </div>

        <div className="team-card">
          <div className="avatar"></div>
          <h3>Member Name</h3>
          <p>Position</p>
        </div>

        <div className="team-card">
          <div className="avatar"></div>
          <h3>Member Name</h3>
          <p>Position</p>
        </div>
      </div>
    </section>
  );
}

export default Team;