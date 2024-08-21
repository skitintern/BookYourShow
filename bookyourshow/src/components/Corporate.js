import React from 'react'
import '../style/Corporate.css'
import Navbar from './Navbar';
const Corporate = () => {
  const sections = [
    {
      title: "Brand Promotions",
      description:
      " Gifting entertainment is a fun way to push your brand’s message. And the ways you can use vouchers are endless. For example, upselling celebrity-endorsed products timed with a movie release.",
      buttonText: "Promote your brand",
      imageUrl: "https://in.bmscdn.com/webin/corporate/steven-libralon.png", // Replace with actual image URLs
    },
    {
      title: "Employee Engagement Recognition & Rewards",
      description:
        "Show your clients and employees some appreciation by gifting them our products.",
      buttonText: "Engage your employees",
      imageUrl: "https://in.bmscdn.com/webin/corporate/customer-engage.png",
    },
    {
      title: "Lead Generation",
      description:
        "Get positive referrals, keep existing customers and trigger change management.",
      buttonText: "Improve leads",
      imageUrl: "https://in.bmscdn.com/webin/corporate/lead-generation.png",
    },
    {
      title: "Loyalty",
      description:
        "Keep customers firmly in your corner by rewarding them with promotional vouchers.",
      buttonText: "Retain your customers",
      imageUrl: "https://in.bmscdn.com/webin/corporate/loyalty.png",
    },
    {
      title: "Corporate Gifting",
      description:
        "From supplying comedy and sporting events to movies and plays, we’ve got the entertainment worth gifting to your patrons.",
      buttonText: "Explore solutions",
      imageUrl: "https://in.bmscdn.com/webin/corporate/corporate-gifting.png",
    },
  ];
  return (
    <>
  
      <div className="App">
        <header className="header">
          <div className="header-content">
            <h3>Entertainment you can gift.</h3>
            <p>
              A variety of solutions to skyrocket your business with vouchers,
              promotions, loyalty, employee recognition & rewards.
            </p>
            <div className="header-buttons">
              <button className="watch-video">▶ Watch video</button>
              <button className="download-brochure">⬇ Download Brochure</button>
            </div>
          </div>
          <div className="callback-form">
            <form>
              <label>Full Name</label>
              <input type="text" placeholder="Name" required />

              <label>Company Email</label>
              <input type="email" placeholder="Company Email" required />

              <label>Company Name</label>
              <input type="text" placeholder="Company Name" required />

              <label>Mobile Number</label>
              <input type="tel" placeholder="eg: 91480XXXXXX" required />

              <button type="submit" disabled>
                Receive a callback
              </button>
            </form>
          </div>
        </header>

        <section className="partners-section">
          <h2>OUR PARTNERS</h2>
          <div className="partners-logos">
            <img
              src="https://in.bmscdn.com/webin/corporate/hp-logo.png"
              alt="HP"
            />
            <img
              src="https://in.bmscdn.com/webin/corporate/ola-logo.png"
              alt="OLA"
            />
            <img
              src="https://in.bmscdn.com/webin/corporate/axis-logo.png"
              alt="Axis Bank"
            />
            <img
              src="https://in.bmscdn.com/webin/corporate/mastercard-logo.png"
              alt="Mastercard"
            />
            <img
              src="https://in.bmscdn.com/webin/corporate/icici-logo.png"
              alt="ICICI Bank"
            />
          </div>
          <div className="statistics">
            <div>
              <h3>1000+</h3>
              <p>Cities</p>
            </div>
            <div>
              <h3>6000</h3>
              <p>Screens</p>
            </div>
            <div>
              <h3>1000+</h3>
              <p>Corporates who trust us</p>
            </div>
            <div>
              <h3>15 MILLION+</h3>
              <p>Tickets sold per month</p>
            </div>
            <div>
              <h3>4 Billion</h3>
              <p>Page views per month</p>
            </div>
          </div>
        </section>
        {sections.map((section, index) => (
          <div
            key={index}
            className="section"
            style={{
              display: "flex",
              flexDirection: (index + 1) % 2 == 0 ? "row" : "row-reverse",
            }}
          >
            <div className="section-content">
              <h1>{section.title}</h1>
              <p>{section.description}</p>
              <button>{section.buttonText}</button>
            </div>
            <img src={section.imageUrl} alt={section.title} />
          </div>
        ))}
        <div className="business-solutions">
          <h2>OUR SUITE OF BUSINESS SOLUTIONS:</h2>
          <div className="solutions-container">
            <div
              className="solution-card"
              style={{ backgroundColor: "#4CAF50" }}
            >
              <h3>End-to-End Creative Support</h3>
            </div>
            <div
              className="solution-card"
              style={{ backgroundColor: "#F44336" }}
            >
              <h3>Marketing & E-mail Guidance</h3>
            </div>
            <div
              className="solution-card"
              style={{ backgroundColor: "#FFEB3B" }}
            >
              <h3>Bulk SMS Communication</h3>
            </div>
          </div>
          <div className="cta-section">
            <p>
              Get priority support from the experts in the entertainment
              industry.
            </p>
            <button className="cta-button">Access the complete suite</button>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Corporate
