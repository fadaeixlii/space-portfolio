import React from "react";

const ContactMe = () => {
  return (
    <>
      <div className="container">
        <div className="front side">
          <div className="content">
            <h1>Hakkam Abdullah</h1>
            <p>
              I am a graphic designer and art director. I am as well specialised
              in front end web design, user experience and creating identities.
              Throughout my career, I have worked with companies of all shapes
              and sizes that enriched my experience
            </p>
          </div>
        </div>
        <div className="back side">
          <div className="content">
            <h1>Contact Me</h1>
            <form>
              <label>Your Name :</label>
              <input type="text" placeholder="Omar Khattab" />
              <label>Your E-mail :</label>
              <input type="text" placeholder="Example@mail.com" />
              <label>Your message :</label>
              <textarea placeholder="The Subject"></textarea>
              <input type="submit" value="Done" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactMe;
