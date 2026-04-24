
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

function StarField() {
  const stars = Array.from({ length: 120 }, (_, i) => ({
    id: i,
    size: Math.random() * 2 + 0.5,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 4,
  }));

  return (
    <div className="starfield">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
}

function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    size: Math.random() * 4 + 2,
    x: Math.random() * 100,
    duration: Math.random() * 15 + 10,
    delay: Math.random() * 10,
  }));

  return (
    <>
      {particles.map((p) => (
        <div
          key={p.id}
          className="particle"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}%`,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}
    </>
  );
}

function AvatarSection() {
  return (
    <div className="relative flex items-center justify-center" style={{ width: 340, height: 340 }}>
      {/* Outer rotating ring */}
      <div
        className="absolute rounded-full border border-[rgba(0,212,255,0.3)] rotate-ring"
        style={{ width: 320, height: 320 }}
      >
        <div
          className="absolute w-3 h-3 rounded-full bg-[#00d4ff] pulse-neon"
          style={{ top: '50%', left: '-6px', marginTop: '-6px' }}
        />
      </div>

      {/* Middle rotating ring reverse */}
      <div
        className="absolute rounded-full border border-dashed border-[rgba(123,47,255,0.4)] rotate-ring-reverse"
        style={{ width: 270, height: 270 }}
      >
        <div
          className="absolute w-2 h-2 rounded-full bg-[#7b2fff]"
          style={{ top: '-4px', left: '50%', marginLeft: '-4px' }}
        />
      </div>

      {/* Inner glow ring */}
      <div
        className="absolute rounded-full"
        style={{
          width: 220,
          height: 220,
          background: 'radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)',
          boxShadow: '0 0 40px rgba(0,212,255,0.2), 0 0 80px rgba(0,212,255,0.1)',
        }}
      />

      {/* Avatar image */}
      <motion.div
        className="relative z-10 float-animation"
        style={{ width: 200, height: 200 }}
      >
        <div
          className="w-full h-full rounded-full overflow-hidden"
          style={{
            border: '2px solid rgba(0,212,255,0.5)',
            boxShadow: '0 0 30px rgba(0,212,255,0.3), 0 0 60px rgba(0,212,255,0.1)',
          }}
        >
          <img
            src="/images/avatar.png"
            alt="Gopi Krishna Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Scan line over avatar */}
        <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
          <div className="scanline" />
        </div>
      </motion.div>

      {/* Orbit dots */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div style={{ position: 'absolute', width: 0, height: 0 }}>
          <div
            className="absolute w-3 h-3 rounded-full bg-[#00fff5]"
            style={{
              boxShadow: '0 0 8px #00fff5',
              animation: 'orbit 4s linear infinite',
            }}
          />
          <div
            className="absolute w-2 h-2 rounded-full bg-[#7b2fff]"
            style={{
              boxShadow: '0 0 8px #7b2fff',
              animation: 'orbitReverse 6s linear infinite',
            }}
          />
        </div>
      </div>

      {/* Status badge */}
      <motion.div
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex items-center gap-2 bg-[rgba(6,13,24,0.9)] px-4 py-1.5 rounded-full neon-border">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="font-rajdhani text-xs font-semibold text-green-400 tracking-wider">AVAILABLE FOR HIRE</span>
        </div>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #020408 0%, #040c1a 40%, #060818 70%, #020408 100%)',
      }}
    >
      {/* Hero bg image overlay */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: 'url(/images/hero-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <StarField />
      <div className="grid-overlay" />

      {/* Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Particles />
      </div>

      {/* Radial glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: '60vw',
          height: '60vw',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          background: 'radial-gradient(circle, rgba(0,212,255,0.05) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-12 flex flex-col lg:flex-row items-center justify-between gap-12 w-full">
        {/* Left content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
          className="flex-1 max-w-2xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-8 bg-[#00d4ff]" />
            <span className="section-tag">Full Stack Developer</span>
            <div className="h-px w-8 bg-[#00d4ff]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="font-orbitron text-5xl md:text-6xl lg:text-7xl font-black mb-4 leading-tight"
          >
            <span className="text-white">GOPI</span>
            <br />
            <span className="gradient-text">KRISHNA</span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="font-rajdhani text-xl md:text-2xl text-gray-300 mb-6 h-8"
          >
            <TypeAnimation
              sequence={[
                'MERN Stack Developer',
                2000,
                'React.js Specialist',
                2000,
                'Node.js Engineer',
                2000,
                'Angular Developer',
                2000,
                'UI/UX Implementor',
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              style={{ color: '#00d4ff' }}
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl"
          >
            Building scalable, user-centric web applications with the MERN stack.
            1+ year of experience crafting digital experiences that make an impact.
          </motion.p>

          {/* Info pills */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="flex flex-wrap gap-3 mb-8"
          >
            {[
              { icon: '📍', text: 'Bengaluru, India' },
              { icon: '🎓', text: 'B.Tech CSE — Amrita' },
              { icon: '💼', text: '1+ Year Experience' },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 glass-card px-4 py-2 rounded-full">
                <span className="text-sm">{item.icon}</span>
                <span className="font-rajdhani text-sm text-gray-300 font-medium">{item.text}</span>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-primary px-8 py-3 rounded font-orbitron text-xs text-white font-bold tracking-widest"
            >
              <span>CONTACT ME</span>
            </motion.a>
            <motion.a
              href="#experience"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 rounded font-orbitron text-xs font-bold tracking-widest text-[#00d4ff] neon-border transition-all duration-300 hover:bg-[rgba(0,212,255,0.1)]"
            >
              VIEW WORK
            </motion.a>
          </motion.div>

          {/* Contact info row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3 }}
            className="flex flex-wrap gap-6 mt-8 text-sm text-gray-500"
          >
            <a href="mailto:gopikrishnaduddi123@gmail.com" className="flex items-center gap-2 hover:text-[#00d4ff] transition-colors">
              <span className="text-[#00d4ff]">✉</span> gopikrishnaduddi123@gmail.com
            </a>
            <a href="tel:+919182237394" className="flex items-center gap-2 hover:text-[#00d4ff] transition-colors">
              <span className="text-[#00d4ff]">📞</span> +91 9182237394
            </a>
          </motion.div>
        </motion.div>

        {/* Right: Avatar */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }}
          className="flex-shrink-0"
        >
          <AvatarSection />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-rajdhani text-xs tracking-widest text-gray-500 uppercase">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-12 bg-gradient-to-b from-[#00d4ff] to-transparent"
        />
      </motion.div>
    </section>
  );
}
