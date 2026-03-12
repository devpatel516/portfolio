import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] },
});

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', description: '' });
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMsg, setErrorMsg] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.description.trim()) {
      setStatus('error');
      setErrorMsg('Please fill in all required fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('submitting');
    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || `New message from ${formData.name}`,
          message: formData.description,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ name: '', email: '', subject: '', description: '' });
    } catch (err) {
      setStatus('error');
      setErrorMsg(err?.text || err.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <section className="flex-grow flex flex-col justify-center py-16 px-5 sm:px-8 relative overflow-hidden">
      {/* Ambient */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,255,136,0.04) 0%, transparent 70%)' }}
        />
      </div>

      <div className="relative z-10 w-full max-w-2xl mx-auto">
        {/* Section label */}
        <motion.p {...fadeUp(0)} className="section-label mb-4">
          /get-in-touch
        </motion.p>

        {/* Heading block */}
        <motion.div {...fadeUp(0.06)} className="mb-10">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl tracking-tight text-[#E8EDF2] mb-3">
            Let's Talk<span style={{ color: 'var(--primary)' }}>.</span>
          </h1>
          <p className="font-mono text-xs text-[#4A5568] leading-relaxed">
            Have a project in mind or want to explore collaboration? Leave a message —
            I'll respond within 24 hours.
          </p>
        </motion.div>

        {/* ── Form card ── */}
        <motion.div {...fadeUp(0.12)} className="card p-7 sm:p-9">
          {/* Success banner */}
          {status === 'success' && (
            <div
              className="flex items-start gap-3 px-4 py-3 rounded-sm mb-6 font-mono text-xs"
              style={{ background: 'rgba(0,255,136,0.06)', border: '1px solid rgba(0,255,136,0.2)', color: 'var(--primary)' }}
              role="alert"
            >
              <span className="material-symbols-outlined text-[16px] mt-0.5">check_circle</span>
              <span>Message sent! I'll get back to you soon.</span>
            </div>
          )}

          {/* Error banner */}
          {status === 'error' && (
            <div
              className="flex items-start gap-3 px-4 py-3 rounded-sm mb-6 font-mono text-xs"
              style={{ background: 'rgba(255,80,80,0.06)', border: '1px solid rgba(255,80,80,0.2)', color: '#FF5050' }}
              role="alert"
            >
              <span className="material-symbols-outlined text-[16px] mt-0.5">error</span>
              <span>{errorMsg}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1.5">
                <label htmlFor="name" className="font-mono text-[10px] tracking-widest uppercase text-[#4A5568]">
                  Name <span style={{ color: 'var(--primary)' }}>*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="field"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label htmlFor="email" className="font-mono text-[10px] tracking-widest uppercase text-[#4A5568]">
                  Email <span style={{ color: 'var(--primary)' }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="field"
                />
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="subject" className="font-mono text-[10px] tracking-widest uppercase text-[#4A5568]">
                Subject <span className="normal-case text-[#253040]">(optional)</span>
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's on your mind?"
                className="field"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col gap-1.5">
              <label htmlFor="description" className="font-mono text-[10px] tracking-widest uppercase text-[#4A5568]">
                Message <span style={{ color: 'var(--primary)' }}>*</span>
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Your message here..."
                className="field resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              id="contact-submit-btn"
              disabled={status === 'submitting'}
              className="btn-primary justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <div className="w-4 h-4 border-2 border-[#080C10]/30 border-t-[#080C10] rounded-full animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[16px]">send</span>
                  Send Message
                </>
              )}
            </button>
          </form>
        </motion.div>

        {/* Quick links under form */}
        <motion.div
          {...fadeUp(0.2)}
          className="mt-6 flex items-center justify-center gap-6"
        >
          <a
            href="https://www.linkedin.com/in/dev-patel-862458288/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-[#4A5568] hover:text-[var(--primary)] transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[14px]">link</span>
            LinkedIn
          </a>
          <span className="text-[#1C242E]">·</span>
          <a
            href="https://github.com/devpatel516"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] text-[#4A5568] hover:text-[var(--primary)] transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[14px]">code</span>
            GitHub
          </a>
          <span className="text-[#1C242E]">·</span>
          <a
            href="mailto:devpatel@example.com"
            className="font-mono text-[11px] text-[#4A5568] hover:text-[var(--primary)] transition-colors flex items-center gap-1.5"
          >
            <span className="material-symbols-outlined text-[14px]">mail</span>
            Email
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
