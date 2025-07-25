import React, { useState, useEffect, useRef } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [emailError, setEmailError] = useState(false);
    const [formError, setFormError] = useState(false);
    const validEmailFormat = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-z]{2,}$/;
    const [alertAcknowledged, setAlertAcknowledged] = useState(false);

    const popupRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                setFormError(false);
                setEmailError(false);
                setAlertAcknowledged(true);
                setTimeout(() => setAlertAcknowledged(false), 2000); // display for 2s
            }

        };

        if (formError || emailError) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [formError, emailError]);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));

        if (name === "email") {
            const isValidEmail = validEmailFormat.test(value);
            if (isValidEmail) {
                setEmailError(false);
            }
        }

        setFormError(false); // Clears general error
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        const { name, email, message } = formData;

        const isValidEmail = validEmailFormat.test(email);

        if (!name || !email || !message) {
            setFormError(true);
            setEmailError(false); // only general error
            return;
        }

        if (!isValidEmail) {
            setEmailError(true);
            setFormError(false);
            return;
        }

        // All good — reset errors
        setFormError(false);
        setEmailError(false);
        console.log("📡 Message transmitted:", formData);
        
        // call API
        fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.success) {
                    console.log("Message sent!");
                    // Optionally show a success popup and reset the form
                    setFormData({ name: "", email: "", message: "" });
                } else {
                    console.error("Message failed:", data.error);
                    // Optionally display failure message
                }
            })
            .catch((err) => {
                console.error("Fetch error:", err);
            });

    };


    return (
        <div className="contact-wrapper">
            <div
                ref={popupRef}
                className={`pixel-error-popup ${formError ? "visible" : ""}`}
            >
                <i className="hn hn-alert-triangle"></i> TRANSMISSION FAILED: Incomplete fields detected.
            </div>

            <div
                ref={popupRef}
                className={`pixel-error-popup email-error ${emailError ? "visible" : ""}`}
            >
                <i className="hn hn-mail"></i> TRANSMISSION FAILED: Invalid email format detected.
            </div>

            {alertAcknowledged && (
                <div className="alert-log">
                    <span>&gt;&gt; ALERT ACKNOWLEDGED</span>
                </div>
            )}

            <form className={`contact-form ${formError ? "form-error" : ""}`} onSubmit={handleSubmit}>
                <h1>
                    <i className="hn hn-startups"></i> Signal Transmission Console
                </h1>
                <p>Initiating handshake... awaiting your message.</p>

                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}

                />

                <label>Email:</label>
                <input
                    type="text"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}

                />

                <label>Message:</label>
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}

                />

                <button type="submit"><i className="hn hn-upload-alt"></i> Transmit Signal</button>
            </form>
        </div>
    );
}

export default Contact;
