import "./Contact.css";
import phone_icon from "../../img/phone_icon.png";
import email_icon from "../../img/email.png";
import address_icon from "../../img/address.png";
import { useContext, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ThemeContext } from "../../context";

const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false)
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs
					.sendForm(
						"service_o1ocpta",
						"template_ljpb68m",
						formRef.current,
						"g-djB4UfcuJRnhM_j"
					)
					.then(
						(result) => {
                            console.log(result.text);
                            setDone(true)
						},
						(error) => {
							console.log(error.text);
						}
					);
    }

	return (
		<div className="contact">
			<div className="contact_big"></div>
			<div className="contact_wrapper">
				<div className="contact_left">
					<h1 className="contact_title">Let's discuss your project</h1>
					<div className="contact_texts">
						<div className="contact_content">
							<img src={phone_icon} alt="" className="contact_img" />
							+2348131461662
						</div>
						<div className="contact_content">
							<img src={email_icon} alt="" className="contact_img" />
							chijiokechibuike.f@gmail.com
						</div>
						<div className="contact_content">
							<img src={address_icon} alt="" className="contact_img" />
							Lagos, Nigeria
						</div>
					</div>
				</div>
				<div className="contact_right">
					<p className="contact_desc">
						<strong>What's your story?</strong> Get in touch. Always available
						for freelancing and job if the right project comes along.
					</p>
					<form ref={formRef} onSubmit={handleSubmit}>
						<input
							style={{ backgroundColor: darkMode && "#333" }}
							type="text"
							placeholder="Name"
							name="user_name"
						/>
						<input
							style={{ backgroundColor: darkMode && "#333" }}
							type="text"
							placeholder="Subject"
							name="user_subject"
						/>
						<input
							style={{ backgroundColor: darkMode && "#333" }}
							type="text"
							placeholder="Email"
							name="user_email"
						/>
						<textarea
							style={{ backgroundColor: darkMode && "#333" }}
							rows="5"
							placeholder="Message"
							name="message"
						/>
						<button>Submit</button>
						{done && "Thank you..."}
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
