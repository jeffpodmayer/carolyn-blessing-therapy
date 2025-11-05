import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert("Failed to send message. Please try again.");
      console.log(error);
    }
  };

  return (
    <section id="contact" className="px-4 pt-4 pb-8 scroll-mt-[75px]">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-8 mt-6">
          <h1 className="text-primary text-2xl md:text-4xl mb-8 font-bold">
            Get in Touch
          </h1>
        </div>
        <div className="flex flex-wrap gap-8 max-w-[1000px] mx-auto">
          <form
            className="flex flex-col flex-1 min-w-full bg-white rounded-lg p-8 shadow-sm"
            onSubmit={handleSubmit}
          >
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 min-w-0">
                <div className="flex flex-col gap-4">
                  <div className="mb-2">
                    <label className="block text-primary font-bold">
                      Full Name
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-2 mt-2 border rounded-lg text-base bg-background font-normal"
                      />
                    </label>
                  </div>
                  <div className="mb-2">
                    <label className="block text-primary font-bold">
                      Email Address
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-2 mt-2 border rounded-lg text-base bg-background font-normal"
                      />
                    </label>
                  </div>
                  <div className="mb-2">
                    <label className="block text-primary font-bold">
                      Phone Number
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-2 mt-2 border rounded-lg text-base bg-background font-normal"
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div>
                  <label className="block text-primary font-bold">
                    Message
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full p-2 mt-2 border rounded-lg text-base bg-background font-normal h-[240px] resize-y"
                    />
                    <p className="italic text-xs text-gray-500 mt-0">
                      Note: Email is not secure, so please limit personal or
                      sensitive information shared.
                    </p>
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="bg-primary text-white border-none py-3 px-6 rounded text-base cursor-pointer transition-colors duration-200 self-center mt-4 w-full md:w-[30%] hover:bg-secondary"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
