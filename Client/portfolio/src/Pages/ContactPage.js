import React, { useState } from 'react';

function ContactPage() {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State for errors and submission status
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Simple validation function
  const validate = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      // You can send data to server here or show success message
      console.log('Form submitted:', formData);
      setSubmitted(true);
      // Reset form
      setFormData({ name: '', email: '', message: '' });
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: 'auto' }}>
      <h1>Contact Me</h1>
      {submitted && <p style={{ color: 'green' }}>Thank you for your message!</p>}

      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`form-control ${errors.name ? 'is-invalid' : ''}`}
          />
          {errors.name && <div className="invalid-feedback">{errors.name}</div>}
        </div>

        <div className="mb-3">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
          />
          {errors.email && <div className="invalid-feedback">{errors.email}</div>}
        </div>

        <div className="mb-3">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className={`form-control ${errors.message ? 'is-invalid' : ''}`}
            rows="4"
          />
          {errors.message && <div className="invalid-feedback">{errors.message}</div>}
        </div>

        <button type="submit" className="btn btn-primary">Send</button>
      </form>
    </div>
  );
}

export default ContactPage;
