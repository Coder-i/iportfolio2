import React, { useRef, useState } from 'react';
import { toast, Toaster } from 'react-hot-toast';
import { FaUser, FaEnvelope, FaGithub, FaRegCommentDots } from 'react-icons/fa';

const ContactForm = () => {
  const form = useRef(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendForm = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(form.current);

    try {
      const response = await fetch('https://getform.io/f/bwnnpjna', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success('Message sent successfully!');
        if (form.current) form.current.reset();
      } else {
        toast.error('Failed to send message. Please try again.');
      }
    } catch (error) {
      toast.error('An error occurred. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="container mx-auto px-4 py-20 text-white">
      <Toaster position="top-right" />
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
        <span className="text-primary">Get in</span>{' '}
        <span className="text-secondary">Touch</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
        {/* GIF Side */}
        <div className="hidden md:flex justify-center items-center">
          <img
            src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNmQ3MzBiYTNiOTZhNGQ5NjBkYzBiYjg4YzM5ZWJjYjM5ZmY1NjM3YiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/dMLmQfCO7lCA2gX3tw/giphy.gif"
            alt="Waving Animation"
            className="rounded-lg shadow-2xl w-96 h-96 object-cover"
          />
        </div>

        {/* Form Side */}
        <div className="card bg-base-200/30 backdrop-blur-sm shadow-xl">
          <form ref={form} onSubmit={sendForm} className="card-body space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text text-white flex items-center gap-2">
                  <FaUser className="w-4 h-4" /> Name
                </span>
              </label>
              <input
                type="text"
                name="user_name"
                required
                className="input input-bordered bg-base-100/50"
                placeholder="John"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white flex items-center gap-2">
                  <FaUser className="w-4 h-4" /> Surname
                </span>
              </label>
              <input
                type="text"
                name="user_surname"
                required
                className="input input-bordered bg-base-100/50"
                placeholder="Doe"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white flex items-center gap-2">
                  <FaEnvelope className="w-4 h-4" /> Email
                </span>
              </label>
              <input
                type="email"
                name="user_email"
                required
                className="input input-bordered bg-base-100/50"
                placeholder="john@example.com"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white flex items-center gap-2">
                  <FaGithub className="w-4 h-4" /> GitHub ID (Optional)
                </span>
              </label>
              <input
                type="text"
                name="user_github"
                className="input input-bordered bg-base-100/50"
                placeholder="johndoe"
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text text-white flex items-center gap-2">
                  <FaRegCommentDots className="w-4 h-4" /> Message
                </span>
              </label>
              <textarea
                name="message"
                required
                className="textarea textarea-bordered bg-base-100/50 h-32"
                placeholder="Your message here..."
              ></textarea>
            </div>

            <div className="form-control mt-6">
              <button
                type="submit"
                className={`btn btn-primary hover:btn-accent ${isSubmitting ? 'loading' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
