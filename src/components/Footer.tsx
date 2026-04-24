import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-12 border-t border-[rgba(0,212,255,0.1)]">
      <div className="absolute inset-0" style={{ background: '#020408' }} />
      <div className="grid-overlay opacity-30" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="font-orbitron text-xl font-black gradient-text"
          >
            GK<span className="text-white">.</span>DEV
          </motion.div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
            {['Home', 'About', 'Skills', 'Experience', 'Projects', 'Contact'].map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-rajdhani text-sm text-gray-500 hover:text-[#00d4ff] transition-colors tracking-widest uppercase"
              >
                {link}
              </a>
            ))}
          </div>

          {/* Status */}
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="font-rajdhani text-xs text-gray-500">Available for Hire</span>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-8" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center">
          <p className="font-rajdhani text-sm text-gray-600">
            © {new Date().getFullYear()} <span className="text-[#00d4ff]">Gopi Krishna Duddi</span>. All rights reserved.
          </p>
          <p className="font-rajdhani text-xs text-gray-700">
            Built with React.js • TypeScript • Tailwind CSS • Framer Motion
          </p>
          <div className="flex items-center gap-2">
            <span className="font-rajdhani text-xs text-gray-700">📍 Bengaluru, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
