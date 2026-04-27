import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { HiSearch, HiLightningBolt, HiColorSwatch, HiCode, HiSparkles } from 'react-icons/hi'

const steps = [
    {
        num: '01',
        title: 'Discover',
        desc: 'We dive deep into your brand, audience, and goals to understand the full picture.',
        icon: HiSearch,
    },
    {
        num: '02',
        title: 'Strategy',
        desc: 'A data-driven roadmap that aligns design decisions with business objectives.',
        icon: HiLightningBolt,
    },
    {
        num: '03',
        title: 'Design',
        desc: 'Pixel-perfect interfaces crafted to captivate users and maximize conversions.',
        icon: HiColorSwatch,
    },
    {
        num: '04',
        title: 'Develop',
        desc: 'Clean, performant code built with modern technologies for speed and scale.',
        icon: HiCode,
    },
    {
        num: '05',
        title: 'Launch',
        desc: 'Rigorous testing, seamless deployment, and ongoing support post-launch.',
        icon: HiSparkles,
    },
]

/* ── Floating sphere config ─────────────────── */
const spheres = [
    { size: 100, x: '8%', y: '10%', delay: 0, duration: 8, gradient: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.25), rgba(59,130,246,0.05) 60%, transparent 80%)', glow: 'rgba(59,130,246,0.15)' },
    { size: 60, x: '90%', y: '18%', delay: 1.5, duration: 10, gradient: 'radial-gradient(circle at 30% 30%, rgba(34,211,238,0.3), rgba(34,211,238,0.08) 60%, transparent 80%)', glow: 'rgba(34,211,238,0.2)' },
    { size: 44, x: '15%', y: '45%', delay: 0.8, duration: 9, gradient: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.2), rgba(34,211,238,0.1) 60%, transparent 80%)', glow: 'rgba(59,130,246,0.12)' },
    { size: 80, x: '88%', y: '55%', delay: 2, duration: 11, gradient: 'radial-gradient(circle at 30% 30%, rgba(34,211,238,0.22), rgba(59,130,246,0.08) 60%, transparent 80%)', glow: 'rgba(34,211,238,0.15)' },
    { size: 36, x: '5%', y: '78%', delay: 3, duration: 7, gradient: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.18), transparent 70%)', glow: 'rgba(59,130,246,0.1)' },
    { size: 52, x: '82%', y: '85%', delay: 1, duration: 9.5, gradient: 'radial-gradient(circle at 30% 30%, rgba(34,211,238,0.2), rgba(59,130,246,0.06) 60%, transparent 80%)', glow: 'rgba(34,211,238,0.12)' },
    { size: 28, x: '48%', y: '8%', delay: 2.5, duration: 8.5, gradient: 'radial-gradient(circle at 30% 30%, rgba(59,130,246,0.2), transparent 70%)', glow: 'rgba(59,130,246,0.1)' },
]

/* ── Single floating sphere ─────────────────── */
function FloatingSphere({ sphere }) {
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start end', 'end start'],
    })
    const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -40])

    return (
        <motion.div
            ref={ref}
            className="floating-sphere"
            style={{
                width: sphere.size,
                height: sphere.size,
                left: sphere.x,
                top: sphere.y,
                background: sphere.gradient,
                boxShadow: `0 0 ${sphere.size * 0.4}px ${sphere.glow}, inset 0 0 ${sphere.size * 0.2}px rgba(255,255,255,0.04)`,
                y: parallaxY,
            }}
            animate={{
                y: [0, -sphere.size * 0.35, 0, sphere.size * 0.2, 0],
                x: [0, sphere.size * 0.12, 0, -sphere.size * 0.08, 0],
            }}
            transition={{
                duration: sphere.duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: sphere.delay,
            }}
        />
    )
}

