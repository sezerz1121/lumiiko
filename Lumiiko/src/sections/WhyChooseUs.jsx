import {
    HiOutlineLightningBolt,
    HiOutlineClock,
    HiOutlineShieldCheck,
    HiOutlineTrendingUp,
    HiOutlineChartBar,
    HiOutlineSupport,
} from 'react-icons/hi'
import AnimatedSection from '../components/AnimatedSection'

const reasons = [
    {
        icon: HiOutlineTrendingUp,
        title: 'Conversion-Driven',
        desc: 'Every design decision is backed by data and optimized for maximum conversions.',
    },
    {
        icon: HiOutlineLightningBolt,
        title: 'Fast Delivery',
        desc: 'We move at startup speed without compromising on quality or attention to detail.',
    },
    {
        icon: HiOutlineShieldCheck,
        title: 'Premium Quality',
        desc: 'Enterprise-grade code and pixel-perfect designs that stand the test of time.',
    },
    {
        icon: HiOutlineChartBar,
        title: 'Scalable Solutions',
        desc: 'Built to grow with your business—from MVP to millions of users.',
    },
    {
        icon: HiOutlineClock,
        title: 'Data-Informed',
        desc: 'We use analytics and user research to drive every strategic decision we make.',
    },
    {
        icon: HiOutlineSupport,
        title: 'Ongoing Support',
        desc: 'We don\'t disappear after launch. Continuous support and optimization included.',
    },
]

export default function WhyChooseUs() {
    return (
        <section className="relative py-24 md:py-32 bg-dark-light/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <AnimatedSection className="text-center mb-16">
                    <span className="section-label mb-4 inline-flex">Why Lumiiko</span>
                    <h2 className="section-heading mt-4">
                        Why Brands <span className="neon-text">Choose Us</span>
                    </h2>
                    <p className="section-subheading mx-auto mt-5">
                        We don't just meet expectations—we exceed them. Here's what sets us apart.
                    </p>
                </AnimatedSection>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reasons.map((reason, i) => (
                        <AnimatedSection key={reason.title} delay={i * 0.08}>
                            <div className="group flex gap-4 p-6 bento-card">
                                <div className="shrink-0 w-11 h-11 flex items-center justify-center rounded-xl bg-neon-blue/10 text-neon-blue group-hover:neon-glow transition-all duration-300">
                                    <reason.icon size={22} />
                                </div>
                                <div>
                                    <h3 className="font-heading font-600 mb-1.5 group-hover:text-neon-blue transition-colors">
                                        {reason.title}
                                    </h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">{reason.desc}</p>
                                </div>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>
    )
}
