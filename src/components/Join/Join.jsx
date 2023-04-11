import React, { useRef } from "react";
import "./Join.css";
import emailjs from "@emailjs/browser";
const Join = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8854hba",
        "template_zf8l9pd",
        form.current,
        "DWKpvSWc3oydCGxrV"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="join" id="join">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>
        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US</span>
        </div>
      </div>
      <div className="right-j">
        <form action="" className="email-container" onSubmit={sendEmail}>
          <input
            ref={form}
            type="email"
            name="user_email"
            placeholder="Enter your Email adress"
          />
          <button className="btn btn-j" type="submit">Join Now</button>
        </form>
      </div>
    </div>
  );
};

export default Join;
