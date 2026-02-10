import { motion } from 'framer-motion';
import { TextGenerateEffect } from "./text-generate-effect.tsx";

export default function ShortStory() {
    const story =
        "With over 3 years of hands-on experience, I specialize in building intelligent automation solutions as an Applied AI Engineer. My expertise spans GenAI technologies including agentic AI frameworks like OpenAI Agents SDK and LangChain, along with Python, LLM integration, and vector databases. Proficient in deploying AI-powered solutions on AWS and Azure cloud platforms, I drive innovation by bridging cutting-edge AI with enterprise automation. Let's build something extraordinary together!";

    return (
        <section className="relative w-full py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors duration-500">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center"
                >
                    {/* Section Title */}
                    <div className="mb-12">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            My <span className="bg-gradient-to-r from-primary-600 to-accent-600 dark:from-primary-400 dark:to-accent-400 bg-clip-text text-transparent">Story</span>
                        </h2>
                        <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto rounded-full"></div>
                    </div>

                    {/* Story Content */}
                    <div className="relative">
                        {/* Decorative Quote Mark */}
                        <div className="absolute -top-8 -left-4 sm:-left-8 text-8xl sm:text-9xl text-primary-200 dark:text-primary-900/30 font-serif leading-none select-none">
                            "
                        </div>

                        {/* Text Content */}
                        <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 dark:from-zinc-900 dark:to-zinc-800 rounded-3xl p-8 sm:p-12 shadow-lg dark:shadow-2xl border border-gray-200 dark:border-zinc-700">
                            <div className="text-base sm:text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
                                <TextGenerateEffect words={story} />
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-primary-400/20 to-accent-400/20 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -top-4 -left-4 w-32 h-32 bg-gradient-to-br from-accent-400/20 to-primary-400/20 rounded-full blur-3xl -z-10"></div>
                    </div>

                    {/* Optional: Skills Highlight */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                        className="mt-12 flex flex-wrap justify-center gap-3"
                    >
                        {['GenAI', 'LangChain', 'Python', 'AWS', 'Azure', 'Vector Databases'].map((skill, index) => (
                            <span
                                key={index}
                                className="px-4 py-2 bg-white dark:bg-zinc-800 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium shadow-sm border border-gray-200 dark:border-zinc-700 hover:scale-105 transition-transform"
                            >
                                {skill}
                            </span>
                        ))}
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
