import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
	const formRef = useRef();

	const [loading, setLoading] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = ({ target: { name, value } }) => {
		setForm({ ...form, [name]: value });
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		try {
			await emailjs.send(
				import.meta.env.VITE_EMAILJS_SERVICE_KEY,
				import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
				{
					from_name: form.name,
					to_name: "Juan D. Rojas",
					from_email: form.email,
					to_email: "yo217@hotmail.es",
					message: form.message,
				},
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
			);
      alert("Message sent!");
      setForm({
        name: '',
        email: '',
        message: ''
      })
		} catch (error) {
			console.error(error.message);
			alert("Something went wrong :(");
		} finally {
			setLoading(false);
		}
	};
	return (
		<section className="c-space my-20" id="contact">
			<div className="relative min-h-screen flex items-center justify-center flex-col">
				<img
					src="/assets/terminal.png"
					alt="terminal background"
					className="hidden sm:block absolute inset-0 min-h-screen"
				/>
				<div className="contact-container">
					<h3 className="head-text">Let&apos;s talk</h3>
					<p className="text-lg text-white-600 mt-3">
						Feel free to count on me when building a new website, improve an
						existing platform or bring an idea to life. It&apos;s been a
						pleasure!
					</p>
					<form
						ref={formRef}
						onSubmit={handleSubmit}
						className="mt-12 flex flex-col space-y-7"
					>
						<label className="space-y-3">
							<span className="field-label">Full Name</span>
							<input
								type="text"
								name="name"
								value={form.name}
								onChange={handleChange}
								required
								className="field-input"
								placeholder="John Doe"
							/>
						</label>
						<label className="space-y-3">
							<span className="field-label">Email</span>
							<input
								type="email"
								name="email"
								value={form.email}
								onChange={handleChange}
								required
								className="field-input"
								placeholder="jhon@mail.com"
							/>
						</label>
						<label className="space-y-3">
							<span className="field-label">Your Message</span>
							<textarea
								name="message"
								value={form.message}
								onChange={handleChange}
								required
								rows={5}
								className="field-input"
								placeholder="Hi, I'm interested in..."
							/>
						</label>
						<button className="field-btn" type="submit" disabled={loading}>
							{loading ? "Sending..." : "Send Message"}
							<img
								src="/assets/arrow-up.png"
								alt="arrow-up"
								className="field-btn_arrow"
							/>
						</button>
					</form>
				</div>
			</div>
		</section>
	);
};

export default Contact;
