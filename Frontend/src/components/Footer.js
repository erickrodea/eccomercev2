import React from "react";

export default function Footer() {
  const subscribe = () => {
    // Add your subscribe logic here
    document.getElementById("message").innerText = "Subscription successful!";
  };

  return (
    <>
      <footer>
        <section className="grid">
          <article className="contact-info">
            <div className="subbox">
              <h2>Subscribe to our Newsletter</h2>
              <input type="email" id="email" placeholder="Enter your email" />
              <button onclick="subscribe()">Subscribe</button>
              <p id="message" />
            </div>
          </article>
          <article className="contact-info">
            <h2>Learn More</h2>
            <ul className="#">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Meet The Team</a>
              </li>
            </ul>
            <h2>Resource</h2>
            <ul className="#">
              <li>
                <a href="#">Technology Guide</a>
              </li>
              <li>
                <a href="partners.html">Tech Partners</a>
              </li>
            </ul>
            <h2>News</h2>
            <ul className="#">
              <li>
                <a href="#">Latest Trends</a>
              </li>
              <li>
                <a href="calendar.css">Press Release</a>
              </li>
            </ul>
          </article>
          <article className="contact-info">
            <h2>Contact Us</h2>
            <ul className="#">
              <li>
                <a href="contact.html">Contact Information</a>
              </li>
              <li>
                <a href="#">
                  <h3>Social Media</h3>
                </a>
              </li>
              <div className="social-media-icons">
                <a
                  href="www.facebook.com"
                  target="_blank"
                  title="Follow us on Facebook">
                  <img src="fbicon.svg" alt="Facebook Icon" />
                </a>
                <a
                  href="www.instagram.com"
                  target="_blank"
                  title="Follow us on Instagram">
                  <img src="igicon.svg" alt="Instagram Icon" />
                </a>
                <a
                  href="www.twitter.com"
                  target="_blank"
                  title="Follow us on Twitter">
                  <img src="twicon.svg" alt="Twitter Icon" />
                </a>
              </div>
              <li>
                <div>
                  <h1 className="npo-name">Locations and Office Hours</h1>
                  <p className="address">
                    Suite 1111,
                    <br />
                    1337 Rodea Drive,
                    <br />
                    San Francisco, CA 48302
                  </p>
                  <ul>
                    <li>
                      <strong>Mon:</strong> 10 AM - 2 PM
                    </li>
                    <li>
                      <strong>Tue:</strong> 11 AM - 3 PM
                    </li>
                    <li>
                      <strong>Wed:</strong> 10 AM - 2 PM
                    </li>
                    <li>
                      <strong>Thu:</strong> Closed
                    </li>
                    <li>
                      <strong>Fri:</strong> 11 AM - 3 PM
                    </li>
                    <li>
                      <strong>Sat &amp; Sun:</strong> Closed
                    </li>
                  </ul>
                  <p className="phone-number">(123) 456-7890</p>
                  <p />
                </div>
              </li>
            </ul>
          </article>
        </section>
        <p>© 2023 Envision Corp. All rights reserved.</p>
      </footer>
    </>
  );
}
