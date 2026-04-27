import { motion, AnimatePresence } from 'framer-motion'
import { HiX, HiExternalLink } from 'react-icons/hi'

export default function ProjectModal({ project, onClose }) {
    if (!project) return null

    return (
        <AnimatePresence>
            <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
            >
                {/* Backdrop */}
                <motion.div
                    className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    onClick={onClose}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                />

                {/* Modal content */}
                <motion.div
                    className="relative z-10 w-full max-w-3xl glass-strong rounded-2xl overflow-hidden"
                    initial={{ scale: 0.9, y: 30 }}
                    animate={{ scale: 1, y: 0 }}
                    exit={{ scale: 0.9, y: 30 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                >
                    {/* Close button */}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 z-20 w-10 h-10 flex items-center justify-center rounded-full bg-dark/60 text-text-secondary hover:text-white hover:bg-dark transition-all cursor-pointer"
                    >
                        <HiX size={20} />
                    </button>

                    {/* Image */}
                    <div className="relative h-64 md:h-80 overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60`} />
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-6xl font-heading font-800 text-white/10">
                                {project.title}
                            </span>
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-dark-card to-transparent" />
                    </div>

                    {/* Info */}
                    <div className="p-6 md:p-8">
                        <div className="flex items-center gap-3 mb-3">
                            <span className="section-label text-xs">{project.category}</span>
                        </div>
                        <h3 className="text-2xl md:text-3xl font-heading font-700 mb-4">
                            {project.title}
                        </h3>
                        <p className="text-text-secondary leading-relaxed mb-6">
                            {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-6">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="px-3 py-1 text-xs font-medium rounded-full bg-dark border border-dark-border text-text-secondary"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>

                        {/* 👇 Button row */}
                        <div className="flex items-center gap-3">
                            <button className="btn-primary" onClick={onClose}>
                                <span>Close</span>
                            </button>
                            {project.url && (
                                <a
                                    href={project.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary inline-flex items-center gap-2"
                                >
                                    <span>Visit Site</span>
                                    <HiExternalLink size={16} />
                                </a>
                            )}
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}