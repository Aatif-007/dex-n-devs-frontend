import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });
  const [loading, setLoading] = useState(false); // New loading state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when submission starts
    try {
      const resp = await axios.post("https://dex-n-devs.onrender.com/message", form);
      console.log(resp.data);
      toast.success(resp.data.message, { position: "top-center" });
      setForm({ name: "", email: "", contact: "", message: "" });
    } catch (error) {
      if (error.response) {
        toast.error(error.message);
      } else if (error.request) {
        toast.error("No response received:", error.request, { position: "top-center" });
      } else {
        toast.error("Error message:", error.message, { position: "top-center" });
      }
    } finally {
      setLoading(false); // Set loading to false once submission is done
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  return (
    <div id="form" className="mx-2 text-white mb-16">
      <div className="md:flex items-center justify-center gap-6">
        <div className="w-full md:w-[30%]">
          <h1 className="text-3xl font-semibold text-center my-2 glow tracking-wider md:text-3xl lg:text-4xl md:tracking-tight md:text-start">
            Let's get Started
          </h1>
          <p className="text-center my-3 w-full md:text-start">
            Have any questions or need more information? Fill the form and we
            will get back to you ASAP.
          </p>
          <p className="text-center md:text-sm lg:text-base md:text-start">
            Get a free consultation with our experts.
          </p>
        </div>
        <div>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name">Name</label>
              <br />
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                type="text"
                className="w-full flex-row md:w-full rounded-md focus:shadow-md focus:ring-offset-rose-600 bg-[#FFFFFF1F] outline-none h-10 px-2 text-white"
                required
              />
            </div>
            <div className="md:flex items-center justify-start gap-3">
              <div className="md:w-1/2 my-3">
                <label htmlFor="email">Email</label>
                <br />
                <input
                  name="email"
                  value={form.email}
                  type="email"
                  onChange={handleChange}
                  className="w-full rounded focus:shadow-md focus:ring-offset-rose-600 bg-[#FFFFFF1F] outline-none h-10 px-2 text-white"
                  required
                />
              </div>
              <div className="md:w-1/2 my-3">
                <label htmlFor="contact">Contact</label>
                <br />
                <input
                  type="tel"
                  value={form.contact}
                  name="contact"
                  onChange={handleChange}
                  className="w-full rounded-md focus:shadow-md focus:ring-offset-rose-600 bg-[#FFFFFF1F] outline-none h-10 px-2 text-white"
                  required
                  maxLength={10}
                  minLength={10}
                />
              </div>
            </div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full md:w-full focus:shadow-md focus:ring-offset-rose-600 bg-[#FFFFFF1F] outline-none h-20 px-2 text-white"
              required
            ></textarea>
            <button
              className="w-full md:w-full text-white font-semibold rounded-lg py-2 mt-4 flex justify-center items-center"
              style={{ backgroundColor: "#ED80FD" }}
              type="submit"
              disabled={loading} // Disable the button when loading
            >
              {loading ? (
                <div className="spinner-border animate-spin border-t-2 border-white rounded-full w-5 h-5 mr-2"></div>
              ) : (
                "Book a free call"
              )}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
      <hr className="mx-16 mt-4" />
    </div>
  );
};

export default Contact;
