import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Message transmitted:", formData);
    // You can wire this to an API later or use Formspree/Netlify
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h1><i class="hn hn-startups"></i> Signal Transmission Console</h1>
      <p>Initiating handshake... awaiting your message.</p>

      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Email:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>

      <label>
        Message:
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </label>

      <button type="submit">📡 Transmit Signal</button>
    </form>
  );
}

export default Contact;