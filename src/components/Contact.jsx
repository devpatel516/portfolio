import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        description: ''
    });
    const [status, setStatus] = useState('idle'); // idle, submitting, success, error
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic validation: Check for empty or whitespace-only fields
        if (!formData.name.trim() || !formData.email.trim() || !formData.description.trim()) {
            setStatus('error');
            setErrorMessage('Please fill in all required fields.');
            return;
        }

        // Email format validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email.trim())) {
            setStatus('error');
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        setStatus('submitting');

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject ? `Portfolio Contact: ${formData.subject}` : `New message from ${formData.name}`,
                message: formData.description
            };

            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            );

            setStatus('success');
            setFormData({ name: '', email: '', subject: '', description: '' });
        } catch (error) {
            console.error('Error sending message via EmailJS:', error);
            setStatus('error');
            setErrorMessage(error?.text || error.message || 'An error occurred while sending your message. Please verify your EmailJS configuration.');
        }
    };

    return (
        <section className="flex-grow flex flex-col justify-center relative overflow-hidden pt-8 pb-16">
            <div className="absolute inset-0 pointer-events-none z-0">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px]"></div>
                <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.1]" style={{ backgroundImage: 'radial-gradient(#39d353 1px, transparent 1px)', backgroundSize: '32px 32px' }}></div>
            </div>

            <div className="relative z-10 w-full max-w-2xl mx-auto px-4 sm:px-6">
                <div className="mb-10 flex items-center justify-between border-b border-github-border pb-4">
                    <h2 className="text-3xl font-display font-bold text-white flex items-center gap-3">
                        <span className="text-[var(--primary)] material-symbols-outlined text-4xl">mail</span>
                        Contact Me
                    </h2>
                </div>

                <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-8 relative overflow-hidden shadow-lg">
                    <p className="text-[#8b949e] mb-6">Have a question or want to work together? Leave a message below.</p>

                    {status === 'success' && (
                        <div className="mb-6 bg-green-500/10 border border-green-500/50 text-green-400 p-4 rounded-lg flex items-center gap-3">
                            <span className="material-symbols-outlined">check_circle</span>
                            <p>Message sent successfully! I'll get back to you soon.</p>
                        </div>
                    )}

                    {status === 'error' && (
                        <div className="mb-6 bg-red-500/10 border border-red-500/50 text-red-400 p-4 rounded-lg flex items-center gap-3">
                            <span className="material-symbols-outlined">error</span>
                            <p>{errorMessage}</p>
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium text-slate-300">Name *</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium text-slate-300">Email *</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
                                    placeholder="john@example.com"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject <span className="text-[#8b949e] font-normal">(Optional)</span></label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all"
                                placeholder="What is this regarding?"
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="description" className="text-sm font-medium text-slate-300">Description *</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                required
                                rows={5}
                                className="w-full bg-[#0d1117] border border-[#30363d] rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--primary)] focus:ring-1 focus:ring-[var(--primary)] transition-all resize-none"
                                placeholder="Your message here..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            disabled={status === 'submitting'}
                            className="w-full bg-[var(--primary)] hover:bg-[var(--primary-hover)] disabled:bg-[var(--primary)]/50 disabled:cursor-not-allowed text-white font-medium py-3 rounded-lg flex items-center justify-center gap-2 transition-colors border border-[rgba(240,246,252,0.1)]"
                        >
                            {status === 'submitting' ? (
                                <>
                                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <span className="material-symbols-outlined text-[18px]">send</span>
                                    Send Message
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
