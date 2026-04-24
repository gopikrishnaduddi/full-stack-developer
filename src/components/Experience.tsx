import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const experiences = [
  {
    company: 'Dalvkot Utility Enterprises Pvt. Ltd.',
    role: 'Full Stack Developer',
    duration: 'Sep 2025 – Present',
    location: 'Bengaluru, Karnataka, India',
    type: 'Full-time',
    color: '#00d4ff',
    current: true,
    highlights: [
      'Led frontend architecture for Dcode — a full-scale e-commerce platform with React.js',
      'Engineered secure RESTful APIs with Node.js & Express.js for auth, products, orders & payments',
      'Built & deployed Campus Management System (CMS) for Vydehi & MVJ Medical Colleges',
      'Designed data layers using MongoDB & MySQL with optimized indexing and queries',
      'Implemented role-based access control, validation, and robust error handling',
      'Participated in Agile/Scrum sprints, standups, and peer code reviews',
    ],
    stack: ['React.js', 'Angular', 'Node.js', 'Express.js', 'MongoDB', 'MySQL', 'Git'],
  },
  {
    company: 'Olga Technologies Pvt. Ltd.',
    role: 'Full Stack Developer',
    duration: 'Jun 2024 – Nov 2024',
    location: 'Hyderabad, Telangana, India',
    type: 'Full-time',
    color: '#7b2fff',
    current: false,
    highlights: [
      'Developed enterprise web applications for Hitachi using React.js, Angular, Node.js',
      'Built responsive, accessible frontend interfaces ensuring cross-browser compatibility',
      'Created secure backend services with REST APIs for data processing & authentication',
      'Optimized MongoDB & MySQL performance via schema design and query tuning',
      'Maintained clean code standards and version control using Git & GitHub',
    ],
    stack: ['React.js', 'Angular', 'Node.js', 'Express.js', 'MongoDB', 'MySQL'],
  },
  {
    company: 'Netzary Infodynamics',
    role: 'Frontend Developer Intern',
    duration: 'Apr 2024 – Jun 2024',
    location: 'Bengaluru, Karnataka, India',
    type: 'Internship',
    color: '#00fff5',
    current: false,
    highlights: [
      'Designed & developed websites for Sangeetha Mobiles and Pai Mobiles',
      'Implemented responsive layouts using HTML5, CSS3, and JavaScript',
      'Built reusable, modular UI components in Angular and React.js',
      'Integrated frontend with backend APIs for dynamic product listings',
      'Followed clean code standards and Git best practices',
    ],
    stack: ['Angular', 'React.js', 'HTML5', 'CSS3', 'JavaScript', 'Git'],
  },
];

function ExperienceCard({ exp, index, inView }: { exp: typeof experiences[0]; index: number; inView: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.2 }}
      className="relative"
    >
      {/* Timeline dot */}
      <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 z-10 items-center justify-center">
        <div
          className="w-4 h-4 rounded-full border-2 pulse-neon"
          style={{ borderColor: exp.color, background: `${exp.color}30` }}
        />
      </div>

      {/* Card layout alternates left/right on desktop */}
      <div className={`lg:grid lg:grid-cols-2 lg:gap-12 ${index % 2 === 0 ? '' : 'direction-rtl'}`}>
        <div className={`${index % 2 !== 0 ? 'lg:col-start-2' : ''}`}>
          <div className="exp-card glass-card rounded-2xl p-6 ml-0 lg:ml-0 hover:scale-[1.01] transition-all duration-300 relative overflow-hidden">
            {/* Top accent bar */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5"
              style={{ background: `linear-gradient(90deg, transparent, ${exp.color}, transparent)` }}
            />

            {/* Header */}
            <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  {exp.current && (
                    <span className="px-2 py-0.5 rounded text-xs font-orbitron font-bold text-black"
                      style={{ background: exp.color }}>
                      CURRENT
                    </span>
                  )}
                  <span className="px-2 py-0.5 rounded text-xs font-rajdhani font-semibold border"
                    style={{ color: exp.color, borderColor: `${exp.color}40` }}>
                    {exp.type}
                  </span>
                </div>
                <h3 className="font-orbitron text-lg font-bold text-white">{exp.role}</h3>
                <div className="font-rajdhani text-base font-semibold" style={{ color: exp.color }}>
                  {exp.company}
                </div>
              </div>
              <div className="text-right">
                <div className="font-orbitron text-xs text-gray-400">{exp.duration}</div>
                <div className="font-rajdhani text-xs text-gray-500 mt-1">📍 {exp.location}</div>
              </div>
            </div>

            {/* Highlights */}
            <ul className="space-y-2 mb-5">
              {exp.highlights.map((h, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-400 font-rajdhani text-sm">
                  <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: exp.color }} />
                  <span>{h}</span>
                </li>
              ))}
            </ul>

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2">
              {exp.stack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-0.5 rounded text-xs font-rajdhani font-semibold"
                  style={{
                    background: `${exp.color}10`,
                    border: `1px solid ${exp.color}30`,
                    color: exp.color,
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="experience" className="relative py-24 overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #020408 0%, #060d18 50%, #020408 100%)' }}
      />
      <div className="grid-overlay opacity-50" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, #00d4ff, transparent)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-3">// WORK HISTORY</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            MY <span className="gradient-text">EXPERIENCE</span>
          </h2>
          <div className="section-divider w-64 mx-auto" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-px h-full opacity-30"
            style={{ background: 'linear-gradient(180deg, #00d4ff, #7b2fff, #00fff5)' }}
          />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <ExperienceCard key={i} exp={exp} index={i} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
