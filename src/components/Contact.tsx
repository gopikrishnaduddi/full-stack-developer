import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const contactInfo = [
  {
    icon: '✉',
    label: 'Email',
    value: 'gopikrishnaduddi123@gmail.com',
    href: 'mailto:gopikrishnaduddi123@gmail.com',
    color: '#00d4ff',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+91 9182237394',
    href: 'tel:+919182237394',
    color: '#7b2fff',
  },
  {
    icon: '📍',
    label: 'Location',
    value: 'Bengaluru, India',
    href: '#',
    color: '#00fff5',
  },
];

const socialLinks = [
  { label: 'LinkedIn', icon: '💼', href: 'https://linkedin.com', color: '#0077B5' },
  { label: 'GitHub', icon: '🐙', href: 'https://github.com', color: '#6e40c9' },
  { label: 'Portfolio', icon: '🌐', href: '#', color: '#00d4ff' },
];

export default function Contact() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="relative py-24 overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #020408 0%, #060d18 50%, #020408 100%)' }}
      />
      <div className="grid-overlay opacity-50" />

      {/* Glow blobs */}
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }} />
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7b2fff, transparent)' }} />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-3">// GET IN TOUCH</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            CONTACT <span className="gradient-text">ME</span>
          </h2>
          <div className="section-divider w-64 mx-auto mb-4" />
          <p className="font-rajdhani text-gray-400 text-lg max-w-xl mx-auto">
            Have a project in mind or want to collaborate? Let's build something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Left — Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-orbitron text-xl font-bold text-white mb-2">Let's Connect</h3>
              <p className="font-rajdhani text-gray-400 leading-relaxed">
                I'm currently open to new opportunities and exciting projects. Whether you have a 
                question or just want to say hi, my inbox is always open!
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  whileHover={{ x: 6, scale: 1.01 }}
                  className="flex items-center gap-4 glass-card rounded-xl p-4 group transition-all duration-300"
                  style={{ textDecoration: 'none' }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: `${item.color}15`, border: `1px solid ${item.color}30` }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-rajdhani text-xs tracking-widest uppercase text-gray-500 mb-0.5">{item.label}</div>
                    <div className="font-rajdhani text-sm font-semibold text-white group-hover:text-[#00d4ff] transition-colors break-all">
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8 }}
            >
              <p className="section-tag mb-4">// FIND ME ONLINE</p>
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex flex-col items-center gap-2 glass-card px-6 py-4 rounded-xl neon-border group"
                  >
                    <span className="text-2xl">{social.icon}</span>
                    <span className="font-rajdhani text-xs font-semibold text-gray-400 group-hover:text-[#00d4ff] transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Available status */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 1 }}
              className="glass-card rounded-xl p-5 neon-border"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                <span className="font-orbitron text-sm font-bold text-green-400">AVAILABLE FOR OPPORTUNITIES</span>
              </div>
              <p className="font-rajdhani text-sm text-gray-400">
                Open to full-time roles, freelance projects, and collaborations in Full Stack Web Development.
              </p>
            </motion.div>
          </motion.div>

          {/* Right — Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-8 space-y-5 neon-border relative overflow-hidden">
              {/* Form top accent */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent" />

              <h3 className="font-orbitron text-lg font-bold text-white mb-2">Send a Message</h3>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-rajdhani text-xs tracking-widest uppercase text-gray-400 mb-1.5 block">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="form-input w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>
                <div>
                  <label className="font-rajdhani text-xs tracking-widest uppercase text-gray-400 mb-1.5 block">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="form-input w-full px-4 py-3 rounded-xl text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="font-rajdhani text-xs tracking-widest uppercase text-gray-400 mb-1.5 block">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Collaboration"
                  className="form-input w-full px-4 py-3 rounded-xl text-sm"
                />
              </div>

              <div>
                <label className="font-rajdhani text-xs tracking-widest uppercase text-gray-400 mb-1.5 block">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="form-input w-full px-4 py-3 rounded-xl text-sm resize-none"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full btn-primary py-4 rounded-xl font-orbitron text-sm text-white font-bold tracking-widest"
              >
                <span>{submitted ? '✓ MESSAGE SENT!' : 'SEND MESSAGE'}</span>
              </motion.button>

              {submitted && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center font-rajdhani text-green-400 text-sm"
                >
                  Thanks for reaching out! I'll get back to you soon. 🚀
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
