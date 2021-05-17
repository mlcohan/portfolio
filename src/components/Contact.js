
import React from "react";

function Contact() {
  return (
    <div className="card " style={{width: '100%'}}>
    <div className="card-body">
      <h1 className="card-title">Contact Info:</h1>
      <hr className="my-4" />   {/*the line separater*/}
      <div className="contact-info grey">
        <h3><strong>Mary Cohan </strong><small>(she/her)</small></h3>
        <p>Seattle, WA</p>
        <p>(206) 718-9958 </p>
        <p><a className="link" href="mailto: mary.cohan@gmail.com">Email</a></p>
        <p><a className="link" href="https://www.linkedin.com/in/mary-cohan">LinkedIn Profile</a></p>
        <p><a className="link" href="https://github.com/mlcohan">GitHub Portfolio</a></p>
        <p><a className="link" href="./Assets/Images/Resume2021.pdf"> Resume</a></p>
        <br />
        <br />
      </div>
    </div>
  </div>
    // <div className="contact">
    //   <h1>Contact Me</h1>
    //   <h3><strong>Mary Cohan </strong><small>(she/her)</small></h3>
    //       <p>Seattle, WA</p>
    //       <p>(206) 718-9958 </p>
    //       <p><a class="link" href= "mailto: mary.cohan@gmail.com">Email</a></p>
    //       <p><a class="link" href= "https://www.linkedin.com/in/mary-cohan">LinkedIn Profile</a></p>
    //       <p><a class="link" href="https://github.com/mlcohan">GitHub Portfolio</a></p>
    //       <p><a class="link" href="./Assets/Images/Resume2021.pdf"> Resume</a></p>
      
    // </div>
  );
}

export default Contact;