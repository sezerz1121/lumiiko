import { useState } from 'react'
import axios from 'axios'
import { HiMail, HiUser, HiPaperAirplane } from 'react-icons/hi'
import AnimatedSection from '../components/AnimatedSection'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/users/sendEmail`,
        formData
      );
      console.log("Form submitted:", response.data);

      setSubmitted(true);
      setMessage("Form submitted successfully!");
      setTimeout(() => {
        setMessage("");
        setSubmitted(false);
      }, 3000);

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("Failed to submit form. Try again.");
      setTimeout(() => setMessage(""), 3000);
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 bg-dark-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left info */}
          <AnimatedSection direction="left">
            <span className="section-label mb-4 inline-flex">Get In Touch</span>
            <h2 className="section-heading mt-4 mb-6">
              Let's Start Your <span className="neon-text">Next Project</span>
            </h2>
            <p className="text-text-secondary leading-relaxed mb-8">
              Ready to transform your digital presence? Drop us a message and we'll
              get back to you within 24 hours. No commitments, just a conversation
              about what's possible.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-text-secondary">
                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-neon-blue/10 text-neon-blue">
                  <HiMail size={20} />
                </div>
                <a href="mailto:studio@lumiiko.in">studio@lumiiko.in</a>
              </div>
            </div>

            {message && (
              <p className="mt-4 text-sm text-neon-blue">{message}</p>
            )}

            <div className="mt-8 p-6 rounded-2xl border border-dashed border-dark-border text-center">
              <p className="text-text-muted text-sm">📅 Prefer to schedule directly?</p>
              <p className="text-text-secondary text-sm mt-1">Calendar booking coming soon</p>
            </div>
          </AnimatedSection>

          {/* Form */}
          <AnimatedSection direction="right">
            <form onSubmit={handleSubmit} className="p-6 md:p-8 bento-card">
              <div className="space-y-5">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <HiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="John Doe"
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-dark border border-dark-border text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/20 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                    Your Email
                  </label>
                  <div className="relative">
                    <HiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="john@example.com"
                      className="w-full pl-11 pr-4 py-3 rounded-xl bg-dark border border-dark-border text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/20 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-text-secondary mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell us about your project..."
                    className="w-full px-4 py-3 rounded-xl bg-dark border border-dark-border text-text-primary placeholder:text-text-muted/50 focus:outline-none focus:border-neon-blue/50 focus:ring-1 focus:ring-neon-blue/20 transition-all resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-3.5">
                  <span className="flex items-center gap-2">
                    {submitted ? '✓ Message Sent!' : 'Send Message'}
                    {!submitted && <HiPaperAirplane />}
                  </span>
                </button>
              </div>
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}