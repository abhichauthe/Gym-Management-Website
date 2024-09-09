import { useState } from "react";
import styles from "./contact.module.css";

const Second = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [massage, setMassage] = useState(""); 

  const [errormassage, setErrorMessage] = useState(""); // Changed from errorMessage to errormassage

  const formHandler = async (e) => {
    e.preventDefault();

    if (!fullName || !email || !subject || !massage) {
      setErrorMessage("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("http://localhost:4000/api/contact/submit-contact-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          email,
          subject,
          massage,
        }),
      });

      const data = await response.json();

      if (response.status === 200) {
        setFullName("");
        setEmail("");
        setSubject("");
        setMassage("");
        setErrorMessage("Send Successfully");
      } else {
        setErrorMessage(data.message); // Changed from data.massage to data.message
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again later.");
    }
  };

  return ( //jsx component for html like syntax
  <div className={`${styles.second}  container sections-padding`}>
    <div data-aos="fade-down">
      <p className="paragraph">Welcome To strengthy</p>
      <h2>Get In Touch With Us</h2>
      <p>
        If you have any feedback or questions about our clubs, our website or
        our services in general, please contact us by filling out the form.
      </p>
      <h3>Open Hours</h3>
      <p>
        <span>Mon – Fri :</span> 08.00 aM to 09.00 pM
      </p>
      <p>
        <span>Sat :</span> 09.00 AM To 06.00 PM
      </p>
      <p>
        <span>sunday :</span> 09.00 AM To 02.00 PM
      </p>
    </div>
    <div data-aos="fade-up">
      <h2>Send Us a massage</h2>

      <form>
        <input
          type="text"
          placeholder="Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <textarea
          name=""
          placeholder="Message"
          value={massage}
          onChange={(e) => setMassage(e.target.value)}></textarea>
        <button onClick={(e) => formHandler(e)} type="submit">
          Submit
        </button>
        <p>{errormassage}</p>
      </form>
    </div>
  </div>
);
  
};

export default Second;

