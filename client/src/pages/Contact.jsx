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
    const [formSuccess, setFormSuccess] = useState(false);
    const [endpointError, setEndpointError] = useState(false);

    const popupRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                const hadError = formError || emailError || endpointError;

                setFormError(false);
                setEmailError(false);
                setEndpointError(false);
                setFormSuccess(false);

                if (hadError) {
                    setAlertAcknowledged(true);
                    setTimeout(() => setAlertAcknowledged(false), 2000);
                }
            }
        };

        if (formError || emailError || endpointError) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [formError, emailError, endpointError, formSuccess]);


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
        setFormSuccess(true);
        console.log("📡 Message transmitted:", formData);
        console.log("Endpoint:", import.meta.env.VITE_FORMSPREE_URL)


        if (!import.meta.env.VITE_FORMSPREE_URL) {
            console.warn("Formspree URL is missing! Check env settings.");
            setEndpointError(true);
            setFormSuccess(false);
            return;
        }

        // call API
        fetch(import.meta.env.VITE_FORMSPREE_URL, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        })
            .then((res) => {
                if (res.ok) {
                    console.log("Formspree says: Message sent!");
                    setFormData({ name: "", email: "", message: "" });
                    // You can also trigger a success message here
                } else {
                    console.error("Formspree error: Something went wrong.");
                }
            })
            .catch((err) => {
                console.error("Fetch error:", err);
                setEndpointError(true);
                setFormSuccess(false);
            });

    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-8">
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

                        <div
                            ref={popupRef}
                            className={`pixel-success-popup ${formSuccess ? "visible" : ""}`}
                        >
                            <i className="hn hn-check-circle"></i> SIGNAL RECEIVED: Transmission successful.
                        </div>

                        <div
                            ref={popupRef}
                            className={`pixel-error-popup endpoint-error ${endpointError ? "visible" : ""}`}
                        >
                            <i className="hn hn-server"></i> TRANSMISSION FAILED: Endpoint unreachable or misconfigured.
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

                            <label className="pt-1">*Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}

                            />

                            <label className="pt-1">*Email:</label>
                            <input
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}

                            />

                            <label className="pt-1">*Message:</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}

                            />

                            <button type="submit"><i className="hn hn-upload-alt"></i> Transmit Signal</button>
                        </form>
                    </div>
                </div>
                <div className="col-md-4 d-flex flex-column align-items-center">
                    <h1 className="social-title">Signal Ports</h1>

                    <h3>Email: tanggiahuy1011@gmail.com</h3>
                    <h3>Phone Number: +1 (306) 630-6661</h3>
                    <div className="social-icons">
                        <h1>
                            <a href="https://www.facebook.com/Stup1dD0g" target="_blank" rel="noopener noreferrer">
                                <i className="hn hn-facebook-square"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/giahuy-tang/" target="_blank" rel="noopener noreferrer">
                                <i className="hn hn-linkedin"></i>
                            </a>
                            <a href="https://github.com/GiaHuyTang" target="_blank" rel="noopener noreferrer">
                                <i className="hn hn-github"></i>
                            </a>
                            <a href="mailto:tanggiahuy1011@gmail.com">
                                <i className="hn hn-envelope"></i>
                            </a>
                        </h1>
                    </div>

                </div>
            </div>
        </div>


    );
}

export default Contact;
