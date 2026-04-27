import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenuAlt3, HiX } from 'react-icons/hi'

const links = [
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileOpen, setMobileOpen] = useState(false)

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40)
        window.addEventListener('scroll', onScroll)
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    useEffect(() => {
        document.body.style.overflow = mobileOpen ? 'hidden' : ''
        return () => { document.body.style.overflow = '' }
    }, [mobileOpen])

    return (
        <>
            <motion.nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-strong shadow-lg shadow-black/20' : 'bg-transparent'
                    }`}
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-18">
                        {/* Logo */}
                        <a href="#hero" className="flex items-center gap-2 group">
                            
                            <span className="text-lg font-heading font-600 text-text-primary group-hover:text-neon-blue transition-colors">
                                Lumiiko
                            </span>
                        </a>

                        {/* Desktop links */}
                        <div className="hidden md:flex items-center gap-8">
                            {links.map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="text-sm font-medium text-text-secondary hover:text-neon-blue transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-neon-blue after:transition-all after:duration-300 hover:after:w-full"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>

                        {/* CTA + Mobile toggle */}
                        <div className="flex items-center gap-4">
                            <a href="#contact" className="hidden md:inline-flex btn-primary text-[11px] py-1 px-3">
                                <span>Start Project</span>
                            </a>
                            <button
                                className="md:hidden text-text-primary p-2 cursor-pointer"
                                onClick={() => setMobileOpen(true)}
                                aria-label="Open menu"
                            >
                                <HiMenuAlt3 size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </motion.nav>

            {/* Mobile menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        className="fixed inset-0 z-[60] md:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="absolute inset-0 bg-black/60" onClick={() => setMobileOpen(false)} />
                        <motion.div
                            className="absolute right-0 top-0 bottom-0 w-72 glass-strong flex flex-col"
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        >
                            <div className="flex items-center justify-between p-5 border-b border-dark-border">
                                <span className="text-lg font-heading font-600 neon-text">Menu</span>
                                <button
                                    onClick={() => setMobileOpen(false)}
                                    className="p-2 text-text-secondary hover:text-white cursor-pointer"
                                    aria-label="Close menu"
                                >
                                    <HiX size={22} />
                                </button>
                            </div>
                            <div className="flex flex-col gap-1 p-4 flex-1">
                                {links.map((link, i) => (
                                    <motion.a
                                        key={link.href}
                                        href={link.href}
                                        onClick={() => setMobileOpen(false)}
                                        className="px-4 py-3 rounded-xl text-text-secondary hover:text-neon-blue hover:bg-dark/50 transition-all font-medium"
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: 0.1 + i * 0.05 }}
                                    >
                                        {link.label}
                                    </motion.a>
                                ))}
                            </div>
                            <div className="p-4 border-t border-dark-border">
                                <a
                                    href="#contact"
                                    onClick={() => setMobileOpen(false)}
                                    className="btn-primary w-full justify-center text-sm py-3"
                                >
                                    <span>Start Project</span>
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
