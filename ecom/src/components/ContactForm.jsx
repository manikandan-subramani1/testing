import React, { useState } from "react";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  console.log("📤 Submitting:", formData); // 👈 Add this
  setLoading(true);
  setSuccessMsg("");
  setErrorMsg("");

  try {
    const response = await fetch("http://localhost:3001/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formData)
    });

    const result = await response.json();
    console.log("✅ Server response:", result); // 👈 Add this
    setSuccessMsg("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  } catch (error) {
    console.error("❌ Error submitting form:", error);
    setErrorMsg("Failed to send. Please try again.");
  } finally {
    setLoading(false);
  }
};


  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

      {successMsg && <p className="text-green-600">{successMsg}</p>}
      {errorMsg && <p className="text-red-600">{errorMsg}</p>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block">Name</label>
          <input
            type="text"
            name="name"
            className="w-full border px-4 py-2 rounded"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block">Email</label>
          <input
            type="email"
            name="email"
            className="w-full border px-4 py-2 rounded"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label className="block">Message</label>
          <textarea
            name="message"
            rows="4"
            className="w-full border px-4 py-2 rounded"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
