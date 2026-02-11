import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaWhatsapp, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = ({ isDarkMode }) => {
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const whatsappUrl = `https://wa.me/917995195537?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    const socialLinks = [
        { icon: <FaLinkedin />, url: "https://www.linkedin.com/in/tharunkumar0409", label: "LinkedIn", color: "text-blue-500" },
        { icon: <FaGithub />, url: "https://github.com/tkm0409", label: "GitHub", color: "text-gray-800 dark:text-white" },
        { icon: <FaEnvelope />, url: "mailto:m.tharunkumar0409@gmail.com", label: "Email", color: "text-red-500" },
    ];

    return (
        <section className="relative py-24 overflow-hidden bg-gray-50 dark:bg-black transition-colors duration-500">
            {/* Background Elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-overlay animate-pulse" />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-overlay animate-pulse delay-700" />
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column - Floating Contact Card */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="p-8 sm:p-10 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-white/20 rounded-3xl shadow-xl relative z-20">
                            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
                                Let's <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
                                    Collaborate
                                </span>
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 mb-10 leading-relaxed">
                                Have a project in mind or just want to chat about AI? I'm always open to discussing new ideas and opportunities.
                            </p>

                            <div className="space-y-6">
                                {socialLinks.map((link, idx) => (
                                    <motion.a
                                        key={idx}
                                        href={link.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-4 group p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 hover:bg-white dark:hover:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10 cursor-pointer"
                                        whileHover={{ x: 10 }}
                                    >
                                        <div className={`text-2xl ${link.color} transition-transform duration-300 group-hover:scale-110`}>
                                            {link.icon}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-gray-900 dark:text-white text-lg">{link.label}</h4>
                                            <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">Connect with me</p>
                                        </div>
                                        <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity text-primary-500">
                                            <FaPaperPlane className="transform -rotate-45" />
                                        </div>
                                    </motion.a>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Glassmorphic Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500 to-accent-500 rounded-3xl blur-2xl opacity-20 dark:opacity-40 -z-10" />

                        <div className="bg-white/70 dark:bg-gray-900/60 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 border border-white/50 dark:border-gray-700/50 shadow-2xl">
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-2">
                                <FaWhatsapp className="text-green-500 text-3xl" />
                                <span>Quick Chat on WhatsApp</span>
                            </h3>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label htmlFor="message" className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider ml-1">
                                        Your Message
                                    </label>
                                    <div className="relative group">
                                        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur"></div>
                                        <textarea
                                            id="message"
                                            rows="5"
                                            className="relative block w-full rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 p-4 text-base text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-transparent transition-all resize-none"
                                            placeholder="Hi Tharun, I'd like to discuss..."
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            required
                                        ></textarea>
                                    </div>
                                </div>

                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    type="submit"
                                    className="w-full py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold text-lg rounded-xl shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all flex items-center justify-center gap-3"
                                >
                                    <span>Send Message</span>
                                    <FaPaperPlane />
                                </motion.button>
                            </form>

                            <p className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400 font-medium">
                                Usually replies within a few hours
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
