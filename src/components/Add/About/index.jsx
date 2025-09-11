



import React from "react";
import "./index.css";

function About() {
  return (
    <div className="about-page">
      
      <section className="hero-section">
        <div className="hero-overlay-about">
          <div className="hero-content">
            <h1>Bringing Passion to Your Kitchen</h1>
            <p>
              At Live Kitchen, we're on a mission to connect food lovers with expert chefs through interactive cooking experiences. We inspire creativity and build a global community of home cooks.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="story-section">
        <div className="story-content">
          <h2 className="section-title">Our Story</h2>
          <div className="story-grid">
            <div className="story-text">
              <h3>From Humble Beginnings</h3>
              <p>
                Live Kitchen was founded by a passionate home chef. Realizing there was a disconnect between people's love for food and their confidence in the kitchen, a new idea was born. We started with simple online cooking classes for friends, which quickly grew into a global community. Today, Live Kitchen connects thousands of home cooks with expert chefs from around the world.
              </p>
            </div>
            <div className="story-image">
              <div className="founder-image">
                <img src="images\elon-musk-gettyimages-2147789844-web-675b2c17301ea.jpg"/>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="features-section">
        <h2 className="section-title">Why Choose Us</h2>
        <div className="features-grid">
          <div className="feature-item">
            <div className="icon-container">
              <span className="icon-map"></span>
            </div>
            <h4>Live Interactive Classes</h4>
            <p>Join live, interactive classes and get real-time feedback from chefs, enhancing your cooking skills.</p>
          </div>
          <div className="feature-item">
            <div className="icon-container">
              <span className="icon-globe"></span>
            </div>
            <h4>Global Culinary Expertise</h4>
            <p>Explore a vast library of recipes, from classic dishes to new trends, curated by renowned chefs worldwide.</p>
          </div>
          <div className="feature-item">
            <div className="icon-container">
              <span className="icon-community"></span>
            </div>
            <h4>Supportive Community</h4>
            <p>Connect with a passionate community of food lovers. Share tips, and get inspiration for your next meal.</p>
          </div>
          <div className="feature-item">
            <div className="icon-container">
              <span className="icon-star"></span>
            </div>
            <h4>Quality Assurance</h4>
            <p>Every recipe is meticulously vetted by our team to ensure a seamless experience, allowing you to master any dish.</p>
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="team-section">
        <h2 className="section-title">Meet the Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <div>
                <img className="member-image-placeholder" src="images\chatgpt.png"/>
            </div>
            <h3>Chat Gpt</h3>
            <p>Founder</p>
            <p className="bio">Former restaurant owner with a passion for making fine dining accessible to everyone.</p>
          </div>
          <div className="team-member">
            <div>
                <img className="member-image-placeholder" src="https://play-lh.googleusercontent.com/bTpNtZ6rYYX2SeI-wC4cnr7MJnOh2hjtgYu3UIrSxE09lM3GPl_Uhf9_Ih2Smje2bc0V"/>
            </div>
            <h3>James Rodriguez</h3>
            <p>CEO</p>
            <p className="bio">Known for relentless dedication and leading by example to drive company growth and innovation.</p>
          </div>
          <div className="team-member">
            <div>
                <img className="member-image-placeholder" src="images\Lovart.jpg"/>
            </div>
            <h3>Lovart</h3>
            <p>Community Manager</p>
            <p className="bio">Passionate about building and nurturing a vibrant art community, connecting creators and enthusiasts.</p>
          </div>
          <div className="team-member">
            <div>
                <img className="member-image-placeholder" src="images\google.png"/>
            </div>
            <h3>David Kim</h3>
            <p>Lead Developer</p>
            <p className="bio">Expert in guiding development teams, building robust solutions, and driving innovative software projects.</p>
          </div>
        </div>
      </section>

      {/* Community Impact Section */}
      <section className="impact-section">
        <h2 className="section-title">Community Impact</h2>
        <p className="impact-subtitle">We believe in making a positive impact on food communities worldwide.</p>
        <div className="impact-grid">
          <div className="impact-item">
            <span className="impact-number">50,000+</span>
            <p className="impact-text">Meals Donated</p>
          </div>
          <div className="impact-item">
            <span className="impact-number">120</span>
            <p className="impact-text">Community Partners</p>
          </div>
          <div className="impact-item">
            <span className="impact-number">5,000+</span>
            <p className="impact-text">Free Classes Provided</p>
          </div>
          <div className="impact-item">
            <span className="impact-number">25</span>
            <p className="impact-text">Countries Reached</p>
          </div>
        </div>
      </section>

      {/* Join Community Section */}
      <section className="join-section">
        <h2 className="section-title">Join Our Culinary Community</h2>
        <p>
          Ready to get inspired? Join Live Kitchen now and unlock your passion for cooking.
        </p>
        <button className="join-button">Sign Up Free</button>
      </section>
    </div>
  );
}

export default About;   