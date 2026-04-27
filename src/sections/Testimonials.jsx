import { HiStar } from 'react-icons/hi'
import AnimatedSection from '../components/AnimatedSection'

const testimonials = [
    {
        quote:
            'Lumiiko completely transformed our digital presence. Our conversion rate tripled within the first month of launch. They don\'t just design—they engineer growth.',
        name: 'Sarah Chen',
        role: 'CEO',
        company: 'Nexus Finance',
    },
    {
        quote:
            'Working with Lumiiko felt like having an elite in-house team. The attention to detail, the speed, the results—everything exceeded our expectations.',
        name: 'Marcus Rivera',
        role: 'Head of Product',
        company: 'Velocity SaaS',
    },
    {
        quote:
            'They took our vague idea and turned it into a brand and website that our customers actually love. The ROI has been incredible. Best investment we\'ve made.',
        name: 'Emily Park',
        role: 'Founder',
        company: 'Lumina Fashion',
    },
]

export default function Testimonials() {
    return (
        <section className="relative py-24 md:py-32 bg-dark-light/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <span className="section-label mb-4 inline-flex">Testimonials</span>
                    <h2 className="section-heading mt-4">
                        What Our Clients <span className="neon-text">Say</span>
                    </h2>
                </AnimatedSection>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {testimonials.map((t, i) => (
                        <AnimatedSection key={t.name} delay={i * 0.12}>
                            <div className="h-full p-6 md:p-8 bento-card flex flex-col">
                                {/* Stars */}
                                <div className="flex gap-1 mb-4 text-neon-blue">
                                    {[...Array(5)].map((_, j) => (
                                        <HiStar key={j} size={16} />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p className="text-text-secondary leading-relaxed flex-1 mb-6 text-sm md:text-base">
                                    "{t.quote}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3 pt-4 border-t border-dark-border">
                                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-neon-blue to-neon-purple flex items-center justify-center text-white font-heading font-700 text-sm">
                                        {t.name.charAt(0)}
                                    </div>
                                    <div>
                                        <p className="text-sm font-medium text-text-primary">{t.name}</p>
                                        <p className="text-xs text-text-muted">
                                            {t.role}, {t.company}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
