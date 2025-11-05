import React, { useEffect, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [notification, setNotification] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => {
        setNotification(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [notification]);

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
    setIsLoading(true);
    setNotification(null); // Clear any existing notifications

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setNotification({
        type: "success",
        message: "Message sent successfully!",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      setNotification({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "Failed to send message. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="px-4 pt-4 pb-8 scroll-mt-[75px]">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-8 mt-6">
          <h2 className="text-primary text-2xl md:text-4xl mb-8 font-bold">
            Get in Touch
          </h2>
        </div>
        <div className="flex flex-wrap gap-8 max-w-[1000px] mx-auto">
          <form
            className="flex flex-col flex-1 min-w-full bg-white rounded-lg p-8 shadow-sm"
            onSubmit={handleSubmit}
            aria-label="Contact Carolyn Blessing Therapy"
          >
            {notification && (
              <div
                role="alert"
                aria-live="polite"
                className={`p-4 rounded-lg mb-6 border ${
                  notification.type === "success"
                    ? "bg-green-50 text-green-800 border-green-200"
                    : "bg-red-50 text-red-800 border-red-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <span className="mr-2">
                      {notification.type === "success" ? "✅" : "❌"}
                    </span>
                    {notification.message}
                  </div>
                  <button
                    type="button"
                    onClick={() => setNotification(null)}
                    className="ml-4 text-sm underline hover:no-underline focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-current rounded"
                    aria-label="Dismiss notification"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            )}
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1 min-w-0">
                <div className="flex flex-col gap-4">
                  <div className="mb-2">
                    <label
                      htmlFor="contact-name"
                      className="block text-primary font-bold"
                    >
                      Full Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full p-2 mt-2 border rounded-lg text-base bg-background font-normal focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="contact-email"
                      className="block text-primary font-bold"
                    >
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      aria-required="true"
                      className="w-full p-2 mt-2 border rounded-lg text-base bg-background font-normal focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  <div className="mb-2">
                    <label
                      htmlFor="contact-phone"
                      className="block text-primary font-bold"
                    >
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      aria-describedby="phone-help"
                      className="w-full p-2 mt-2 border rounded-lg text-base bg-background font-normal focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                    <p
                      id="phone-help"
                      className="text-xs text-gray-500 mt-1 ml-1"
                    >
                      For scheduling purposes
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-primary font-bold"
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    aria-required="true"
                    aria-describedby="message-help"
                    className="w-full p-2 mt-2 border rounded-lg text-base bg-background font-normal h-[240px] resize-y focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                  <p
                    id="message-help"
                    className="italic text-xs text-gray-500 mt-1"
                  >
                    Note: Email is not secure, so please limit personal or
                    sensitive information shared.
                  </p>
                </div>
              </div>
            </div>
            <button
              type="submit"
              aria-describedby="form-submit-help"
              className={`border-none py-3 px-6 rounded text-base transition-colors duration-200 self-center mt-4 w-full md:w-[30%] focus:outline-none focus:ring-2 focus:ring-secondary focus:ring-offset-2 ${
                isLoading
                  ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                  : "bg-primary text-white hover:bg-secondary cursor-pointer"
              }`}
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
            <div id="form-submit-help" className="sr-only">
              Submit your message to Carolyn Blessing Therapy
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
