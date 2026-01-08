import "./newsletter.css";

function Newsletter() {
  return (
    <section className="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <p>
        Get updates about events, sessions, and activities directly in your
        inbox.
      </p>

      <div className="newsletter-form">
        <input type="email" placeholder="Enter your email" />
        <button>Subscribe</button>
      </div>
    </section>
  );
}

export default Newsletter;
