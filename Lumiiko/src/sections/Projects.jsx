import { useState } from 'react'
import AnimatedSection from '../components/AnimatedSection'
import ProjectModal from '../components/ProjectModal'

const projects = [
    {
        title: 'Nexus Finance',
        category: 'Web Design',
        color: '#0a1628',
        gradient: 'from-blue-900/60 to-indigo-900/60',
        description:
            'Redesigned the entire digital presence for a fintech startup, increasing conversion rates by 340% and reducing bounce rates by 60%.',
        tech: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS'],
    },
    {
        title: 'Aether Studio',
        category: 'Branding',
        color: '#1a0a28',
        gradient: 'from-purple-900/60 to-pink-900/60',
        description:
            'Complete brand overhaul for a creative agency—logo, visual identity, website, and brand guidelines that tripled their inbound leads.',
        tech: ['Figma', 'Illustrator', 'After Effects', 'Webflow'],
    },
    {
        title: 'Velocity SaaS',
        category: 'Web Development',
        color: '#0a2818',
        gradient: 'from-emerald-900/60 to-teal-900/60',
        description:
            'Built a high-performance SaaS dashboard handling 100k+ daily users with real-time data visualization and sub-200ms load times.',
        tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    },
    {
        title: 'Lumina Fashion',
        category: 'UI/UX Design',
        color: '#28180a',
        gradient: 'from-amber-900/60 to-orange-900/60',
        description:
            'Crafted an immersive e-commerce experience for a luxury fashion brand, resulting in a 280% increase in average session duration.',
        tech: ['Figma', 'Protopie', 'React', 'GSAP'],
    },
    {
        title: 'Pulse Health',
        category: 'Web Design',
        color: '#0a1a28',
        gradient: 'from-cyan-900/60 to-blue-900/60',
        description:
            'Designed and developed a healthcare platform that simplified patient onboarding and increased appointment bookings by 200%.',
        tech: ['Next.js', 'Tailwind CSS', 'Prisma', 'Vercel'],
    },
    {
        title: 'Orbit Crypto',
        category: 'Web Development',
        color: '#1a0a1a',
        gradient: 'from-violet-900/60 to-fuchsia-900/60',
        description:
            'Built a real-time crypto trading interface with live charts, portfolio tracking, and seamless wallet integration for 50k+ users.',
        tech: ['React', 'WebSocket', 'D3.js', 'Node.js'],
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
                                className="group relative h-72 cursor-pointer bento-card bento-card-gradient"
                                onClick={() => setSelected(project)}
                            >
                                {/* Background */}
                                <div className="absolute inset-0 flex items-center justify-center pointer-events-none px-4 text-center">
                                    <span className="text-4xl md:text-5xl lg:text-6xl font-heading font-800 text-white/[0.04] select-none">
                                        {project.title}
                                    </span>
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500" />

                                {/* Category badge */}
                                <div className="absolute top-4 left-4 z-10">
                                    <span className="px-3 py-1 text-xs font-medium rounded-full glass text-text-secondary">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Bottom info */}
                                <div className="absolute bottom-0 left-0 right-0 p-5 z-10 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                                    <h3 className="text-xl font-heading font-700 mb-2">{project.title}</h3>
                                    <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                        <span className="text-sm text-neon-blue font-medium">View Case Study</span>
                                        <span className="text-neon-blue">→</span>
                                    </div>
                                </div>

                                {/* Corner glow on hover */}
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
