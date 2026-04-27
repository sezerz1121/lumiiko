import { HiOutlineCode, HiOutlineColorSwatch, HiOutlineSparkles, HiOutlineCursorClick } from 'react-icons/hi'
import AnimatedSection from '../components/AnimatedSection'

const services = [
    {
        icon: HiOutlineColorSwatch,
        title: 'Web Design',
        desc: 'Stunning, conversion-optimized designs that make your brand unforgettable. Every pixel crafted with purpose.',
    },
    {
        icon: HiOutlineCode,
        title: 'Web Development',
        desc: 'Lightning-fast, scalable web applications built with modern tech stacks. Performance isn\'t optional—it\'s standard.',
    },
    {
        icon: HiOutlineSparkles,
        title: 'Branding',
        desc: 'Bold brand identities that command attention and build lasting trust. From strategy to visual language.',
    },
    {
        icon: HiOutlineCursorClick,
        title: 'UI/UX Design',
        desc: 'Intuitive experiences that delight users and drive conversions. Research-backed, data-informed, user-first.',
    },
]

export default function Services() {
    return (
        <section id="services" className="relative py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <span className="section-label mb-4 inline-flex">What We Do</span>
                    <h2 className="section-heading mt-4">
                        Services That <span className="neon-text">Drive Results</span>
                    </h2>
                    <p className="section-subheading mx-auto mt-5">
                        We don't just build websites—we engineer digital experiences that convert visitors into customers and ideas into revenue.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, i) => (
                        <AnimatedSection key={service.title} delay={i * 0.1}>
                            <div className="group relative h-full p-6 bento-card bento-card-blue cursor-default">

                                <div className="relative z-10">
                                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-neon-blue/10 text-neon-blue mb-5 group-hover:neon-glow transition-all duration-300">
                                        <service.icon size={24} />
                                    </div>
                                    <h3 className="text-lg font-heading font-600 mb-3 group-hover:text-neon-blue transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
