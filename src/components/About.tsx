import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const stats = [
  { value: '1+', label: 'Years Experience', icon: '⚡' },
  { value: '5+', label: 'Projects Delivered', icon: '🚀' },
  { value: '3+', label: 'Companies Served', icon: '🏢' },
  { value: '2', label: 'Medical Colleges Deployed', icon: '🏥' },
];

const highlights = [
  { icon: '🎯', title: 'MERN Stack Expert', desc: 'End-to-end application development with MongoDB, Express.js, React.js, Node.js' },
  { icon: '⚙️', title: 'API Architect', desc: 'Designed and implemented RESTful APIs for secure, efficient frontend-backend communication' },
  { icon: '📱', title: 'Responsive Design', desc: 'Cross-browser compatible, mobile-first UI with React and Angular' },
  { icon: '🗄️', title: 'Database Expert', desc: 'SQL & NoSQL — schema design, query optimization, indexing strategies' },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="relative py-24 overflow-hidden" ref={ref}>
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #020408 0%, #040c1a 50%, #020408 100%)' }}
      />
      <div className="grid-overlay opacity-50" />

      {/* Glow blobs */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent)' }} />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full opacity-5"
        style={{ background: 'radial-gradient(circle, #7b2fff, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-3">// WHO AM I</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            ABOUT <span className="gradient-text">ME</span>
          </h2>
          <div className="section-divider w-64 mx-auto" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — Profile image + stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col items-center gap-8"
          >
            {/* Profile Image */}
            <div className="relative">
              <div
                className="w-64 h-64 rounded-2xl overflow-hidden relative corner-tl corner-br"
                style={{
                  border: '1px solid rgba(0,212,255,0.3)',
                  boxShadow: '0 0 30px rgba(0,212,255,0.2)',
                }}
              >
                <img src="/images/profile.jpg" alt="Gopi Krishna" className="w-full h-full object-cover" />
                <div className="absolute inset-0 holo-effect" />
              </div>

              {/* Experience badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-4 -right-4 glass-card neon-border px-4 py-3 rounded-xl"
              >
                <div className="font-orbitron text-2xl font-black gradient-text">1+</div>
                <div className="font-rajdhani text-xs text-gray-400 tracking-wider">YRS EXP</div>
              </motion.div>

              {/* Tech badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                className="absolute -top-4 -left-4 glass-card neon-border-purple px-4 py-3 rounded-xl"
              >
                <div className="font-orbitron text-sm font-black text-[#7b2fff]">MERN</div>
                <div className="font-rajdhani text-xs text-gray-400 tracking-wider">STACK</div>
              </motion.div>
            </div>

            {/* Stats grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="glass-card rounded-xl p-4 text-center hover:neon-border transition-all duration-300"
                >
                  <div className="text-2xl mb-1">{stat.icon}</div>
                  <div className="font-orbitron text-2xl font-black gradient-text">{stat.value}</div>
                  <div className="font-rajdhani text-xs text-gray-400 tracking-wide mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Bio + highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-6"
          >
            <div>
              <p className="font-rajdhani text-lg text-gray-300 leading-relaxed mb-4">
                I'm a <span className="text-[#00d4ff] font-semibold">Full Stack Developer</span> with over 1 year of 
                professional experience building end-to-end web applications. I specialize in the 
                <span className="text-[#7b2fff] font-semibold"> MERN stack</span> and deliver scalable, 
                user-centric solutions that bridge design and technology.
              </p>
              <p className="font-rajdhani text-lg text-gray-300 leading-relaxed mb-4">
                Currently at <span className="text-[#00d4ff] font-semibold">Dalvkot Utility Enterprises</span>, 
                I architect full-scale platforms including <span className="font-semibold text-white">Dcode</span> 
                (an e-commerce platform) and a <span className="font-semibold text-white">Campus Management System</span> 
                deployed at Vydehi and MVJ Medical Colleges.
              </p>
              <p className="font-rajdhani text-lg text-gray-300 leading-relaxed">
                I thrive in Agile environments, collaborating cross-functionally to translate business 
                requirements into robust technical solutions — delivered on schedule.
              </p>
            </div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 }}
              className="glass-card rounded-xl p-5 neon-border"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">🎓</span>
                <div>
                  <div className="font-orbitron text-sm font-bold text-white">B.Tech — Computer Science & Engineering</div>
                  <div className="font-rajdhani text-sm text-[#00d4ff]">Amrita Vishwa Vidyapeetham  |  2019 – 2023</div>
                </div>
              </div>
            </motion.div>

            {/* Highlights grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.7 + i * 0.1 }}
                  className="glass-card rounded-xl p-4 group hover:neon-border transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{h.icon}</div>
                  <div className="font-rajdhani text-sm font-bold text-white mb-1">{h.title}</div>
                  <div className="font-rajdhani text-xs text-gray-400 leading-relaxed">{h.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
