import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import AnimatedSection from '../components/AnimatedSection'

const stats = [
    { number: 50, suffix: '+', label: 'Projects Delivered' },
    { number: 100, suffix: '%', label: 'Client Satisfaction' },
    { number: 5, suffix: '+', label: 'Years Experience' },
    { number: 30, suffix: '+', label: 'Happy Clients' },
]

function AnimatedCounter({ target, suffix }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
        <span ref={ref} className="text-4xl md:text-5xl font-heading font-800 neon-text">
            {isInView ? (
                <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <Counter from={0} to={target} />
                </motion.span>
            ) : (
                '0'
            )}
            {suffix}
        </span>
    )
}

function Counter({ from, to }) {
    return (
        <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            <motion.span
                initial={{ textContent: from }}
                animate={{ textContent: to }}
                transition={{ duration: 2, ease: 'easeOut' }}
            >
                {to}
            </motion.span>
        </motion.span>
    )
}

export default function About() {
    return (
        <section id="about" className="relative py-24 md:py-32">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Text */}
                    <AnimatedSection direction="left">
                        <span className="section-label mb-4 inline-flex">About Us</span>
                        <h2 className="section-heading mt-4 mb-6">
                            We Build Digital Products That{' '}
                            <span className="neon-text">Defy Expectation</span>
                        </h2>
                        <div className="space-y-4 text-text-secondary leading-relaxed">
                            <p>
                                Lumiiko isn't just another agency. We're a collective of
                                designers, developers, and strategists who believe that digital
                                experiences should be extraordinary—not ordinary.
                            </p>
                            <p>
                                Founded on the principle that great design drives great business
                                outcomes, we've helped startups and enterprises alike transform
                                their digital presence into their most powerful growth engine.
                            </p>
                            <p>
                                Every project we take on is an opportunity to push boundaries, challenge
                                conventions, and deliver results that make our clients say
                                <span className="text-neon-blue font-medium"> "How did they do that?"</span>
                            </p>
                        </div>
                    </AnimatedSection>

                    {/* Stats */}
                    <AnimatedSection direction="right">
                        <div className="grid grid-cols-2 gap-6">
                            {stats.map((stat, i) => (
                                <div
                                    key={stat.label}
                                    className="bento-card p-6 text-center group"
                                >
                                    <AnimatedCounter target={stat.number} suffix={stat.suffix} />
                                    <p className="text-sm text-text-secondary mt-2 font-medium">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>
    )
}
