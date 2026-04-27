import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import ProjectModal from '../components/ProjectModal'

const projects = [
  {
    title: 'Hale & Hearty',
    category: 'Web Development',
    image: 'ProjectImage/ourworkecommerce.png',
    gradient: '',
    description:
      'High-converting single-product Shopify store designed for maximum sales, optimized checkout flow, and seamless user experience.',
    tech: ['Shopify'],
    url: 'https://myhalenhearty.com/', // 👈 add your real URL
  },
  {
    title: 'HC Wrld',
    category: 'Web Development',
    image: 'ProjectImage/ourworkwaitlist.png',
    gradient: '',
    description:
      'Scalable headless ecommerce platform for a streetwear brand, delivering lightning-fast performance, dynamic UX, and full customization.',
    tech: ['Shopify Headless', 'React', 'GraphQL'],
    url: 'https://hcwrld.in',
  },
  {
    title: 'Reliant Networks',
    category: 'Web Development',
    image: 'ProjectImage/ourworkIT.png',
    gradient: '',
    description:
      'Professional Webflow website for a UK-based IT company, built to establish authority, improve lead generation, and communicate services clearly.',
    tech: ['Webflow'],
    url: 'https://www.reliant-networks.co.uk/',
  },
]

export default function Projects() {
  const [selected, setSelected] = useState(null)

  return (
    <section id="projects" className="relative py-24 md:py-32 bg-dark-light/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="text-center mb-16">
          <span className="section-label mb-4 inline-flex">Our Work</span>
          <h2 className="section-heading mt-4">
            Projects That <span className="neon-text">Speak Volumes</span>
          </h2>
          <p className="section-subheading mx-auto mt-5">
            Every project is a story of transformation. Here's how we've helped brands defy their limits.
          </p>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <AnimatedSection key={project.title} delay={i * 0.1}>
              <div
                className="group relative h-72 cursor-pointer bento-card overflow-hidden rounded-2xl"
                onClick={() => setSelected(project)}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-70`} />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500" />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4 text-center">
                  <span className="text-4xl md:text-5xl lg:text-6xl font-heading font-800 text-white/[0.06] select-none">
                    {project.title}
                  </span>
                </div>
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3 py-1 text-xs font-medium rounded-full glass text-text-secondary">
                    {project.category}
                  </span>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-heading font-700 mb-2 text-white">{project.title}</h3>
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <span className="text-sm text-neon-blue font-medium">View Case Study</span>
                    <span className="text-neon-blue">→</span>
                  </div>
                </div>
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-2xl bg-neon-blue" />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </section>
  )
}