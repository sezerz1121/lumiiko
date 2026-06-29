import { HiArrowRight } from 'react-icons/hi'
import AnimatedSection from '../components/AnimatedSection'

export default function CtaSection() {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0">
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-15 blur-3xl"
                    style={{
                        background:
                            'radial-gradient(circle, rgba(0,212,255,0.3), rgba(124,58,237,0.2) 50%, transparent 70%)',
                    }}
                />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <AnimatedSection>
                    <h2 className="font-heading font-800 text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
                        Ready to{' '}
                        <span className="neon-text">Elevate</span>
                        <br />
                        Your Brand?
                    </h2>
                    <p className="text-text-secondary text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
                        Let's build something extraordinary together. Your next breakthrough
                        digital experience starts with a conversation.
                    </p>
                    <a href="#contact" className="btn-primary text-base px-10 py-4">
                        <span className="flex items-center gap-2">
                            Book a Call
                            <HiArrowRight />
                        </span>
                    </a>
                </AnimatedSection>
            </div>
        </section>
    )
}
