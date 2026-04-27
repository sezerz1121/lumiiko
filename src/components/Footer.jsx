import { FaGithub, FaXTwitter, FaLinkedinIn, FaDribbble } from 'react-icons/fa6'

const footerLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
]

const socials = [
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaXTwitter, href: '#', label: 'X' },
    { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
    { icon: FaDribbble, href: '#', label: 'Dribbble' },
]

export default function Footer() {
    return (
        <footer className="border-t border-dark-border bg-dark">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo */}
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <a href="#home" className="flex items-center gap-2">
                            
                            <span className="text-lg font-heading font-600 text-text-primary">
                                Lumiiko
                            </span>
                        </a>
                        <p className="text-sm text-text-muted">Illuminate Your Vision. Build Experiences That Convert.</p>
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap items-center justify-center gap-6">
                        {footerLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className="text-sm text-text-secondary hover:text-neon-blue transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* Socials */}
                    {/* <div className="flex items-center gap-3">
                        {socials.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                aria-label={s.label}
                                className="w-9 h-9 flex items-center justify-center rounded-full border border-dark-border text-text-secondary hover:text-neon-blue hover:border-neon-blue transition-all duration-300"
                            >
                                <s.icon size={16} />
                            </a>
                        ))}
                    </div> */}
                </div>

                <div className="mt-10 pt-6 border-t border-dark-border text-center">
                    <p className="text-xs text-text-muted">
                        &copy; {new Date().getFullYear()} Lumiiko. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
