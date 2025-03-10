import React, { useState } from 'react';

function ContactForm({ formPosition = 'center' }) { // Default position is 'center'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' });
      setSubmitted(true);
    }, 100);
  };

  // Determine alignment based on formPosition prop
  const getAlignmentStyle = () => {
    switch (formPosition) {
      case 'left':
        return { justifyContent: 'flex-start' };
      case 'right':
        return { justifyContent: 'flex-end' };
      case 'center':
      default:
        return { justifyContent: 'center' };
    }
  };

  return (
    <div
      style={{
        display: 'flex',
        ...getAlignmentStyle(), // Apply alignment based on formPosition
      }}
    >
      <div className="contact-form w-full max-w-xs">
        <h2>Contact</h2>
        {submitted ? (
          <p className="success-message">Submission complete! Thank you for your message.</p>
        ) : (
          <form
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            onSubmit={handleSubmit}
          >
            <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <div className="mb-6">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Message:</label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default ContactForm;