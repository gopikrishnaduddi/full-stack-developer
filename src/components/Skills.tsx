import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: '🖥️',
    color: '#00d4ff',
    skills: [
      { name: 'React.js', level: 92 },
      { name: 'Angular', level: 85 },
      { name: 'JavaScript', level: 90 },
      { name: 'HTML5 / CSS3', level: 95 },
      { name: 'Responsive UI', level: 92 },
    ],
  },
  {
    title: 'Backend Development',
    icon: '⚙️',
    color: '#7b2fff',
    skills: [
      { name: 'Node.js', level: 88 },
      { name: 'Express.js', level: 87 },
      { name: 'RESTful APIs', level: 90 },
      { name: 'Auth & Security', level: 82 },
      { name: 'Middleware', level: 85 },
    ],
  },
  {
    title: 'Database Management',
    icon: '🗄️',
    color: '#00fff5',
    skills: [
      { name: 'MongoDB', level: 88 },
      { name: 'MySQL', level: 82 },
      { name: 'Query Optimization', level: 80 },
      { name: 'Schema Design', level: 85 },
      { name: 'Indexing', level: 80 },
    ],
  },
  {
    title: 'Tools & Others',
    icon: '🛠️',
    color: '#fda085',
    skills: [
      { name: 'Git / GitHub', level: 90 },
      { name: 'Figma / UI Design', level: 78 },
      { name: 'Power BI', level: 72 },
      { name: 'WordPress', level: 80 },
      { name: 'Python', level: 75 },
    ],
  },
];

const allTechBadges = [
  'React.js', 'Angular', 'Node.js', 'Express.js', 'MongoDB', 'MySQL',
  'JavaScript', 'TypeScript', 'HTML5', 'CSS3', 'Python', 'Git',
  'GitHub', 'Figma', 'WordPress', 'Power BI', 'Tableau', 'JIRA',
  'REST APIs', 'Agile/Scrum', 'Shell Script', 'Confluence',
];

function SkillBar({ name, level, color, inView, delay }: { name: string; level: number; color: string; inView: boolean; delay: number }) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="font-rajdhani text-sm font-semibold text-gray-300">{name}</span>
        <span className="font-orbitron text-xs font-bold" style={{ color }}>{level}%</span>
      </div>
      <div className="h-1.5 bg-[rgba(255,255,255,0.05)] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay, ease: 'easeOut' }}
          className="h-full rounded-full"
          style={{ background: `linear-gradient(90deg, ${color}88, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" className="relative py-24 overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #020408 0%, #040c1a 50%, #020408 100%)' }}
      />
      <div className="grid-overlay opacity-50" />

      {/* BG glow */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full opacity-5 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7b2fff, transparent)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-3">// TECHNICAL ARSENAL</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            MY <span className="gradient-text">SKILLS</span>
          </h2>
          <div className="section-divider w-64 mx-auto" />
        </motion.div>

        {/* Skill categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: ci * 0.15 }}
              className="glass-card rounded-2xl p-6 hover:scale-[1.02] transition-all duration-300"
              style={{ borderColor: `${cat.color}20` }}
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center text-lg"
                  style={{ background: `${cat.color}15`, border: `1px solid ${cat.color}40` }}
                >
                  {cat.icon}
                </div>
                <div>
                  <div className="font-rajdhani text-xs font-bold tracking-widest uppercase" style={{ color: cat.color }}>
                    {cat.title}
                  </div>
                </div>
              </div>

              {/* Skill bars */}
              {cat.skills.map((skill, si) => (
                <SkillBar
                  key={si}
                  name={skill.name}
                  level={skill.level}
                  color={cat.color}
                  inView={inView}
                  delay={0.3 + ci * 0.1 + si * 0.08}
                />
              ))}
            </motion.div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="glass-card rounded-2xl p-8"
        >
          <p className="section-tag text-center mb-6">// TECHNOLOGIES & TOOLS</p>
          <div className="flex flex-wrap justify-center gap-3">
            {allTechBadges.map((badge, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.8 + i * 0.04 }}
                whileHover={{ scale: 1.1, y: -3 }}
                className="skill-badge px-4 py-2 rounded-full font-rajdhani text-sm font-semibold text-[#00d4ff] cursor-default"
              >
                {badge}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
