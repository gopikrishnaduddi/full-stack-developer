import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const projects = [
  {
    title: 'Dcode — E-Commerce Platform',
    subtitle: 'Full Stack E-Commerce Solution',
    description:
      'Led end-to-end development of a full-scale e-commerce platform. Engineered dynamic product catalogs, cart management, checkout workflows, and payment integrations with optimized UI interactions.',
    color: '#00d4ff',
    icon: '🛒',
    gradient: 'from-[rgba(0,212,255,0.1)] to-[rgba(0,212,255,0.02)]',
    tags: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'RESTful APIs', 'JWT Auth'],
    features: [
      'Dynamic product catalog & search',
      'Cart management & checkout flow',
      'Secure payment integration',
      'Role-based admin dashboard',
      'Order tracking & management',
    ],
    status: 'Production',
    company: 'Dalvkot Utility Enterprises',
  },
  {
    title: 'Campus Management System',
    subtitle: 'Academic & Administrative Platform',
    description:
      'Built and deployed a comprehensive CMS for medical colleges managing student records, staff data, attendance, academic workflows, and administrative operations.',
    color: '#7b2fff',
    icon: '🏥',
    gradient: 'from-[rgba(123,47,255,0.1)] to-[rgba(123,47,255,0.02)]',
    tags: ['Node.js', 'MongoDB', 'Express.js', 'React.js', 'RBAC', 'MySQL'],
    features: [
      'Student data & record management',
      'Staff & attendance tracking',
      'Role-based access control',
      'Academic workflow automation',
      'Deployed at 2 medical colleges',
    ],
    status: 'Live — 2 Colleges',
    company: 'Dalvkot Utility Enterprises',
  },
  {
    title: 'Sangeetha Mobiles Website',
    subtitle: 'Retail E-Commerce Frontend',
    description:
      'Designed and developed a modern, responsive website for Sangeetha Mobiles using Angular and React.js, focusing on clean UI, smooth UX, and dynamic product listings.',
    color: '#00fff5',
    icon: '📱',
    gradient: 'from-[rgba(0,255,245,0.1)] to-[rgba(0,255,245,0.02)]',
    tags: ['Angular', 'React.js', 'HTML5', 'CSS3', 'JavaScript', 'REST APIs'],
    features: [
      'Responsive mobile-first design',
      'Dynamic product listings',
      'Smooth UX interactions',
      'Cross-browser compatible',
      'API-driven content sections',
    ],
    status: 'Delivered',
    company: 'Netzary Infodynamics',
  },
  {
    title: 'Pai Mobiles Website',
    subtitle: 'Retail Web Presence',
    description:
      'Built a responsive retail website for Pai Mobiles with modular UI components in Angular and React, integrated with backend APIs for dynamic content rendering.',
    color: '#fda085',
    icon: '🌐',
    gradient: 'from-[rgba(253,160,133,0.1)] to-[rgba(253,160,133,0.02)]',
    tags: ['React.js', 'Angular', 'JavaScript', 'CSS3', 'API Integration'],
    features: [
      'Product listing integration',
      'Reusable UI components',
      'Banner & promo sections',
      'Mobile-optimized layouts',
      'Clean code architecture',
    ],
    status: 'Delivered',
    company: 'Netzary Infodynamics',
  },
  {
    title: 'Hitachi Enterprise Dashboard',
    subtitle: 'Enterprise Business Workflow App',
    description:
      'Developed and maintained enterprise web applications for Hitachi at Olga Technologies, supporting business workflows with React.js, Angular, Node.js, and MySQL.',
    color: '#f6d365',
    icon: '⚡',
    gradient: 'from-[rgba(246,211,101,0.1)] to-[rgba(246,211,101,0.02)]',
    tags: ['React.js', 'Angular', 'Node.js', 'Express.js', 'MySQL', 'MongoDB'],
    features: [
      'Enterprise business workflows',
      'Secure REST API services',
      'Data processing pipelines',
      'Accessible responsive UI',
      'Performance optimized queries',
    ],
    status: 'Delivered',
    company: 'Olga Technologies (Hitachi)',
  },
];

export default function Projects() {
  const { ref, inView } = useInView({ threshold: 0.05, triggerOnce: true });

  return (
    <section id="projects" className="relative py-24 overflow-hidden" ref={ref}>
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(180deg, #020408 0%, #040c1a 50%, #020408 100%)' }}
      />
      <div className="grid-overlay opacity-50" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="section-tag mb-3">// WHAT I'VE BUILT</p>
          <h2 className="font-orbitron text-4xl md:text-5xl font-black text-white mb-4">
            MY <span className="gradient-text">PROJECTS</span>
          </h2>
          <div className="section-divider w-64 mx-auto" />
        </motion.div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className="project-card glass-card rounded-2xl overflow-hidden group cursor-default relative"
            >
              {/* Top glow bar */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-80"
                style={{ background: `linear-gradient(90deg, transparent, ${project.color}, transparent)` }}
              />

              {/* Gradient bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10 p-6">
                {/* Icon + Status */}
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                    style={{ background: `${project.color}15`, border: `1px solid ${project.color}30` }}
                  >
                    {project.icon}
                  </div>
                  <span
                    className="px-2.5 py-1 rounded-full text-xs font-orbitron font-bold"
                    style={{ background: `${project.color}15`, color: project.color, border: `1px solid ${project.color}30` }}
                  >
                    {project.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-orbitron text-base font-bold text-white mb-1 group-hover:text-[#00d4ff] transition-colors">
                  {project.title}
                </h3>
                <p className="font-rajdhani text-xs font-semibold mb-3" style={{ color: project.color }}>
                  {project.subtitle}
                </p>
                <p className="font-rajdhani text-sm text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {project.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2 text-xs text-gray-400 font-rajdhani">
                      <span className="text-[#00d4ff] font-bold">›</span> {f}
                    </li>
                  ))}
                </ul>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.tags.map((tag, ti) => (
                    <span
                      key={ti}
                      className="px-2 py-0.5 text-xs font-rajdhani rounded"
                      style={{ background: `${project.color}10`, color: `${project.color}cc`, border: `1px solid ${project.color}20` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Company */}
                <div className="font-rajdhani text-xs text-gray-500 flex items-center gap-1">
                  <span>🏢</span> {project.company}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
