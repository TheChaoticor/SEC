import "./hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>
          SOA <span>EnglishCafe</span>
        </h1>
        <p>
          A platform to enhance communication skills, confidence, and leadership
          through interactive sessions and activities.
        </p>

        <button className="hero-btn">Join Us</button>
      </div>
    </section>
  );
}

export default Hero;