/* ── Step card ──────────────────────────────── */
function StepCard({ step, index }) {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-60px' })
    const isLeft = index % 2 === 0
    const Icon = step.icon

    return (
        <div
            ref={ref}
            className={`process-step md:flex items-center gap-0 md:py-6 ${isLeft ? '' : 'md:flex-row-reverse'}`}
        >
            {/* Card */}
            <motion.div
                className={`flex-1 ${isLeft ? 'md:flex md:justify-end' : 'md:flex md:justify-start'}`}
                initial={{ opacity: 0, x: isLeft ? -60 : 60, y: 20 }}
                animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
                transition={{
                    duration: 0.7,
                    delay: index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94],
                }}
            >
                <div className="bento-card bento-card-purple p-6 group max-w-md w-full">
                    {/* Icon + Step label */}
                    <div className="flex items-center gap-3 mb-4">
                        <div className="process-icon-wrapper">
                            <Icon size={20} />
                        </div>
                        <span className="text-xs font-mono tracking-[0.2em] uppercase" style={{ color: 'var(--color-neon-blue)' }}>
                            Step {step.num}
                        </span>
                    </div>

                    <h3
                        className="text-xl font-bold mb-2"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text-secondary)', opacity: 0.85 }}>
                        {step.desc}
                    </p>
                </div>
            </motion.div>

            {/* Timeline node */}
            <motion.div
                className="hidden md:flex flex-col items-center shrink-0"
                style={{ width: 64 }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                    duration: 0.5,
                    delay: index * 0.15 + 0.2,
                    ease: 'backOut',
                }}
            >
                <div className="process-timeline-node">
                    <span className="relative z-10 text-sm font-bold" style={{ fontFamily: 'var(--font-heading)', color: 'var(--color-neon-blue)' }}>
                        {step.num}
                    </span>
                    <div className="process-timeline-node-glow" />
                </div>
            </motion.div>

            {/* Spacer */}
            <div className="flex-1 hidden md:block" />
        </div>
    )
}

/* ── Main Process section ───────────────────── */
export default function Process() {
    const sectionRef = useRef(null)
    const headerInView = useInView(sectionRef, { once: true, margin: '-80px' })

    return (
        <section
            id="process"
            ref={sectionRef}
            className="relative py-24 md:py-36 overflow-hidden"
            style={{
                background: 'linear-gradient(180deg, var(--color-dark) 0%, #060d17 30%, #081020 60%, var(--color-dark) 100%)',
            }}
        >
            {/* Background depth effects */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {/* Radial glow — top left */}
                <div
                    className="absolute"
                    style={{
                        width: 600,
                        height: 600,
                        left: '-10%',
                        top: '5%',
                        background: 'radial-gradient(circle, rgba(59,130,246,0.06) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />
                {/* Radial glow — bottom right */}
                <div
                    className="absolute"
                    style={{
                        width: 500,
                        height: 500,
                        right: '-5%',
                        bottom: '10%',
                        background: 'radial-gradient(circle, rgba(34,211,238,0.07) 0%, transparent 70%)',
                        filter: 'blur(60px)',
                    }}
                />
                {/* Subtle noise texture */}
                <div
                    className="absolute inset-0 opacity-[0.015]"
                    style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E")`,
                        backgroundSize: '128px 128px',
                    }}
                />
            </div>

            {/* Floating spheres */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
                {spheres.map((s, i) => (
                    <FloatingSphere key={i} sphere={s} />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.header
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 30 }}
                    animate={headerInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                    <span className="section-label mb-4 inline-flex">Our Process</span>
                    <h2 className="section-heading mt-4">
                        From Idea to <span className="neon-text">Launch</span>
                    </h2>
                    <p className="section-subheading mx-auto mt-5">
                        A proven 5-step process that transforms your vision into a high-performing digital reality.
                    </p>
                </motion.header>

                {/* Timeline layout */}
                <div className="relative">
                    {/* Vertical glowing line (desktop) */}
                    <div className="process-timeline-line" aria-hidden="true" />

                    {/* Steps */}
                    <div className="space-y-6 md:space-y-0">
                        {steps.map((step, i) => (
                            <StepCard key={step.num} step={step} index={i} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
